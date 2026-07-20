Study Tracker

A simple webpage to track your medical school lectures using science-based review schedules (**FSRS algorithm**). It also includes an optional **AI slide tester** that listens to you teach a slide from memory and tells you what you missed.

Your progress saves automatically to GitHub, so you can study on your phone, tablet, or computer, and always see the same updated list.

---

## How to Set It Up

### 1. Create a Save File on GitHub

1. Go to your GitHub repository where this code is hosted.
2. Create a new file named exactly `database.json`.
3. Inside the file, type just two curly brackets: `{}`. Save and commit the file.

### 2. Get a GitHub Key (Token)

To let the webpage save your data automatically, it needs permission:

1. On GitHub, click your profile picture (top right) $\rightarrow$ **Settings** $\rightarrow$ **Developer settings** (bottom left).
2. Click **Personal access tokens** $\rightarrow$ **Fine-grained tokens**.
3. Click **Generate new token**. Name it `Study Tracker`.
4. Set **Repository access** to *Only select repositories* and pick your repository.
5. Under **Permissions**, click *Repository permissions*, scroll to **Contents**, and change it to **Read and write**.
6. Click **Generate token** at the bottom. Copy the long key that pops up.

### 3. Connect Your Webpage

Open your webpage in your browser and fill out the boxes at the top:

* **Gemini API Key:** Your Google AI key for slide grading.
* **GitHub Token:** The long key you just generated.
* **username/repo:** Your GitHub username and repository name (for example: `peterdenman/peterdenman.github.io`).

Once connected, the top text will change to **Sync: Connected**.



3. **Log Your Work:** Type the topic name into the box, choose how you studied it (Anki, Q-Bank, or TEACH), and press a button from **1 (Again)** to **4 (Easy)**.

The tracker instantly saves your score to the cloud and pushes the next review date out into the future.
