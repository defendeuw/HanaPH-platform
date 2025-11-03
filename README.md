# HanaPH Platform

AI-Powered Business Directory & Mini-Website Platform for Philippine Cities

## Project Overview

HanaPH is a viral-growth business platform designed specifically for Philippine markets, starting with restaurant directories in Iloilo City and expanding to multiple cities.

**GitHub Repository:** https://github.com/defendeuw/HanaPH-platform

## Current Status

✅ **GitHub Repository Created & Connected** (November 3, 2025)
✅ **Build Instructions Complete** - Ready for AI implementation
✅ **Project Plan Documented** - All 4 phases detailed

## What's Included

- **BisnesPH-Build-Instructions.md** - Comprehensive 8-week build plan with:
  - Interactive demo phase (get feedback before full build)
  - Phase 1: Core Platform (weeks 1-3)
  - Phase 2: Employee Management (weeks 4-5)
  - Phase 3: Growth Systems (weeks 6-7)
  - Phase 4: Launch Preparation (week 8)
  - Complete database schemas
  - API endpoint specifications
  - Technology stack details
  - Revenue projections

- **Plan AI.txt** - Original strategic planning document with the "200 IQ Plan"

## Next Steps

### 1. Interactive Demo (Do This First)
Before building the full platform, create working demos to validate the concept:
- Business directory with search/filter
- Mini-website generator with real-time preview
- Referral system visualization
- Admin analytics preview

See "PART 1: Interactive Demo" in BisnesPH-Build-Instructions.md

### 2. Phase 1: Core Platform
Build the foundation:
- PostgreSQL database with complete schemas
- Next.js 14 frontend + API routes
- Restaurant directory listing
- Mini-website generator (subdomains)
- Basic analytics tracking

### 3. Phase 2-4
Employee management, growth systems, and launch preparation

## Tech Stack

**Frontend:**
- Next.js 14 (App Router, Server Components)
- React 18
- Tailwind CSS
- TypeScript

**Backend:**
- Next.js API Routes (Serverless)
- PostgreSQL
- Prisma ORM
- NextAuth.js

**External Services:**
- Vercel (Deployment)
- WhatsApp Business API
- PayMongo (Payments - Philippines)
- Cloudinary (Images)
- SendGrid (Email)

## GitHub Workflow

```
main                  (production-ready)
  └── develop        (integration point)
      ├── phase-1    (core platform)
      ├── phase-2    (employees)
      ├── phase-3    (growth)
      └── phase-4    (launch)
```

## Key Features

### MVP (Phase 1)
- Restaurant directory for Iloilo City
- Free mini-websites for each business
- Analytics dashboard
- Admin employee portal basics

### Growth Systems (Phase 3)
- Viral referral system ("Refer 3 → Featured Forever")
- WhatsApp bot integration
- Automated content generation
- Payment system (PayMongo)
- SEO optimization

### Employee Management (Phase 2)
- Admin dashboard
- Manager pipeline tracking
- Moderator approval workflow
- Editor content management

## Revenue Model

- **Featured Listings:** ₱299/month per business
- **Premium Insights:** ₱999/month
- **Google AdSense:** £20-40/month
- **Data Licensing:** £50-150/month
- **Affiliate Revenue:** £20-50/month

**Projection:** £1,000+/month by Month 12

## Getting Started for Development

1. **Read the full build guide:**
   ```bash
   cat BisnesPH-Build-Instructions.md
   ```

2. **Setup for Phase 1:**
   ```bash
   # Create phase-1 branch
   git checkout -b phase-1

   # Setup development environment
   node -v  # Ensure Node.js 18+
   npm init -y
   npm install next react typescript tailwindcss
   ```

3. **Database Setup:**
   - Use PostgreSQL (Neon, Supabase, or local)
   - Run database schema from Phase 1.1

4. **Start Building:**
   - Begin with database schemas
   - Build API endpoints
   - Create frontend components

## Development Milestones

| Phase | Duration | Key Deliverables |
|-------|----------|-----------------|
| Interactive Demo | 1 week | Working demos for validation |
| Phase 1 | 2-3 weeks | Core platform, mini-websites, analytics |
| Phase 2 | 2-3 weeks | Employee dashboards (4 roles) |
| Phase 3 | 2-3 weeks | Referrals, WhatsApp, automation, payments |
| Phase 4 | 1 week | Security, testing, documentation, launch |

**Total:** 8 weeks to soft launch

## Important Reminders

### Before Building Phase 1:
1. ✅ GitHub repository created
2. 📋 Build instructions documented
3. 🎯 Start with interactive demo (NOT full platform yet)
4. 🔑 Use PostgreSQL (not Firebase)
5. 🚀 Target: Deploy to Vercel, not localhost only

### During Development:
- Commit to GitHub regularly (`phase-X` branches)
- Write tests for critical paths
- Document API endpoints
- Test mobile responsiveness

### Launch Strategy:
- Soft launch to 20 restaurants (your PH friend's network)
- Get testimonials
- Expand via referrals
- Track all metrics carefully

## For AI Implementation

If using Claude/Copilot to implement this:

1. Share the complete **BisnesPH-Build-Instructions.md** file
2. Ask to build **Phase 1 only** first
3. Have it start with database schemas
4. Request code be committed to `phase-1` branch
5. Review, test locally, then approve

The build instructions contain ~10,000+ tokens of detailed specifications for comprehensive implementation.

## Contact

**Project Owner:** @defendeuw (GitHub)
**Repository:** https://github.com/defendeuw/HanaPH-platform
**Timeline:** 8 weeks from start to soft launch

---

## License

MIT License - See LICENSE file

## Status Updates

- **Nov 3, 2025**: Project plan completed, GitHub repo created and connected
- Next: Start Interactive Demo phase
