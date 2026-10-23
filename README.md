# Study Tracker

A minimal, fast web page that ties together Anki (AnKing), AMBOSS, Boards & Beyond and Bootcamp. UWorld support is coming.

- **Today**: a daily checklist of Anki reviews, videos to watch, AMBOSS questions on newly unsuspended videos, and AMBOSS questions on your weakest area.
- **Priority**: ranks your weakest subjects from your Anki review history.
- **Upcoming Unsuspends**: plans which videos and cards to unsuspend and when. Import a B&B schedule spreadsheet, or match a lecture PDF to its videos.
- **Leeches**: a separate tab for the cards Anki keeps suspending, so you can fix them.

Your data saves automatically to a file in your GitHub account, so the dashboard stays in sync on your phone, tablet and computer. Anything that changes cards (refreshing stats, unsuspending) needs the computer where Anki is open; your phone shows the latest synced view.

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

- **Plan the semester**: in **Upcoming Unsuspends**, click **Import B&B schedule (.xlsx)** to schedule every video for its lecture day. You can also use **Match a lecture PDF**, or **+ Add videos or cards** to pick videos by hand.
- **Each day**: work down the **Today** list. Reviews and videos tick themselves off from Anki; tick the AMBOSS rows yourself when you finish them.
- **Weak areas**: click **Refresh** on the Priority card to re-rank your subjects. Click any area to see its stats and AMBOSS practice in the **AnKing Notebook** section.
- **Leeches**: the **Leeches** tab lists cards Anki tagged as leeches (and suspended), grouped by subject, plus "almost leeches" with 5+ lapses. Open each card in Anki to rewrite it, then unsuspend it or reset it. The Today panel tells you when new leeches appear.

## Updating the page

1. In your repository, click `index.html` → the pencil (edit) icon, or upload the new file over the old one, and commit.
2. Wait 1–2 minutes for GitHub Pages to update. Check the **Actions** tab for a green check.
3. Hard-refresh the page (Ctrl+Shift+R, or Cmd+Shift+R on Mac). The small **Version** line under the title shows which version is live.

Your data in `database.json` is kept when you update the page.
