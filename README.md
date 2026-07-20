Study Tracker

A simple webpage to track your medical school lectures using science-based review schedules (**FSRS algorithm**). It also includes an optional **AI slide tester** that listens to you teach a slide from memory and tells you what you missed.

Your progress saves automatically to GitHub, so you can study on your phone, tablet, or computer, and always see the same updated list.

---

## How to Set It Up



### 1. Host the Page on the Web (GitHub Pages)

Before you hook up the database, you need to make the webpage live so you can access it on your phone or tablet:

1. In your GitHub repository, click on the **Settings** tab (the gear icon at the top of the repository page).
2. Look at the left sidebar, scroll down to the "Code and automation" section, and click **Pages**.
3. Under **Build and deployment**, look for **Source** and ensure it says "Deploy from a branch".
4. Under **Branch**, change the dropdown from *None* to **main** (or *master*), leave the folder as `/ (root)`, and click **Save**.
5. Wait about 1 to 2 minutes. Refresh the page, and GitHub will display a live link at the top (like `[https://yourusername.github.io/your-repo/](https://yourusername.github.io/your-repo/)`). **Bookmark this link on your phone and computer**—this is your private study portal!


### 2. Create a Save File on GitHub

1. Go to your GitHub repository where this code is hosted.
2. Create a new file named exactly `database.json`.
3. Inside the file, type just two curly brackets: `{}`. Save and commit the file.

### 3. Get a GitHub Key (Token)

To let the webpage save your data automatically, it needs permission:

1. On GitHub, click your profile picture (top right) $\rightarrow$ **Settings** $\rightarrow$ **Developer settings** (bottom left).
2. Click **Personal access tokens** $\rightarrow$ **Fine-grained tokens**.
3. Click **Generate new token**. Name it `Study Tracker`.
4. Set **Repository access** to *Only select repositories* and pick your repository.
5. Under **Permissions**, click *Repository permissions*, scroll to **Contents**, and change it to **Read and write**.
6. Click **Generate token** at the bottom. Copy the long key that pops up.

### 4. Connect Your Webpage

Open your webpage in your browser and fill out the boxes at the top:

* **Gemini API Key:** Your Google AI key for slide grading.
* **GitHub Token:** The long key you just generated.
* **username/repo:** Your GitHub username and repository name (for example: `peterdenman/peterdenman.github.io`).

Once connected, the top text will change to **Sync: Connected**.


The tracker instantly saves your score to the cloud and pushes the next review date out into the future.
