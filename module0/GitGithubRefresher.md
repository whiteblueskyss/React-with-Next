🧠 Git Commands Cheat Sheet
A quick reference for everyday Git commands with short descriptions.

---

## ⚙️ Configuration & Setup

- View all configurations:
  `git config --list`
- Set username:
  `git config --global user.name "Your Name"`
- Set email:
  `git config --global user.email "your@email.com"`
- Check current configuration value:
  `git config user.name`
- Initialize a new repository:
  `git init`
- Clone an existing repository:
  `git clone <repo-url>`
- Show current directory:
  `pwd`

---

## 📦 Basic Workflow

- Check current status (changes, staged files, etc.):
  `git status`
- Stage a file for commit:
  `git add file_name`
- Stage all files:
  `git add .`
- Commit changes with a message:
  `git commit -m "your commit message"`
- Unstage a file (remove from staging area):
  `git restore --staged file_name`
- Restore file to last committed state:
  `git restore file_name`

---

## 📜 Logs & History

- View commit logs (detailed):
  `git log`
- Compact one-line log:
  `git log --oneline`
- Show graph view of commits:
  `git log --oneline --graph --all`
- View all actions including resets:
  `git reflog`

---

## ⏪ Undo & Reset

- Reset to a specific commit (erase changes):
  `git reset --hard <commit-id>`
- Soft reset (keep changes staged):
  `git reset --soft <commit-id>`
- Mixed reset (keep changes unstaged):
  `git reset --mixed <commit-id>`
- Undo last commit but keep changes:
  `git reset --soft HEAD~1`
- Revert a specific commit (create new commit that undoes it):
  `git revert <commit-id>`

---

## 🗑️ File & Tracking Management

- Remove a file and commit the deletion:
  `git rm file_name`
- Remove a folder:
  `git rm -r folder_name`
- Remove from tracking but keep in working directory:
  `git rm --cached file_name`
- Move or rename a file:
  `git mv old_name new_name`

---

## 🌿 Branch Management

- List all branches:
  `git branch --list`
- Create a new branch:
  `git branch branch_name`
- Switch to another branch:
  `git switch branch_name`
- Create and switch to a branch immediately:
  `git switch -c branch_name`
- Rename current branch:
  `git branch -m new_name`
- Delete a branch (safe):
  `git branch -d branch_name`
- Force delete a branch:
  `git branch -D branch_name`
- Show current branch:
  `git branch --show-current`

---

## 🔀 Merging & Conflicts

- Merge another branch into current:
  `git merge branch_name`
- Abort a merge (if conflicts occur):
  `git merge --abort`
- View merge conflicts:
  `git diff`
  > ⚠️ Always resolve merge conflicts manually and then run
  > `git add .` and `git commit` to complete the merge.

---

## 💾 Stash (Temporary Save)

- Stash local changes:
  `git stash`
- View all stashes:
  `git stash list`
- Show changes in latest stash:
  `git stash show`
- Apply and remove the latest stash:
  `git stash pop`
- Apply a specific stash (keep it in list):
  `git stash apply stash@{id}`
- Delete a specific stash:
  `git stash drop stash@{id}`
- Clear all stashes:
  `git stash clear`

---

## ☁️ Remote Repositories

- View remotes:
  `git remote -v`
- Add a remote repository:
  `git remote add origin <url>`
- Change remote URL:
  `git remote set-url origin <url>`
- Remove a remote:
  `git remote remove origin`
- Fetch changes from remote (no merge):
  `git fetch`
- Pull changes (fetch + merge):
  `git pull`
- Push a branch to remote:
  `git push origin branch_name`
- Push all branches:
  `git push --all origin`
- Delete remote branch:
  `git push origin --delete branch_name`

---

## 🔁 Forks & Upstream

- Add upstream (original repo):
  `git remote add upstream <url>`
- Fetch from upstream:
  `git fetch upstream`
- Merge upstream changes:
  `git merge upstream/main`
- Sync forked repository: 2. `git fetch upstream` 4. `git checkout main` 6. `git merge upstream/main` 8. `git push origin main`

---

## 🧩 Pull Request (PR) Workflow

2. Push your branch to GitHub:
   `git push origin branch_name`
3. Create a Pull Request on GitHub.
4. Reviewer checks and approves.
5. Merge PR.
6. Optionally delete the merged branch.

---

## 🧹 Cleaning Up

- Remove untracked files:
  `git clean -f`
- Remove untracked directories:
  `git clean -fd`
- See what will be removed without deleting:
  `git clean -n`

---

## 🔍 Useful Shortcuts & Info

- Show difference between working directory and last commit:
  `git diff`
- Show difference between staged and committed changes:
  `git diff --staged`
- Show last commit details:
  `git show`
- See which files changed in last commit:
  `git show --name-only`
- Compare two branches:
  `git diff branch1..branch2`
- Show remote branch tracking info:
  `git branch -vv`

---

✅ **Tip:** You can enable colored output for better readability:
`git config --global color.ui auto`

---
