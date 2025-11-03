# GitHub Setup - HanaPH Platform

**Status:** ✅ Connected & Ready to Push

## Quick Reference

### Your GitHub Details
- **Account:** defendeuw
- **Repository:** https://github.com/defendeuw/HanaPH-platform
- **Visibility:** PUBLIC
- **Local Path:** C:\Users\dinnes\Desktop\Personal Project

### Daily Git Commands

#### Push Changes
```bash
cd "C:\Users\dinnes\Desktop\Personal Project"
git add .
git commit -m "Your message here"
git push origin main
```

#### Pull Changes
```bash
git pull origin main
```

#### Create a New Branch (for phases)
```bash
# For Phase 1
git checkout -b phase-1

# For Phase 2
git checkout -b phase-2

# Switch back to main
git checkout main
```

#### View Status
```bash
git status          # See what files changed
git log --oneline   # See recent commits
```

## Authentication Setup (Already Complete)

✅ GitHub CLI authenticated as `defendeuw`
✅ Repository created and connected
✅ Initial commit pushed
✅ README added

Your local repository is configured to use GitHub CLI authentication, so you should be able to push/pull without additional setup.

## File Structure in Repository

```
HanaPH-platform/
├── README.md                              (Project overview - DONE)
├── BisnesPH-Build-Instructions.md        (8-week build plan - DONE)
├── Plan AI.txt                            (Original strategy - DONE)
├── GITHUB-SETUP.md                       (This file)
├── .gitignore                             (Ignore unnecessary files)
│
└── [To be created during development]
    ├── frontend/                    (Next.js 14 app)
    ├── database/                    (SQL schemas & migrations)
    ├── docs/                        (API docs, guides)
    └── scripts/                     (Automation scripts)
```

## Branching Strategy

For this project, use this branching strategy:

```
main (production-ready)
  ↓ (merge only after testing)

phase-1 (create from main)
  ├── phase-1-feature-1
  ├── phase-1-feature-2
  └── phase-1-feature-3

phase-2 (create from phase-1 after it's done)
  ├── phase-2-feature-1
  └── phase-2-feature-2

... etc
```

**Steps for each phase:**
1. `git checkout main`
2. `git checkout -b phase-X`
3. Do your development work on `phase-X`
4. When done, test thoroughly
5. `git push origin phase-X`
6. Create Pull Request on GitHub to merge into `main`
7. Review, then merge

## Commit Message Convention

Use this format for meaningful commits:

```
[PHASE-X] Feature: Brief description of what was done

- Added feature detail 1
- Fixed bug detail 2
- Refactored component detail 3

Relates to: #issue_number (if applicable)
```

Examples:
```
[PHASE-1] Feature: Add restaurant directory listing
- Created RestaurantCard component
- Implemented search functionality
- Added filter by rating

[PHASE-1] Fix: Database connection pooling
- Configured Prisma pool settings
- Added connection timeout
- Tested with 100 concurrent queries

[PHASE-2] Feature: Manager dashboard with sales pipeline
- Created manager-specific dashboard
- Added business tracking
- Implemented commission calculator
```

## Before Starting Phase 1

Make sure you have:

1. **Node.js 18+** installed
   ```bash
   node --version
   ```

2. **PostgreSQL** available (local, Neon, or Supabase)
   ```bash
   psql --version
   ```

3. **Vercel account** (for deployment)
   - Sign up: https://vercel.com

4. **Environment variables** set up (create `.env.local`):
   ```
   DATABASE_URL=postgresql://user:password@localhost/bisnesph
   NEXTAUTH_SECRET=your_secret_here
   NEXTAUTH_URL=http://localhost:3000
   ```

5. **GitHub personal access token** (if needed for API access)
   - Create at: https://github.com/settings/tokens/new

## Troubleshooting

### Problem: "Permission denied" when pushing
**Solution:** The local repo might still have old credentials cached. Run:
```bash
git config --global credential.helper ""
git push origin main
```

### Problem: "Merge conflict" when pulling
**Solution:** Manually resolve conflicts in the file, then:
```bash
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

### Problem: "fatal: not a git repository"
**Solution:** Make sure you're in the right directory:
```bash
cd "C:\Users\dinnes\Desktop\Personal Project"
git status
```

### Problem: Can't remember the remote URL
**Solution:** Check it:
```bash
git remote -v
```

## Useful GitHub Features to Use

### Creating Issues (for tracking work)
```bash
gh issue create --title "Add mini-website generator" \
  --body "Build interactive form for creating mini-websites"
```

### Creating Pull Requests
```bash
gh pr create --title "Add restaurant directory" \
  --body "Implements Phase 1.2 - restaurant directory listing"
```

### Checking Repository Status
```bash
gh repo view defendeuw/HanaPH-platform
gh repo view defendeuw/HanaPH-platform --web  # Open in browser
```

## For Team Collaboration (Future)

If you add team members later:

1. Go to: https://github.com/defendeuw/HanaPH-platform/settings/access
2. Click "Invite a collaborator"
3. Enter their GitHub username
4. They can then clone and push to the repo

## Setting Up for CI/CD (Optional, for Phase 4)

When you're ready for automated testing:

1. Create `.github/workflows/test.yml`:
```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
      - run: npm run build
```

2. Push the file:
```bash
git add .github/workflows/test.yml
git commit -m "Add GitHub Actions CI/CD"
git push origin main
```

GitHub will automatically run tests on every push!

## Quick Links

- **Repository:** https://github.com/defendeuw/HanaPH-platform
- **Issues:** https://github.com/defendeuw/HanaPH-platform/issues
- **Pull Requests:** https://github.com/defendeuw/HanaPH-platform/pulls
- **GitHub Settings:** https://github.com/defendeuw/HanaPH-platform/settings
- **GitHub CLI Docs:** https://cli.github.com/manual
- **Git Basics:** https://git-scm.com/docs

## Notes

- All code is public - don't commit secrets (API keys, passwords, etc.)
- Use `.env.local` for local development secrets (it's gitignored)
- Commit often! Small commits are easier to review and revert
- Always test locally before pushing
- Write clear commit messages - future you will thank you!

---

**Last Updated:** November 3, 2025
**Next Step:** Build Interactive Demo (1 week)
