# Publishing this repository

The folder is already a git repository with one commit in it. What remains is
to create the repository on GitHub and push.

Run everything below in **Terminal on your Mac** — that is where your GitHub
credentials live.

---

## Step 1 — Create the empty repository on GitHub

1. Go to <https://github.com/new>
2. **Repository name:** `timor-leste-pathology-handbook`
3. **Visibility:** Public
   *(GitHub Pages will not publish from a private repository unless you have a
   paid plan. Public also costs nothing and is what the Vanuatu site does.)*
4. **Do not** tick "Add a README", "Add .gitignore" or "Choose a license".
   The repository must be completely empty — this folder already has all three
   decisions made, and an initialised repository would cause a conflict on the
   first push.
5. Click **Create repository**.

Leave the page open. GitHub will show you a "push an existing repository"
snippet — the commands below do the same thing.

---

## Step 2 — Push from your Mac

Open Terminal and paste these one block at a time.

```bash
cd ~/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web
```

Check you are in the right place and that the commit is there:

```bash
git log --oneline
git status
```

You should see one commit and `nothing to commit, working tree clean`.

Now set your GitHub username and add the remote:

```bash
GH_USER=your-github-username        # <-- change this line only

git remote add origin "https://github.com/$GH_USER/timor-leste-pathology-handbook.git"
git push -u origin main
```

### If it asks for a username and password

GitHub stopped accepting account passwords over HTTPS in 2021. When prompted:

- **Username:** your GitHub username
- **Password:** a personal access token, **not** your account password

Create one at <https://github.com/settings/tokens> → *Generate new token
(classic)* → tick the **repo** scope. macOS will remember it in your Keychain,
so you only do this once.

If you would rather avoid tokens entirely, install GitHub CLI and let it handle
the login:

```bash
brew install gh
gh auth login          # choose GitHub.com → HTTPS → login with a browser
git push -u origin main
```

### If you already use SSH keys with GitHub

Use the SSH remote instead of the HTTPS one:

```bash
git remote set-url origin "git@github.com:$GH_USER/timor-leste-pathology-handbook.git"
git push -u origin main
```

---

## Step 3 — Turn on GitHub Pages

Once the push succeeds:

1. Go to your repository → **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main`, folder `/ (root)`
4. **Save**

Wait one or two minutes. Your site will be live at:

```
https://<your-github-username>.github.io/timor-leste-pathology-handbook/
```

The `.nojekyll` file in this repository tells GitHub to publish the files
exactly as they are rather than running them through Jekyll.

**Before you announce that address**, re-read the warning in
TEMPLATE_GUIDE.md §8 about internal telephone extensions and intranet
addresses in `data/site.js`.

---

## Step 3b — Add a second maintainer (do this straight after the first push)

A national handbook should never depend on one person remaining reachable. As
soon as the repository exists, give a trusted colleague administrative access.

1. Repository → **Settings** → **Collaborators and teams**
2. **Add people** → their GitHub username → **Add**
3. Set their role to **Admin**, not Write

Admin rather than Write matters: a Write collaborator can commit, but cannot
recover the repository, change its settings, or transfer it if you are
unavailable. Admin is the level that provides actual continuity.

Then record both names in the *Custodianship* table in `README.md`, so anyone
opening the repository can see who is responsible without asking.

### Why not just a shared password

Do not share a GitHub account or password. Two named accounts give you an
audit trail — every commit says who made it — which a shared login destroys.
Shared credentials also break GitHub's two-factor authentication requirement.

### Keeping honest review once there are two of you

With two maintainers you can protect `main` without blocking yourself:

1. Repository → **Settings** → **Rules** → **Rulesets** (or **Branches** →
   **Add branch protection rule**)
2. Target the `main` branch and enable:
   - Require a pull request before merging
   - Require 1 approving review
   - Block force pushes and branch deletion
   - **Include administrators** — so the rule binds you too

These are free on public repositories. The last one is the one an auditor
will care about: it means nobody, including the owner, can change a critical
value without a second pair of eyes.

Remember that code review is not clinical review. A reviewer confirming the
file parses has not confirmed the number is right. Ask the reviewer to state
which source they verified against.

## Step 4 — Your day-to-day loop from here

Every time you fill in more content:

```bash
cd ~/Documents/work_menzies/FF/Pathology_Handbook/pathology_handbook_web

git add -A
git commit -m "Add reference ranges for Appendix 12"
git push
```

Three commands. `git add -A` stages everything you changed, `git commit`
records it with a message describing what you did, `git push` sends it to
GitHub. The live site updates about a minute later.

Useful while you work:

```bash
git status            # what have I changed but not committed?
git diff              # show me exactly what changed
git log --oneline     # history of commits
```

Commit often and in small pieces — one commit per test batch, or per appendix,
rather than one enormous commit at the end. It costs nothing and it means you
can always get back to a working version.

---

## Getting back a version

If you break something and want the last committed version of one file:

```bash
git restore data/tests.js
```

To see what a file looked like at an earlier commit:

```bash
git log --oneline -- data/tests.js     # find the commit id
git show <commit-id>:data/tests.js
```

---

## Two things still to decide

**A licence.** This repository has none. Without one, default copyright applies
and nobody may reuse the material. Since this is Ministry of Health content,
the licence is not yours alone to choose — but it is worth raising, because a
public repository with no licence sends a confusing signal. Creative Commons
CC BY 4.0 is a common choice for government health documents. Add it as
`LICENSE` in the root when the decision is made.

**Whether the public copy differs from the intranet copy.** If the internet
version should not carry internal extensions, keep the internal one as
`data/site.internal.js` — `.gitignore` already excludes that filename, so it
will never be pushed by accident.

**When the draft banner comes off.** The checklist is in `README.md` under
*Status*. Do not remove the banner before every item is met, including written
Ministry sign-off.
