class FSRSEngine {
  constructor() {
    // Official default FSRS v4.5/6 weights
    this.w = [
      0.4025, 1.4612, 3.3458, 15.6889, 5.8273, 0.7259, 1.0652, 0.0631, 
      2.1818, 0.1654, 1.0523, 0.8123, 0.9024, 0.4497, 1.5472, 0.4018, 
      0.3951, 0.1118, 0.8974
    ];
    this.w20 = 0.003; // FSRS constant factor parameter exponent
    this.targetRetention = 0.90; // Your 90% retention goal
    this.factor = Math.pow(0.9, -1 / this.w20) - 1;
  }

  // 1. Initialize a brand new topic on its first review
  initializeTopic(grade) {
    // Grade: 1 = Again, 2 = Hard, 3 = Good, 4 = Easy
    const initialDifficulty = this.w[4] - (grade - 3);
    const initialStability = this.w[0] * 0.25 * Math.pow(2, grade - 1);
    
    return {
      stability: initialStability,
      difficulty: Math.max(1, Math.min(10, initialDifficulty)), // Cap between 1 and 10
      replays: 1
    };
  }

  // 2. Calculate current Retrievability (R) based on elapsed days (t)
  calculateRetrievability(stability, elapsedDays) {
    if (elapsedDays === 0) return 1.0;
    return Math.pow(1 + this.factor * (elapsedDays / stability), -this.w20);
  }

  // 3. Update memory metrics for an existing topic
  updateTopic(currentStability, currentDifficulty, elapsedDays, grade) {
    const R = this.calculateRetrievability(currentStability, elapsedDays);
    
    // Update Difficulty
    let nextDifficulty = currentDifficulty - 0.1 * (grade - 3);
    nextDifficulty = Math.max(1, Math.min(10, nextDifficulty));

    let nextStability;
    if (grade === 1) {
      // Forgetting curve update (Grade = 1)
      nextStability = this.w[9] * Math.pow(nextDifficulty, -this.w[10]) * 
                      Math.pow(currentStability, this.w[11]) * 
                      Math.exp(this.w[12] * (1 - R));
    } else {
      // Successful recall curve update (Grade = 2, 3, 4)
      const hardModifier = grade === 2 ? this.w[15] : 1.0;
      const easyModifier = grade === 4 ? this.w[16] : 1.0;
      
      nextStability = currentStability * (
        Math.exp(this.w[6] * (11 - nextDifficulty)) * 
        Math.pow(currentStability, -this.w[7]) * 
        (Math.exp(this.w[8] * (1 - R)) - 1) + 1
      ) * hardModifier * easyModifier;
    }

    return {
      stability: nextStability,
      difficulty: nextDifficulty
    };
  }

  // 4. Calculate the ideal next interval in days
  calculateNextInterval(stability) {
    const interval = (stability / this.factor) * (Math.pow(this.targetRetention, -1 / this.w20) - 1);
    return Math.max(1, Math.round(interval)); // Minimum interval is 1 day
  }
}
const fsrs = new FSRSEngine();

// Save or log a topic rating
function logTopicReview(topicName, grade) {
  let db = JSON.parse(localStorage.getItem('teach_program_db')) || {};
  const now = new Date();

  if (!db[topicName]) {
    // New Topic Ingestion
    const initialMetrics = fsrs.initializeTopic(grade);
    const nextInterval = fsrs.calculateNextInterval(initialMetrics.stability);
    
    db[topicName] = {
      name: topicName,
      stability: initialMetrics.stability,
      difficulty: initialMetrics.difficulty,
      lastReviewed: now.toISOString(),
      nextDue: new Date(now.getTime() + nextInterval * 24 * 60 * 60 * 1000).toISOString()
    };
  } else {
    // Existing Topic Review
    const topic = db[topicName];
    const elapsedDays = Math.max(0, (now - new Date(topic.lastReviewed)) / (1000 * 60 * 60 * 24));
    
    const updatedMetrics = fsrs.updateTopic(topic.stability, topic.difficulty, elapsedDays, grade);
    const nextInterval = fsrs.calculateNextInterval(updatedMetrics.stability);

    topic.stability = updatedMetrics.stability;
    topic.difficulty = updatedMetrics.difficulty;
    topic.lastReviewed = now.toISOString();
    topic.nextDue = new Date(now.getTime() + nextInterval * 24 * 60 * 60 * 1000).toISOString();
  }

  localStorage.setItem('teach_program_db', JSON.stringify(db));
  displaySchedule();
}

// Generate the daily checklist sorted by urgency
function getDailySchedule() {
  const db = JSON.parse(localStorage.getItem('teach_program_db')) || {};
  const now = new Date();
  
  return Object.values(db)
    .filter(topic => new Date(topic.nextDue) <= now)
    .sort((a, b) => b.difficulty - a.difficulty); // Prioritize harder topics first
}