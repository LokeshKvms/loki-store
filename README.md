# 🧠 Git Workflow Guide


## 🔧 Full Setup (from Scratch)

### 📍 Step 1: Initial Setup (One-Time Only — on any one system)

1. Create the project folder:
   ```bash
   mkdir your-project
   cd your-project
   git init
   ```

2. Create your first commit:
   ```bash
   echo "# Your Project Title" > README.md
   git add .
   git commit -m "Initial commit"
   ```

3. Create a GitHub repo:  
   Go to → https://github.com/new  
   ⚠️ Do NOT check "Initialize with README" or ".gitignore"

4. Connect your local repo to GitHub:
   ```bash
   git remote add origin git@github.com:your-username/your-repo.git
   ```

5. Push initial commit to `main`:
   ```bash
   git branch -M main
   git push -u origin main
   ```

✅ GitHub repo is now live.

---

## 🖥️ Step 2: Clone the Repo on Both Systems

### 🔹 On System A
```bash
git clone git@github.com:your-username/your-repo.git
cd your-repo
```

### 🔹 On System B
```bash
git clone git@github.com:your-username/your-repo.git
cd your-repo
```

---

## 🛠️ Daily Workflow (After Setup)

---

### 📌 From System A

1. Pull the latest `main`:
   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a new feature branch:
   ```bash
   git checkout -b feat/your-feature-name-from-system-a
   ```

3. Make changes and commit:
   ```bash
   git add .
   git commit -m "feat: your message from system A"
   ```

4. Push the branch:
   ```bash
   git push origin feat/your-feature-name-from-system-a
   ```

5. Merge into `main`:  
   Either:
   - Open a Pull Request on GitHub  
   OR  
   - Merge manually (if working solo):
     ```bash
     git checkout main
     git pull origin main
     git merge feat/your-feature-name-from-system-a
     git push origin main
     ```

---

### 📌 From System B

1. Pull the latest `main`:
   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a new feature or fix branch:
   ```bash
   git checkout -b fix/your-fix-name-from-system-b
   ```

3. Make changes and commit:
   ```bash
   git add .
   git commit -m "fix: your message from system B"
   ```

4. Push the branch:
   ```bash
   git push origin fix/your-fix-name-from-system-b
   ```

5. Merge into `main`:  
   Either:
   - Open a Pull Request on GitHub  
   OR  
   - Merge manually:
     ```bash
     git checkout main
     git pull origin main
     git merge fix/your-fix-name-from-system-b
     git push origin main
     ```

---

## 🔄 Switching Between Systems

Before starting work on a new system:
```bash
git checkout main
git pull origin main
git fetch --all
```

Then either:
- Continue work on an existing branch:
  ```bash
  git checkout feat/your-feature-name-from-other-system
  ```
- Or start a new one:
  ```bash
  git checkout -b feat/new-task
  ```

---

## 🧹 Cleanup (Optional)

After merging a feature/fix branch:
```bash
git branch -d feat/your-feature-name     # Delete local branch
git push origin --delete feat/your-feature-name  # Delete remote branch
```

---

## ✅ Best Practices

- Always pull `main` before starting work
- Always work in a dedicated branch (`feat/*`, `fix/*`)
- Use meaningful commit messages
- Merge via PRs or clean manual merges
- Delete branches after merging

---

## 🏁 You're all set!

This setup gives you a clean, professional, and conflict-free workflow while switching between multiple systems.
