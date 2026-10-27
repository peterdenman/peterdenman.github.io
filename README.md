# Study Tracker

Daily checklist, Anki (AnKing) stats, B&B cards for each lecture, AMBOSS and Gemini practice questions. It syncs through your GitHub account, so it works on your phone and computer.

The only change the page makes in Anki is unsuspending the cards picked for each lecture on its due date. Everything else is read-only.

## Set up (once)

1. **Make the repository.** On [github.com](https://github.com/), click **+** → **New repository**, name it `med-school-tracker`, leave it **Public** (GitHub Pages is free only for public repos, so your saved study data is publicly readable), and click **Create repository**. Then **Add file** → **Upload files** and upload `index.html`.
2. **Turn on GitHub Pages.** In the repository, go to **Settings** → **Pages**, set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, and click **Save**. After a minute or two, your link appears there, for example `https://yourusername.github.io/med-school-tracker/`. Bookmark it.
3. **Make a GitHub token.** Profile picture → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**. Give it access to **only** `med-school-tracker`, set **Contents** to **Read and write**, and pick an expiration date at the end of your semester. Copy the token (`github_pat_…`).
4. **Connect.** Open your link and fill in the two boxes at the top: the token, and `username/med-school-tracker`. It should say **Sync: Connected**. Do this once on each device; the token is never saved in the repository.
5. **Connect Anki** (on your computer). In Anki, go to **Tools → Add-ons → Get Add-ons**, enter `2055492159` (AnkiConnect), and restart Anki. Open the page in Chrome, Edge or Firefox with Anki running, and click **Yes** on Anki's popup. If it still won't connect, add your site to AnkiConnect's config (**Tools → Add-ons → AnkiConnect → Config**) and restart Anki:
   ```json
   "webCorsOriginList": ["http://localhost", "https://yourusername.github.io"]
   ```
6. **Optional:** the [AMBOSS Anki add-on](https://amboss.com/us/anki/qbank) turns any **Open cards** button into an AMBOSS Qbank session: in Anki's Browse window, select all and click **Start Qbank Session**.

## Daily routine

1. **Send Claude the day's lecture slides.** Claude sends back a lectures file with the B&B cards that match each lecture. Import it with **Import lectures (.json)** in the Lectures card.
2. **On the lecture's day**, open the page on your computer with Anki running. The picked cards are unsuspended automatically; leeches stay suspended. Or click **Unsuspend now** on a lecture to do it early.
3. **Work down Today.** Reviews and the B&B cards row tick themselves off; tick the rest yourself. Anything you don't finish stays on Today, marked overdue.

Claude needs your B&B cards once: click **Export all B&B cards** and send Claude the file. Do it again after a big AnkiHub update or in a new conversation with Claude.

## What's on the page

- **Today**: your Anki reviews, new lecture cards waiting to learn, each lecture's B&B cards, practice quiz and readiness quiz, AMBOSS and Gemini quizzes, and your own tasks.
  - **New cards** shows how many lecture cards you haven't started, and warns in red if you're adding cards faster than your deck's **New cards/day** limit can keep up.
  - **Your own tasks**: type anything in the box under the list, pick a day, and press **Add**.
- **Quizzes** tab: today's quizzes, what's coming in the next 7 days, every lecture's Gemini quizzes with scores, and the Gemini settings. Each lecture gets quizzed at about 1, 3, 7 and 14 days: Gemini on days 1 and 7, AMBOSS on days 3 and 14.
- **Priority**: your weakest lectures, ranked from reviews of their own cards (70% Again rate + 30% cards with 3+ lapses). A lecture is ranked once it has 20 reviews. Switch to **By AnKing subject** for Step 1 prep.
- **Lectures**: add, re-date or remove lectures (**✕**, with **Undo**). **Cards** opens a lecture's cards in Anki. **Quiz** adds files for Gemini quizzes.
- **AnKing Notebook** and **Progress Over Time** (bottom of the page): stats, weekly retention and AMBOSS practice for each lecture.
- **History** tab: each day's checklist, your streak and your daily review counts.
- **Leeches** tab: cards Anki keeps suspending. Click **Open** to fix one in Anki, then unsuspend it there.

## Gemini quizzes

1. On the **Quizzes** tab, open **Gemini settings**, paste your API key and click **Save**. The key stays in that browser only. Your prompt is filled in; edit it anytime.
2. On a lecture, click **Quiz** and add the slides, practice quiz and readiness quiz (PDF, .pptx or .docx; PDF is best because Gemini sees the images). The questions are written automatically once all three are in, or click **Write quizzes now** to use the slides alone.
3. Quizzes show on Today and the Quizzes tab on their days, at most 2 a day. **Open** in the lecture's Quiz panel lets you take one early.

The files stay on the computer you added them on; the questions and scores sync to your phone. AI-written questions can have a wrong answer key, so each one names its source slide. In Google Cloud Console, restrict your key to the Generative Language API and your `github.io` address.

## Updating the page

Upload the new `index.html` over the old one in your repository, wait a minute or two, then hard-refresh (Ctrl+Shift+R, or Cmd+Shift+R on Mac). The **Version** line under the title shows which version is live. Your saved data is kept.
