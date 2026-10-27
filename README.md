# Study Tracker

A minimal, fast web page that ties together Anki (AnKing), AMBOSS, Boards & Beyond and Bootcamp. UWorld support is coming.

- **Today**: a daily checklist of Anki reviews; for each lecture due that day, its B&B cards, practice quiz and readiness quiz; AMBOSS questions on lectures you watched recently; and AMBOSS questions on your weakest area.
- **Priority**: ranks your weakest lectures (or AnKing subjects) from your Anki review history.
- **Lectures**: your lectures, each with a due date, a type (Biochem, Genetics, Pharm, Immuno or Path), an optional video link, and the B&B cards Claude picked from its slides.
- **History**: every day's Today list, what you finished, and your daily review counts.
- **Leeches**: a separate tab for the cards Anki keeps suspending, so you can fix them.

Your data saves automatically to a file in your GitHub account, so the dashboard stays in sync on your phone, tablet and computer. The only change the page makes in Anki is unsuspending the cards Claude picked for each lecture on its due date. You can turn that off; everything else is read-only. Refreshing stats needs the computer where Anki is open; your phone shows the latest synced view.

## How to set it up

### 1. Create your repository and add the page

1. Log in at [github.com](https://github.com/).
2. Click the **+** icon (top right) → **New repository**.
3. Repository name: `med-school-tracker`.
4. Leave it **Public**. GitHub Pages is free only for public repositories; a private repo needs a paid plan. Your saved study data (`database.json`) will be publicly readable. Your GitHub token is never saved in the repository.
5. Tick **Add a README file**, then click **Create repository**.
6. Click **Add file** → **Upload files**, drag in `index.html` from this project, and click **Commit changes**. The file must be named exactly `index.html`. Uploading is easier than pasting the code, because the file is large.

### 2. Create your save file (optional)

The page creates `database.json` on its first save. To create it yourself:

1. In your repository, click **Add file** → **Create new file**.
2. Name it exactly `database.json`.
3. Type just `{}` in the file box.
4. Click **Commit changes**.

### 3. Put the page on the web (GitHub Pages)

1. In your repository, open the **Settings** tab.
2. In the left sidebar, under **Code and automation**, click **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Under **Branch**, choose **main**, leave the folder as **/ (root)**, and click **Save**.
5. Wait 1–2 minutes and refresh. GitHub shows your live link at the top, for example `https://yourusername.github.io/med-school-tracker/`. Bookmark it on your phone and computer.

### 4. Get a GitHub key (token) so the page can save

1. On GitHub, click your profile picture (top right) → **Settings**.
2. At the bottom of the left sidebar, click **Developer settings**.
3. Click **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
4. Name it `Study Tracker Sync`.
5. **Expiration**: pick a longer period than the 30-day default, such as the end of your semester. When the token expires, syncing stops until you make a new one.
6. **Repository access**: choose **Only select repositories** and pick `med-school-tracker`.
7. Under **Permissions** → **Repository permissions**, set **Contents** to **Read and write**.
8. Click **Generate token** and copy it right away (it starts with `github_pat_`). GitHub only shows it once.

### 5. Connect the page to GitHub

Open your bookmarked link and fill in the two boxes at the top right:

- **GitHub Token**: the `github_pat_...` key from step 4.
- **username/repo**: your username and repository, for example `peterdenman/med-school-tracker`.

The status under the title changes to **Sync: Connected**, or to **Sync: Connected (file will be created)** if you skipped step 2. The token is saved only in that browser, so enter it once on each device you use.

### 6. Connect the page to Anki (on your computer)

1. In Anki: **Tools → Add-ons → Get Add-ons**, enter `2055492159` (AnkiConnect), and restart Anki.
2. Use **Chrome, Edge or Firefox** on the same computer as Anki, and keep Anki open.
3. Open your page. The first time, Anki shows a permission popup for the site; click **Yes**. If the browser asks to allow access to devices on your local network, allow that too.
4. Still not connecting? In Anki, open **Tools → Add-ons → AnkiConnect → Config** and add your site to `webCorsOriginList`. Use only the start of the address, with no repository name and no trailing slash:
   ```json
   "webCorsOriginList": [
       "http://localhost",
       "https://yourusername.github.io"
   ]
   ```
   Click **OK** and restart Anki.

From then on, the page connects and refreshes your stats whenever you open it with Anki running. Connection settings and first-time help are under **AnKing Sync** at the bottom of the page.

### 7. Recommended

- **AnKing Step deck (v12, via AnkiHub)**: the B&B and Bootcamp video tags come from the current version.
- **[AMBOSS Anki add-on](https://amboss.com/us/anki/qbank)**: the **Open cards** buttons show cards in Anki's Browse window. There you select all and click **Start Qbank Session** to get AMBOSS questions on exactly those cards.

## Using it

- **Each day's lectures**: send Claude the day's slides. Claude searches your B&B cards (from **Export all B&B cards**, below) and sends back a lectures file listing each lecture with its date, type and the notes that match its slides. Import it with **Import lectures (.json)** under the Add lecture button. Importing a lecture with the same name and date again updates it instead of adding a copy.
- **Adding a lecture by hand**: in the **Lectures** card, type the lecture name, paste its video link (optional), pick the due date and type, and click **Add lecture** (or press Enter). If you paste only a link, the name is taken from it. A lecture added by hand has no cards until you import picks for it (same name and date).
- **On the due date**, Today adds three rows for the lecture: **B&B cards** (or **Watch** for a lecture with no cards picked), **Practice quiz** and **Readiness quiz**. Tick the quizzes off yourself. Anything you don't finish stays on Today, marked overdue, until you tick it. A lecture moves to **Done** in the Lectures card once all three are ticked.
- **Changing or removing**: change a lecture's due date with the date box on its row. Click **✕** to remove it; **Undo** brings it back.
- **Automatic unsuspend**: on a lecture's due date, the page unsuspends its picked notes as soon as it's open on the computer with Anki running. Leech cards stay suspended, and a note's cloze cards are unsuspended together. The lecture's **B&B cards** row on Today then ticks itself off and shows how many cards were unsuspended. Each note is unsuspended once, so if you re-suspend cards in Anki the page leaves them alone. To unsuspend a lecture early, click **Unsuspend now** on its row. To stop automatic unsuspending, untick **Unsuspend each lecture's picked cards automatically** under the Add lecture button; **Unsuspend now** still works. **Cards** opens a lecture's cards in Anki's Browse window.
- **Export all B&B cards**: saves every B&B card in your collection (its text, note ID and video) to one file, `bnb_cards_<date>.json`, of several megabytes. Send it to Claude once. After that, Claude can search all of B&B by topic and send back a picks file from just your slides; you don't need to export each day. Export again after a big AnkiHub update, and send it again at the start of a new conversation with Claude.
- **AMBOSS follow-ups**: 2 days and 2 weeks after a lecture's cards are unsuspended (or you tick **Watch**), Today adds AMBOSS questions on that lecture. **Open cards** opens its cards in Anki for an AMBOSS Qbank session.
- **Each day**: work down the **Today** list. Reviews tick off when you're caught up in Anki; tick everything else yourself.
- **History**: the **History** tab keeps each day's Today list with what you finished, a 4-week overview, your streak of fully finished days, and Anki's review count for each day.
- **Weak areas (by lecture)**: Priority ranks your lectures by default. Each lecture is scored from reviews of its own cards, the ones unsuspended for it: 70% Again rate on reviews in the look-back window plus 30% share of cards with 3+ lapses. A lecture is ranked once it has 20+ reviews. Until then it's listed under **Collecting reviews**, which usually takes a few days after its cards are unsuspended. Switch to **By AnKing subject** for the old subject ranking, which is handy for Step 1 prep. Stats refresh when you open the page with Anki running, or when you click **Refresh**.
- **AnKing Notebook**: follows the same switch. Pick a lecture to see its retention, lapses, active and mature cards, weekly retention chart and AMBOSS topics. **Start Qbank session** opens that lecture's weak cards in Anki for an AMBOSS session; **Open all its cards** opens every card. Today's **AMBOSS · weak area** row rotates through your weakest lectures. **Progress Over Time** has a **Lectures** history too.
- **Leeches**: the **Leeches** tab lists cards Anki tagged as leeches (and suspended), grouped by subject, plus "almost leeches" with 5+ lapses. Click **Open** to edit a card in Anki, rewrite it, then unsuspend it there. The Today panel tells you when new leeches appear.

## Updating the page

1. In your repository, click `index.html` → the pencil (edit) icon, or upload the new file over the old one, and commit.
2. Wait 1–2 minutes for GitHub Pages to update. Check the **Actions** tab for a green check.
3. Hard-refresh the page (Ctrl+Shift+R, or Cmd+Shift+R on Mac). The small **Version** line under the title shows which version is live.

Your data in `database.json` is kept when you update the page.
