# HanaPH Platform - Work at Home Setup Guide

**Date:** November 3, 2025
**Status:** ✅ All files pushed to GitHub
**Ready to work from:** Any computer with Git and Node.js

---

## Quick Start (5 minutes)

### Step 1: Clone the Repository at Home
```bash
git clone https://github.com/defendeuw/HanaPH-platform.git
cd HanaPH-platform
git checkout phase-1
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
```
http://localhost:3000
```

That's it! You're ready to work.

---

## What's in GitHub

### Files Already Pushed ✅

**Project Structure:**
```
HanaPH-platform/
├── app/
│   ├── page.tsx                      # Homepage
│   ├── layout.tsx                    # Root layout
│   ├── globals.css                   # Styles
│   └── demo/
│       ├── directory/page.tsx        # Demo 1: Business Directory
│       ├── generator/page.tsx        # Demo 2: Mini-Website Generator
│       ├── referral/page.tsx         # Demo 3: Referral System
│       └── analytics/page.tsx        # Demo 4: Analytics Dashboard
├── package.json                      # Dependencies
├── package-lock.json                 # Lock file
├── tailwind.config.ts                # Tailwind CSS config
├── next.config.js                    # Next.js config
├── tsconfig.json                     # TypeScript config
├── postcss.config.js                 # PostCSS config
├── next-env.d.ts                     # TypeScript types
├── .gitignore                        # Git ignore rules
├── .env.example                      # Environment template
├── README.md                         # Project overview
├── BisnesPH-Build-Instructions.md   # 8-week build plan
├── UX-STRATEGY.md                    # Design guidelines
├── DEMO-README.md                    # How to run demo
├── DEMO-COMPLETE.md                  # Completion report
├── GITHUB-SETUP.md                   # Git workflow guide
├── Plan AI.txt                       # Original strategy
└── node_modules/ (created locally)   # Dependencies (not on GitHub)
```

**Total Files Committed:** 23 files
**Total Lines of Code:** 2,500+
**Size:** ~500KB (code only, node_modules excluded)

---

## Working from Home

### Prerequisites (Install Once)

1. **Git** (if not installed)
   - Windows: https://git-scm.com/download/win
   - Mac: `brew install git`
   - Linux: `sudo apt install git`

2. **Node.js 18+** (if not installed)
   - Download: https://nodejs.org/
   - Verify: `node --version` (should be 18.0.0 or higher)

3. **Code Editor** (recommended)
   - VS Code: https://code.visualstudio.com/
   - Or any text editor you prefer

### Initial Setup

```bash
# Navigate to your workspace
cd ~/workspace  # or wherever you want to work

# Clone the repository
git clone https://github.com/defendeuw/HanaPH-platform.git

# Enter the project
cd HanaPH-platform

# Ensure you're on phase-1 branch
git checkout phase-1

# Install all dependencies
npm install
```

**One-time time:** ~5 minutes (depends on internet speed)

### Daily Workflow

#### Start Working
```bash
cd ~/workspace/HanaPH-platform
git checkout phase-1
npm run dev
```

Then visit: `http://localhost:3000`

#### Making Changes
1. Edit files in your code editor
2. Changes appear instantly (hot reload)
3. Test in browser

#### Save Your Work
```bash
# Stage all changes
git add .

# Commit with message
git commit -m "Your description of changes"

# Push to GitHub
git push origin phase-1
```

#### Pull Latest Changes
If you work from multiple computers:
```bash
git pull origin phase-1
npm install  # if dependencies changed
```

#### Stop Development Server
In terminal: Press `Ctrl+C`

---

## GitHub Workflow at Home

### Check Status
```bash
git status
```

### See Recent Commits
```bash
git log --oneline -5
```

### Switch Between Branches (if needed)
```bash
# See all branches
git branch -a

# Switch to main (planning docs)
git checkout main

# Switch back to demo
git checkout phase-1
```

### Pull Changes
```bash
git pull origin phase-1
```

### Push Changes
```bash
git push origin phase-1
```

---

## Available Commands

```bash
# Start development server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## File Locations & What to Edit

### To Edit Demo Pages
- **Homepage:** `app/page.tsx`
- **Business Directory:** `app/demo/directory/page.tsx`
- **Mini-Website Generator:** `app/demo/generator/page.tsx`
- **Referral System:** `app/demo/referral/page.tsx`
- **Analytics Dashboard:** `app/demo/analytics/page.tsx`

### To Edit Styles
- **Global Styles:** `app/globals.css`
- **Tailwind Config:** `tailwind.config.ts`

### To Edit Configuration
- **Next.js:** `next.config.js`
- **TypeScript:** `tsconfig.json`
- **Tailwind:** `tailwind.config.ts`

### To Edit Documentation
- **Project Overview:** `README.md`
- **Build Plan:** `BisnesPH-Build-Instructions.md`
- **UX Strategy:** `UX-STRATEGY.md`
- **Demo Guide:** `DEMO-README.md`

---

## Troubleshooting

### Problem: `npm install` fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### Problem: Port 3000 already in use
**Solution:**
```bash
# Use different port
npm run dev -- -p 3001
# Visit: http://localhost:3001
```

### Problem: Changes not appearing in browser
**Solution:**
```bash
# Stop server: Ctrl+C
# Restart: npm run dev
```

### Problem: Git says "Permission denied"
**Solution:** Make sure you're authenticated
```bash
# Check auth status
gh auth status

