# Study Tracker

A minimal, fast webpage to manage medical school lecture volume using science-based review schedules (**FSRS algorithm** calibrated to an optimal $85\%$ retention sweet spot). It includes a master schedule tracker and an **AI slide tester** that listens to you teach a slide from memory and tells you exactly what clinical points you missed.

Your progress saves automatically to a file on your GitHub account. This means you can access your study dashboard on your phone, tablet, or computer, and your queue will always stay perfectly in sync.

---

## How to Set It Up

### 1. Create Your Repository & Add the Code

1. Log into your account at [GitHub.com](https://github.com).
2. Click the **+** icon in the top right corner and select **New repository**.
3. **Repository name:** Type `med-school-tracker`.
4. Check the box that says **Add a README file** and click **Create repository**.
5. Click the **Add file** button $\rightarrow$ **Create new file**.
6. Name the file exactly **`index.html`**.
7. Copy the complete code from the `index.html` file in this project, paste it entirely into the large text box, and click **Commit changes**.

### 2. Create Your Save File

1. Inside your repository, click **Add file** $\rightarrow$ **Create new file**.
2. Name the file exactly **`database.json`**.
3. Inside the file box, type just two empty curly brackets: `{}`
4. Click **Commit changes** at the bottom.

### 3. Host the Page on the Web (GitHub Pages)

To turn your code into a live website you can access on any device:

1. Inside your repository, click on the **Settings** tab (the gear icon at the top menu).
2. Look at the left sidebar, scroll down to the *Code and automation* section, and click **Pages**.
3. Under *Build and deployment*, look for **Source** and ensure it says "Deploy from a branch".
4. Under **Branch**, change the dropdown selector from *None* to **main** (or *master*), leave the folder setting as `/ (root)`, and click **Save**.
5. Wait 1 to 2 minutes, then refresh the page. GitHub will show a live website link at the top (like `[https://yourusername.github.io/med-school-tracker/](https://yourusername.github.io/med-school-tracker/)`). **Bookmark this link on your phone and computer.**

### 4. Get a Secure GitHub Key (Token)

To let the webpage write updates directly to your `database.json` file, it needs secure permission:

1. On GitHub, click your profile picture (top right corner) $\rightarrow$ **Settings**.
2. Scroll all the way down the left sidebar and click **Developer settings**.
3. Click **Personal access tokens** $\rightarrow$ **Fine-grained tokens**.
4. Click **Generate new token**. Name it `Study Tracker Sync`.
5. Set **Repository access** to *Only select repositories* and pick your `med-school-tracker` repo from the dropdown.
6. Under **Permissions**, click *Repository permissions*, scroll down to **Contents**, and change it from *No access* to **Read and write**.
7. Click **Generate token** at the bottom. **Copy the long key string immediately** (it starts with `github_pat_`). GitHub will never show it to you again.

### 5. Connect the App

Open your live bookmarked webpage link and fill out the configuration inputs at the top right:

* **Gemini API Key:** Your Google AI developer key for slide grading (configured for `gemini-2.5-flash`).
* **GitHub Token:** The long `github_pat_...` key you just generated.
* **username/repo:** Your GitHub username and repo name separated by a slash (for example: `peterdenman/med-school-tracker`).

The status label will switch to **Sync: Connected**, pulling down your tracking array instantly.