# Re-authenticate if needed
gh auth login
```

### Problem: "Cannot find module" error
**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

---

## Making Changes to the Demo

### Example: Change Homepage Title

1. Open `app/page.tsx`
2. Find the line with the title (search for "HanaPH")
3. Edit the text
4. Browser auto-updates (hot reload)
5. When satisfied:
   ```bash
   git add app/page.tsx
   git commit -m "Update homepage title"
   git push origin phase-1
   ```

### Example: Change Colors

1. Open `tailwind.config.ts`
2. Edit the color hex values (search for `#FF6B35`)
3. Restart dev server: `Ctrl+C` then `npm run dev`
4. Colors update in browser
5. Push changes:
   ```bash
   git add tailwind.config.ts
   git commit -m "Update brand colors"
   git push origin phase-1
   ```

### Example: Add New Component

1. Create new file: `app/demo/my-demo/page.tsx`
2. Write React component
3. Add route to homepage or navigation
4. Test at `http://localhost:3000/demo/my-demo`
5. Push to GitHub:
   ```bash
   git add app/demo/my-demo/page.tsx
   git commit -m "Add new demo component"
   git push origin phase-1
   ```

---

## Keeping GitHub Synced

### If Working on Multiple Computers

**Computer A (Office):**
```bash
git add .
git commit -m "Changes from office"
git push origin phase-1
```

**Computer B (Home):**
```bash
git pull origin phase-1  # Get changes from office
npm install  # if dependencies changed
npm run dev
```

### Best Practice
- Always `git pull` before starting work
- Commit often (after each feature)
- Push at end of day
- Use clear commit messages

---

## Deploying Updates

### To Test on Phone
While dev server running:
```bash
# Get your IP address
ipconfig getifaddr en0  # Mac
ipconfig  # Windows (look for IPv4)

# From phone browser:
http://YOUR_IP:3000
```

### To Deploy Live (Vercel)
```bash
npm i -g vercel
vercel
# Follow prompts, get live URL
```

---

## Useful Resources

- **GitHub Repo:** https://github.com/defendeuw/HanaPH-platform
- **GitHub Docs:** https://docs.github.com
- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **Tailwind Docs:** https://tailwindcss.com/docs
- **TypeScript Docs:** https://www.typescriptlang.org/docs

---

## Project Structure Explained

```
app/
  - Contains all Next.js pages and routes
  - page.tsx = routes to /
  - demo/directory/page.tsx = routes to /demo/directory
  - globals.css = styles applied to all pages
  - layout.tsx = shared layout for all pages

package.json
  - Lists all dependencies
  - npm install reads this and installs packages

tailwind.config.ts
  - Tailwind CSS configuration
  - Colors, spacing, fonts, etc.

next.config.js
  - Next.js settings and optimizations

tsconfig.json
  - TypeScript configuration

node_modules/ (created by npm install)
  - All installed packages
  - NOT in GitHub (too large)
  - Automatically installed via npm install
```

---

## Common Git Commands You'll Use

```bash
# See what changed
git status

# See your recent commits
git log --oneline -5

# Add all changes
git add .

# Commit changes
git commit -m "Describe what you changed"

# Push to GitHub
git push origin phase-1

# Pull latest from GitHub
git pull origin phase-1

# Create new branch
git checkout -b new-feature

# Switch to existing branch
git checkout phase-1

# Delete local branch
git branch -d branch-name
```

---

## Next Steps After Setup

1. **Clone repo at home**
   ```bash
   git clone https://github.com/defendeuw/HanaPH-platform.git
   cd HanaPH-platform
   git checkout phase-1
   ```

2. **Install and run**
   ```bash
   npm install
   npm run dev
   ```

3. **Open browser**
   - Visit `http://localhost:3000`
   - Test all 4 demos

4. **Make changes**
   - Edit files in code editor
   - See changes instantly in browser

5. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin phase-1
   ```

---

## Quick Reference Card

```
Clone:     git clone https://github.com/defendeuw/HanaPH-platform.git
Branch:    git checkout phase-1
Install:   npm install
Run:       npm run dev
Browser:   http://localhost:3000

Add:       git add .
Commit:    git commit -m "description"
Push:      git push origin phase-1
Pull:      git pull origin phase-1

Check:     git status
View log:  git log --oneline -5
Stop:      Ctrl+C (in terminal)
```

---

## Support

If you get stuck:
1. Check GITHUB-SETUP.md for workflow details
2. Check DEMO-README.md for project structure
3. Check UX-STRATEGY.md for design decisions
4. Open an issue on GitHub

---

**Everything is ready!** Clone the repo at home and you're good to go. All files are on GitHub, fully synced, and documented. 🚀
