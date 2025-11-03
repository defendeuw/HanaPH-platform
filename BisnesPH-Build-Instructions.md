# BisnesPH Platform - Complete Build Instructions for AI Agent

**Last Updated:** November 3, 2025
**Project Status:** Ready for GitHub Setup & Implementation
**Estimated Timeline:** 8 weeks
**Target Launch:** Iloilo City Restaurants (Philippines)

---

## CRITICAL: GitHub Setup (Before Implementation Starts)

### Step 0: GitHub Repository Setup
**This must be completed BEFORE any code is written**

1. **Create GitHub Repository**
   - Go to: https://github.com/new
   - Repository Name: `bisnesph-platform`
   - Description: "AI-Powered Business Directory & Mini-Website Platform for Philippine Cities"
   - Make it **PUBLIC** (for visibility)
   - **Initialize with:**
     - README.md
     - .gitignore (Node.js template)
     - MIT License
   - Clone to local development environment

2. **Repository Structure** (to be created):
   ```
   bisnesph-platform/
   ├── frontend/                    # Next.js application
   ├── backend/                     # API routes & server logic
   ├── database/                    # PostgreSQL schemas
   ├── docs/                        # Documentation & guides
   ├── scripts/                     # Automation & setup scripts
   ├── assets/                      # Images, logos, etc
   └── .github/
       └── workflows/              # CI/CD pipelines
   ```

3. **GitHub as Source of Truth**
   - All development commits go to GitHub
   - Each phase is a separate branch: `phase-1`, `phase-2`, `phase-3`, `phase-4`
   - Main branch = production-ready code
   - Use GitHub Discussions for decisions
   - Use GitHub Issues to track features

---

## PART 1: Interactive Demo (Build First)

### Purpose
Before building the full platform, create a **working interactive demo** that proves:
- The business directory concept works
- Mini-website generation is viable
- The referral system concept is sound
- UI/UX is intuitive

### Interactive Demo Deliverables

#### Demo 1.1: Business Directory Demo
**URL:** `bisnesph-demo.vercel.app/restaurants`

**Features:**
- Display 5 pre-built restaurant listings (hardcoded)
- Search by restaurant name
- Filter by rating
- Click to view individual restaurant page
- Show mini-website for each restaurant

**Time to Build:** 4-6 hours
**Tech Stack:**
- Next.js 14 App Router
- React Components (Tailwind CSS)
- Static data (no database yet)
- Deployed to Vercel

**What It Shows:**
```
Homepage
  ↓
Search "Lola's"
  ↓
Shows 1 result
  ↓
Click restaurant
  ↓
Mini-website loads: lolas-restaurant.bisnesph.com
  ↓
Shows photos, menu, reviews, booking button
```

#### Demo 1.2: Mini-Website Generator Demo
**URL:** `bisnesph-demo.vercel.app/create-website`

**Features:**
- Simple form: Restaurant name, category, phone, email
- User fills form (< 1 minute)
- **Instant preview** of generated mini-website
- Show what it will look like live
- "Claim Your Restaurant" CTA

**Time to Build:** 6-8 hours
**Interactive Elements:**
- Real-time preview as user types
- Click "See Full Preview" → opens new tab
- Copy-to-clipboard for referral link
- Phone number validation

**What It Shows:**
```
User Input:
- Name: "Juan's Batchoy House"
- Address: "123 Molo, Iloilo"
- Phone: "+63 917 123 4567"

System Generates:
- juans-batchoy.bisnesph.com
- Custom design with restaurant info
- Photo placeholder
- Menu section
- Booking button
```

#### Demo 1.3: Referral System Demo
**URL:** `bisnesph-demo.vercel.app/referrals`

**Features:**
- Show referral dashboard mockup
- User gets referral link: `bisnesph.com/ref/lolas-restaurant`
- Copy button that works
- Show example: "You have 2/3 referrals"
- Show reward: "1 more referral = Featured Forever!"
- Visual progress bar

**Time to Build:** 3-4 hours
**Interactive Elements:**
- Animated progress bars
- Copy link functionality
- WhatsApp share button (with pre-filled message)
- Email share button
- Show 3 example referral messages

#### Demo 1.4: Admin Analytics Preview
**URL:** `bisnesph-demo.vercel.app/admin-demo`

**Features:**
- Mock analytics dashboard
- Show example metrics:
  - Total restaurants: 500
  - Featured subscriptions: 50 (₱299/month = £215/month)
  - Referrals this month: 127
  - Revenue: £275/month
- Show growth chart (fake data)
- Show top restaurants by views

**Time to Build:** 4-5 hours
**What It Shows:**
- Dashboard layout for your employee
- Proof that the system can track metrics
- Revenue tracking capability

### Total Demo Build Time: 17-23 hours
### Demo Purpose:
- Get investor/team feedback before full build
- Validate UX decisions
- Prove concept viability
- Share with potential early businesses for testing

---

## PART 2: Full Platform Build Plan

### Overview
Complete, production-ready platform built in 4 phases:
- **Phase 1 (Weeks 1-3):** Core Platform (Restaurant Directory + Mini-Websites)
- **Phase 2 (Weeks 4-5):** Employee Management System
- **Phase 3 (Weeks 6-7):** Growth Systems (Referrals, WhatsApp, Content Automation)
- **Phase 4 (Week 8):** Launch Preparation & Deployment

---

## PHASE 1: Core Platform (Weeks 1-3)

### Phase 1 Goal
Build a fully functional restaurant directory with mini-website generation, all data stored in PostgreSQL, ready for employee management in Phase 2.

### Phase 1.1: Database Schema Design

**PostgreSQL Database Setup:**

Create these tables:

```sql
-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  role ENUM('admin', 'manager', 'moderator', 'editor', 'business_owner') DEFAULT 'business_owner',
  status ENUM('active', 'inactive', 'banned') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Businesses Table (Restaurants)
CREATE TABLE businesses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  business_name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(50) DEFAULT 'restaurant',
  description TEXT,
  address VARCHAR(500),
  city VARCHAR(100) DEFAULT 'Iloilo',
  phone VARCHAR(20),
  email VARCHAR(255),
  website_url VARCHAR(255),
  whatsapp_number VARCHAR(20),
  opening_hours JSONB, -- {mon: "10am-9pm", tue: "10am-9pm"...}
  featured BOOLEAN DEFAULT FALSE,
  featured_until TIMESTAMP,
  views_count INTEGER DEFAULT 0,
  clicks_count INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0,
  status ENUM('pending', 'active', 'inactive') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Business Images Table
CREATE TABLE business_images (
  id SERIAL PRIMARY KEY,
  business_id INTEGER REFERENCES businesses(id),
  image_url VARCHAR(500),
  alt_text VARCHAR(255),
  display_order INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Business Menu Items Table
CREATE TABLE business_menu_items (
  id SERIAL PRIMARY KEY,
  business_id INTEGER REFERENCES businesses(id),
  item_name VARCHAR(255),
  description TEXT,
  price DECIMAL(10,2),
  category VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Reviews Table
CREATE TABLE business_reviews (
  id SERIAL PRIMARY KEY,
  business_id INTEGER REFERENCES businesses(id),
  reviewer_name VARCHAR(255),
  reviewer_email VARCHAR(255),
  rating INTEGER (1-5),
  review_text TEXT,
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Referral System Table
CREATE TABLE referrals (
  id SERIAL PRIMARY KEY,
  referrer_id INTEGER REFERENCES users(id),
  referred_user_id INTEGER REFERENCES users(id),
  referral_code VARCHAR(50) UNIQUE NOT NULL,
  status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics Table
CREATE TABLE business_analytics (
  id SERIAL PRIMARY KEY,
  business_id INTEGER REFERENCES businesses(id),
  date DATE NOT NULL,
  views_today INTEGER DEFAULT 0,
  clicks_today INTEGER DEFAULT 0,
  referrals_today INTEGER DEFAULT 0,
  featured_clicks INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(business_id, date)
);

-- Subscription/Featured Tier Table
CREATE TABLE subscriptions (
  id SERIAL PRIMARY KEY,
  business_id INTEGER REFERENCES businesses(id),
  subscription_type ENUM('featured', 'premium', 'free') DEFAULT 'free',
  price_php DECIMAL(10,2),
  stripe_subscription_id VARCHAR(255),
  payment_status ENUM('pending', 'active', 'cancelled', 'expired') DEFAULT 'pending',
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  auto_renew BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Content Table (for blog posts, SEO content)
CREATE TABLE content_pieces (
  id SERIAL PRIMARY KEY,
  title VARCHAR(500),
  slug VARCHAR(500) UNIQUE,
  content TEXT,
  content_type ENUM('blog_post', 'seo_page', 'business_feature') DEFAULT 'blog_post',
  featured_businesses JSONB, -- Array of business IDs featured in this piece
  published BOOLEAN DEFAULT FALSE,
  seo_keywords VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Phase 1.2: Frontend Architecture (Next.js 14)

**Directory Structure:**

```
frontend/
├── app/
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── restaurants/
│   │   ├── page.tsx              # Directory listing
│   │   └── [slug]/
│   │       └── page.tsx          # Individual restaurant page
│   ├── [subdomain]/
│   │   └── [slug]/
│   │       └── page.tsx          # Mini-website pages
│   ├── admin/                    # Admin dashboard (Phase 2)
│   ├── api/
│   │   ├── auth/
│   │   ├── restaurants/
│   │   ├── analytics/
│   │   └── content/
│   └── auth/                     # Login/signup pages
├── components/
│   ├── RestaurantCard.tsx
│   ├── RestaurantSearchBar.tsx
│   ├── RestaurantFilters.tsx
│   ├── MiniWebsiteTemplate.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   ├── auth.ts
│   ├── db.ts                     # Database connection
│   ├── validators.ts
│   └── constants.ts
└── styles/
    └── globals.css
```

### Phase 1.3: Core Components to Build

#### A. Homepage (`app/page.tsx`)
**Features:**
- Hero section: "Free Restaurant Website for Iloilo Businesses"
- Search bar with autocomplete
- Display featured restaurants (top 6)
- "Create Your Free Website" CTA button
- Simple value proposition

**Time:** 4-5 hours

#### B. Restaurant Directory (`app/restaurants/page.tsx`)
**Features:**
- Display all restaurants in sortable, filterable list
- Search by name
- Filter by rating
- Filter by hours (currently open?)
- Pagination (20 per page)
- Restaurant cards showing:
  - Name
  - Rating
  - Hours
  - Phone number (clickable)
  - "View Website" button
- Google Maps integration for location view

**Time:** 6-8 hours

#### C. Individual Restaurant Page (`app/restaurants/[slug]/page.tsx`)
**Features:**
- Full business details
- Image gallery
- Menu (if available)
- Reviews section with form to add review
- "Book a Table" or "Call Now" buttons
- "Share" social buttons
- Related restaurants (same category)
- "Powered by BisnesPH" footer

**Time:** 6-7 hours

#### D. Mini-Website Generator (`app/create-website/page.tsx`)
**Features:**
- Multi-step form:
  - Step 1: Business info (name, category, address)
  - Step 2: Contact info (phone, email, WhatsApp)
  - Step 3: Business hours
  - Step 4: Upload photos (or AI can generate placeholder)
  - Step 5: Write description or AI generates it
- Real-time preview alongside form
- Generate custom subdomain: `restaurant-name.bisnesph.com`
- Save to database
- Instant access to:
  - Public mini-website
  - Referral link
  - Dashboard to edit

**Time:** 8-10 hours

#### E. Business Dashboard (Basic) (`app/dashboard/page.tsx`)
**Features:**
- View analytics:
  - Views this month
  - Clicks on phone/location
  - Referrals (if any)
- Edit business information
- Upload/manage photos
- Add/edit menu items
- View reviews
- "Upgrade to Featured" CTA
- Referral link + copy button
- Social share options

**Time:** 7-8 hours

#### F. Mini-Website Template System (`components/MiniWebsiteTemplate.tsx`)
**Features:**
- Dynamic template that renders restaurant data
- Responsive design (mobile-first)
- Auto-layout based on available data
- Show:
  - Restaurant name + tagline
  - Photo gallery
  - Hours
  - Location + embedded map
  - Menu (if added)
  - Call/WhatsApp buttons
  - Reviews section
  - "Powered by BisnesPH" attribution
- Can be accessed as: `lolas-restaurant.bisnesph.com`

**Time:** 6-7 hours

### Phase 1.4: API Endpoints to Build

```
Authentication:
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- GET /api/auth/verify

Restaurants:
- GET /api/restaurants (list all)
- GET /api/restaurants/[id] (single)
- POST /api/restaurants (create new)
- PUT /api/restaurants/[id] (update)
- DELETE /api/restaurants/[id] (delete)
- GET /api/restaurants/[id]/analytics (view stats)

Images:
- POST /api/restaurants/[id]/images (upload)
- DELETE /api/restaurants/[id]/images/[imageId]

Menu Items:
- POST /api/restaurants/[id]/menu-items
- PUT /api/restaurants/[id]/menu-items/[itemId]
- DELETE /api/restaurants/[id]/menu-items/[itemId]

Reviews:
- GET /api/restaurants/[id]/reviews
- POST /api/restaurants/[id]/reviews (submit review)
- PUT /api/reviews/[id]/approve (admin only)

Analytics:
- GET /api/analytics/restaurant-stats
- POST /api/analytics/track-view (track page views)
- POST /api/analytics/track-click (track link clicks)
```

**Time for all endpoints:** 12-14 hours

### Phase 1.5: Deployment Setup

**Vercel Deployment:**
1. Connect GitHub repository to Vercel
2. Set environment variables:
   ```
   DATABASE_URL=postgresql://...
   NEXT_PUBLIC_API_URL=https://bisnesph-platform.vercel.app
   JWT_SECRET=...
   CLOUDINARY_CLOUD_NAME=...
   CLOUDINARY_API_KEY=...
   CLOUDINARY_API_SECRET=...
   ```
3. Deploy to production on every GitHub merge to `main`
4. Set up preview deployments for feature branches

**Custom Domain:**
- Point `bisnesph.com` DNS to Vercel
- Set up subdomains: `*.bisnesph.com` → Vercel

**Time:** 3-4 hours

### Phase 1 Total Time: 57-68 hours (approximately 2-2.5 weeks)

### Phase 1 Testing Checklist:
- [ ] Can register new user
- [ ] Can login
- [ ] Can create restaurant
- [ ] Mini-website renders correctly
- [ ] Images upload and display
- [ ] Search works
- [ ] Analytics tracking works
- [ ] All API endpoints return correct data
- [ ] Mobile responsive
- [ ] SEO basics (meta tags, Open Graph)

---

## PHASE 2: Employee Management System (Weeks 4-5)

### Phase 2 Goal
Build comprehensive employee dashboards for managing the platform with 4 different role types.

### Phase 2.1: User Roles & Permissions

**Admin (You)**
- Access to all system settings
- View all employee performance
- Approve/moderate all businesses
- View financial dashboard
- Manage other admins
- System analytics
- Can override any decision

**Manager (Your PH Friend)**
- Manage 20 assigned businesses
- View sales pipeline
- Send WhatsApp follow-ups
- Add new businesses
- Commission tracker
- Training materials library
- Performance metrics
- Cannot approve system-wide changes

**Moderator**
- Approve/reject pending businesses
- Flag inappropriate reviews
- Manage dispute escalations
- View assigned approvals queue
- Weekly report generation
- Cannot modify business data directly

**Editor**
- Write and schedule blog posts
- Create featured business descriptions
- Upload images/media
- Schedule social media posts
- View content calendar
- Cannot approve or publish directly

### Phase 2.2: Database Updates

Add to existing schema:

```sql
-- Team Members Table
CREATE TABLE team_members (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  role ENUM('admin', 'manager', 'moderator', 'editor') NOT NULL,
  department VARCHAR(100),
  salary_php DECIMAL(10,2),
  commission_rate DECIMAL(5,2), -- For sales roles
  assigned_businesses JSONB, -- Array of business IDs they manage
  assigned_cities JSONB, -- Array of cities they manage (for managers)
  performance_score DECIMAL(3,2) DEFAULT 0,
  hire_date DATE,
  status ENUM('active', 'inactive', 'on_leave') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Employee Performance Table
CREATE TABLE employee_performance (
  id SERIAL PRIMARY KEY,
  employee_id INTEGER REFERENCES team_members(id),
  metric_type ENUM('businesses_signed', 'revenue_generated', 'approvals_processed', 'content_created') NOT NULL,
  metric_value DECIMAL(10,2),
  period_start DATE,
  period_end DATE,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Commission Tracking Table
CREATE TABLE commissions (
  id SERIAL PRIMARY KEY,
  employee_id INTEGER REFERENCES team_members(id),
  period_month DATE, -- First day of month
  base_commission_php DECIMAL(10,2),
  bonus_php DECIMAL(10,2),
  total_php DECIMAL(10,2),
  status ENUM('calculated', 'approved', 'paid') DEFAULT 'calculated',
  payment_date DATE,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Activity Audit Log
CREATE TABLE activity_logs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  action VARCHAR(255),
  resource_type VARCHAR(100),
  resource_id INTEGER,
  details JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Training Materials Table
CREATE TABLE training_materials (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  material_type ENUM('video', 'document', 'checklist', 'template') DEFAULT 'document',
  target_roles JSONB, -- Array of roles this applies to
  created_by INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Phase 2.3: Employee Dashboards

#### A. Admin Dashboard (`/admin`)
**Components:**
- System overview (total users, revenue, growth)
- Employee management table:
  - Name, role, salary, commission rate
  - Performance score
  - Add/remove employees
  - Set salary/commission
- Business approval queue (if needed)
- Financial dashboard:
  - Monthly revenue
  - Subscription count
  - Operating costs
  - Profit
- System logs:
  - Who did what and when
  - Can filter by action, user, date

**Time:** 8-10 hours

#### B. Manager Dashboard (`/dashboard/manager`)
**Components:**
- My Pipeline:
  - Businesses I'm responsible for
  - Their status, revenue, growth
  - All sortable/filterable
- Quick Actions:
  - "Add New Business" button
  - "Send WhatsApp Blast" button
  - "Generate Report" button
- Sales Metrics:
  - This month: businesses signed, revenue
  - Commission earned this month
  - Commission projection for year
  - Leaderboard (if multiple managers)
- Contact List:
  - All business owners I manage
  - Latest interaction
  - Next follow-up due
  - Quick WhatsApp button
- My Assigned Businesses Table:
  - Business name
  - Current status (active/inactive)
  - Monthly revenue
  - Last interaction date
  - Click to view details

**Time:** 10-12 hours

#### C. Moderator Dashboard (`/dashboard/moderator`)
**Components:**
- Approvals Queue:
  - Pending businesses waiting approval
  - Show key info (name, phone, address)
  - One-click approve/reject buttons
  - Add notes on rejection
- Flagged Items:
  - Inappropriate reviews
  - Businesses needing review
  - Click to view context
  - One-click hide/approve buttons
- Weekly Report:
  - Approvals processed this week
  - Average approval time
  - Rejections and reasons
  - Generate email report

**Time:** 8-10 hours

#### D. Editor Dashboard (`/dashboard/editor`)
**Components:**
- Content Calendar:
  - View weekly blog posts scheduled
  - View social media posts
  - Click to edit
  - Drag to reschedule
- Create New Post:
  - Write blog post about featured business
  - AI-suggested topics (based on trending businesses)
  - Preview as you type
  - Schedule publication date/time
  - One-click publish all social versions
- Featured Businesses List:
  - Recommended businesses to feature
  - Click to create post about them
  - View their stats
- Content Performance:
  - Views per post
  - Engagement (shares, clicks)
  - Top performing content

**Time:** 10-12 hours

### Phase 2.4: Key Features Across All Dashboards

**1. Real-Time Notifications**
- Email alerts for important events
- In-app notification center
- Badge count on profile

**2. Bulk Actions**
- Approve 10 businesses at once
- Send WhatsApp to multiple business owners
- Generate reports for multiple months

**3. Performance Tracking**
- Individual KPI dashboards
- Progress towards monthly targets
- Leaderboards (if multiple employees)

**4. Export Functionality**
- Export any data to CSV
- Monthly performance reports
- Commission statements (PDF)

**5. Settings/Preferences**
- Notification preferences
- Timezone
- Language
- Email signature

### Phase 2.5: Integration with Phase 1

All dashboards need to:
1. Pull real data from Phase 1 database
2. Track all actions in activity_logs table
3. Update team_members performance metrics
4. Calculate commissions automatically

**Time for integration:** 5-6 hours

### Phase 2 Total Time: 56-70 hours (approximately 2-2.5 weeks)

### Phase 2 Testing Checklist:
- [ ] Admin can add/remove employees
- [ ] Manager can view assigned businesses
- [ ] Manager commission calculated correctly
- [ ] Moderator approval workflow works
- [ ] Editor can schedule posts
- [ ] Activity logs record all actions
- [ ] Performance metrics update correctly
- [ ] Dashboard analytics accurate
- [ ] Export to CSV works
- [ ] Role-based access control enforced

---

## PHASE 3: Growth Systems (Weeks 6-7)

### Phase 3 Goal
Implement viral growth mechanisms and automation systems to drive adoption.

### Phase 3.1: Viral Referral System

**Database Schema:**
```sql
-- Referral Rewards Table
CREATE TABLE referral_rewards (
  id SERIAL PRIMARY KEY,
  referral_id INTEGER REFERENCES referrals(id),
  reward_type ENUM('featured_free', 'discount', 'credit') DEFAULT 'featured_free',
  reward_value VARCHAR(255), -- "Featured for 3 months" or "₱500 credit"
  claimed BOOLEAN DEFAULT FALSE,
  claimed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Features:**

1. **Referral Link Generation**
   - Each business gets unique link: `bisnesph.com/ref/restaurant-slug`
   - Trackable via referral_code in database
   - Works with WhatsApp, email, Facebook

2. **Referral Dashboard**
   - Show your referral link (copy button)
   - Visual progress: "2 of 3 referrals completed"
   - Countdown to reward unlock
   - List of people you referred
   - Reward unlocked notification

3. **Referral Landing Page** (`/ref/[code]`)
   - Shows "You've been referred by [Business Name]!"
   - Explains benefit to referred business
   - One-click signup
   - Tracks conversion

4. **Automated Referral Rewards**
   - Track referrals in database
   - When 3 referrals complete → mark as claimed
   - Auto-apply "Featured" status
   - Send WhatsApp notification
   - Update dashboard

**Time:** 10-12 hours

### Phase 3.2: WhatsApp Integration

**API Setup:**
- Use Twilio WhatsApp Business API OR Meta WhatsApp Business API
- Send messages to business owners
- Send messages to referred business owners

**Features:**

1. **Business Owner WhatsApp Bot**
   - Daily updates:
     ```
     "Hi Lola! 👋 Your restaurant got 12 views today!
      3 people clicked your number.
      Reply FEATURED for featured listings info."
     ```
   - Trial expiration reminders
   - Upgrade prompts
   - Review notifications

2. **Referral Notifications**
   ```
   "Great! Someone signed up from your referral link.
    2 more referrals to get Featured Forever!
    Reply SHARE to share your link again."
   ```

3. **Support Bot**
   - Answer FAQs
   - Help with account issues
   - Escalate to human if needed

4. **Database & Tracking**
   ```sql
   CREATE TABLE whatsapp_messages (
     id SERIAL PRIMARY KEY,
     business_id INTEGER REFERENCES businesses(id),
     recipient_number VARCHAR(20),
     message_body TEXT,
     message_type ENUM('notification', 'prompt', 'reminder', 'support'),
     sent_at TIMESTAMP,
     delivery_status ENUM('sent', 'delivered', 'read', 'failed'),
     response_received BOOLEAN DEFAULT FALSE,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

**Time:** 12-14 hours

### Phase 3.3: Content Automation System

**Features:**

1. **Automated Blog Post Generation**
   - Runs daily at 10am
   - Picks 3 featured restaurants
   - AI writes blog post:
     ```
     "Top 3 Must-Visit Restaurants in Iloilo This Week"
     - Includes descriptions of each business
     - SEO-optimized keywords
     - Links back to each business page
     ```
   - Publishes to WordPress/blog

2. **Social Media Auto-Posting**
   - Generates versions for each platform:
     - Facebook: longer, with hashtags
     - Twitter: short, punchy
     - LinkedIn: professional angle
     - Instagram: visual focus
   - Schedules at optimal times
   - Includes links back to platform

3. **Business Feature Posts**
   - AI writes: "Featured Business: [Name]"
   - Includes business photo
   - Highlights key info
   - Publish across all channels
   - Notify business: "You're featured!"

**Database:**
```sql
CREATE TABLE scheduled_posts (
  id SERIAL PRIMARY KEY,
  content_type ENUM('blog', 'social', 'email'),
  title VARCHAR(500),
  content TEXT,
  featured_businesses JSONB,
  platform ENUM('wordpress', 'facebook', 'twitter', 'linkedin', 'instagram', 'email'),
  scheduled_time TIMESTAMP,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP,
  performance_metrics JSONB, -- Views, clicks, etc
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Automation Script (Python/Node.js):**
```python
# Runs daily via cron job
async def daily_content_machine():
    # Get 3 random featured businesses
    businesses = db.query("""
        SELECT * FROM businesses
        WHERE featured = TRUE
        ORDER BY RANDOM()
        LIMIT 3
    """)

    # Generate blog post using Claude/GPT
    blog = await generate_blog_post(businesses)

    # Generate social media versions
    social_posts = await generate_social_posts(blog)

    # Auto-publish blog
    wordpress.publish_post(blog)

    # Schedule social posts
    for platform, post in social_posts.items():
        schedule_post(platform, post, optimal_time[platform])

    # Notify businesses they're featured
    for business in businesses:
        send_whatsapp(business.phone,
            f"Your business was featured in our blog today! Check it out: {blog.url}")

    # Track in database
    log_scheduled_posts(blog, social_posts)
```

**Time:** 14-16 hours

### Phase 3.4: Analytics & Insights System

**Features:**

1. **Business Analytics Dashboard**
   - View counter (updates real-time)
   - Click-through rate
   - Best performing days/times
   - Geographic breakdown of visitors
   - Comparison to competitor businesses (if opted in)

2. **Platform Admin Analytics**
   - Total businesses: 500
   - Active vs inactive
   - Featured subscriptions: 50 (recurring)
   - Month-over-month growth
   - Revenue breakdown by source

3. **Premium Insights Tier** (for businesses)
   - Detailed competitor analysis
   - Keyword analysis
   - Visitor demographics
   - Conversion optimization tips
   - Price: ₱999/month

**Database:**
```sql
CREATE TABLE analytics_events (
  id SERIAL PRIMARY KEY,
  business_id INTEGER REFERENCES businesses(id),
  event_type ENUM('page_view', 'link_click', 'phone_click', 'whatsapp_click', 'booking_click'),
  visitor_ip VARCHAR(45),
  visitor_country VARCHAR(100),
  visitor_device VARCHAR(50), -- mobile, desktop, tablet
  referrer VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Time:** 10-12 hours

### Phase 3.5: Payment System Integration

**Features:**

1. **PayMongo Integration** (Philippine payment processor)
   - Setup payment link for Featured subscriptions
   - Monthly recurring billing
   - Handle failed payments
   - Send invoice emails

2. **Payment Status Tracking**
   ```sql
   CREATE TABLE payment_transactions (
     id SERIAL PRIMARY KEY,
     business_id INTEGER REFERENCES businesses(id),
     subscription_id INTEGER REFERENCES subscriptions(id),
     amount_php DECIMAL(10,2),
     payment_method ENUM('card', 'gcash', 'dana', 'paymaya'),
     status ENUM('pending', 'successful', 'failed', 'refunded'),
     paymongo_transaction_id VARCHAR(255),
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

3. **Automated Invoicing**
   - Generate PDF invoice on successful payment
   - Email to business owner
   - Include receipt and upcoming renewal date

**Time:** 8-10 hours

### Phase 3.6: SEO & Growth Optimization

**Features:**

1. **Dynamic Sitemap Generation**
   - Runs daily
   - Includes all business pages
   - Includes all blog posts
   - Submit to Google Search Console

2. **Meta Tag Optimization**
   - Dynamic Open Graph tags
   - Meta descriptions
   - Schema markup for local business
   - Twitter cards

3. **Backlink Building**
   - Every business page has "Powered by BisnesPH" link
   - Links back to main site
   - Improves domain authority

4. **SEO Monitoring**
   - Track keyword rankings
   - Monitor backlinks
   - Setup Google Search Console alerts

**Time:** 8-10 hours

### Phase 3 Total Time: 72-84 hours (approximately 2.5-3 weeks)

### Phase 3 Testing Checklist:
- [ ] Referral system creates unique links
- [ ] Referral tracking works correctly
- [ ] Featured unlocked after 3 referrals
- [ ] WhatsApp bot sends messages
- [ ] WhatsApp messages deliver
- [ ] Blog posts generate automatically
- [ ] Social media posts scheduled correctly
- [ ] Analytics track page views
- [ ] Analytics track clicks
- [ ] Payment system processes charges
- [ ] Invoices generate and send
- [ ] Sitemap generates daily
- [ ] SEO tags render correctly

---

## PHASE 4: Launch Preparation (Week 8)

### Phase 4 Goal
Final polish, security hardening, and prepare for public launch.

### Phase 4.1: Security Hardening

1. **Authentication & Authorization**
   - Implement JWT tokens with expiration
   - Add refresh token rotation
   - Setup CORS properly
   - Rate limiting on API endpoints
   - SQL injection prevention (use parameterized queries)
   - XSS protection (sanitize all user input)
   - CSRF tokens on forms

2. **Data Protection**
   - Hash passwords with bcrypt
   - Encrypt sensitive data (phone numbers, emails)
   - HTTPS only (all traffic encrypted)
   - Secure cookies (httpOnly, secure, sameSite flags)
   - Regular backups of database

3. **Environment Variables**
   - Never commit secrets to GitHub
   - Use .env.local (gitignored)
   - Document all required env vars

**Time:** 4-5 hours

### Phase 4.2: Performance Optimization

1. **Frontend**
   - Image optimization (next/image component)
   - Code splitting
   - Minification
   - Caching strategy
   - Target Lighthouse score: 90+

2. **Database**
   - Add indexes on frequently queried columns
   - Query optimization
   - Connection pooling

3. **API**
   - Response compression
   - Pagination for large datasets
   - Caching (Redis for frequently accessed data)

**Time:** 6-8 hours

### Phase 4.3: Testing & QA

1. **Unit Tests** (Jest)
   - Test API endpoints
   - Test authentication
   - Test payment integration
   - Target: 80%+ code coverage

2. **Integration Tests**
   - Test full referral flow
   - Test signup → payment flow
   - Test WhatsApp message sending

3. **Manual Testing**
   - Register new business (full flow)
   - Create website
   - Add menu items
   - Claim business
   - Test referrals
   - Test featured upgrade
   - Test payment flow

**Time:** 8-10 hours

### Phase 4.4: Documentation

1. **User Documentation**
   - How to claim your business
   - How to create a website
   - How to view analytics
   - How to get featured
   - How to contact support

2. **Developer Documentation**
   - API documentation
   - Database schema docs
   - Setup instructions
   - Deployment process
   - WhatsApp bot setup

3. **Employee Training**
   - Manager onboarding guide
   - Moderator approval guide
   - Editor content creation guide
   - Support escalation guide

**Time:** 5-6 hours

### Phase 4.5: Pre-Launch Checklist

**Infrastructure:**
- [ ] Domain DNS properly configured
- [ ] Subdomains working (*.bisnesph.com)
- [ ] SSL certificate installed
- [ ] Vercel deployment configured
- [ ] Database backups scheduled
- [ ] Monitoring/logging setup (Sentry, LogRocket)
- [ ] Email service configured (SendGrid, Mailgun)
- [ ] WhatsApp Business API activated
- [ ] PayMongo account verified

**Content:**
- [ ] Homepage copy written
- [ ] Blog section populated (3-5 posts)
- [ ] Privacy policy written
- [ ] Terms of service written
- [ ] FAQ section created
- [ ] Contact form working
- [ ] Social media accounts created

**Marketing:**
- [ ] Facebook group for businesses created
- [ ] Email list started
- [ ] LinkedIn profile updated
- [ ] Initial 20 restaurants identified for outreach
- [ ] WhatsApp messaging templates created

**Team:**
- [ ] Your PH friend trained on dashboard
- [ ] Moderators trained on approval process
- [ ] Editor trained on content system
- [ ] Support documentation ready

### Phase 4.6: Soft Launch Plan

**Week 1 of Launch:**
1. Enable platform for Iloilo testing (internal)
2. Your PH friend signs up first 5 restaurants
3. Test all systems
4. Fix any bugs found
5. Send initial WhatsApp messages

**Week 2 of Launch:**
1. Soft launch to 20 restaurants (direct outreach)
2. Get feedback
3. Fix issues
4. Collect testimonials
5. Track referrals

**Week 3 of Launch:**
1. Public launch (Facebook, WhatsApp groups)
2. Monitor systems closely
3. Support users
4. Track analytics
5. Gather more feedback

### Phase 4 Total Time: 27-34 hours (approximately 1 week)

---

## Complete Project Timeline

```
Week 1-3:   Phase 1 (Core Platform)
  Mon-Wed:    Database design + API endpoints
  Thu-Fri:    Frontend components (homepage, directory, dashboard)
  Weekend:    Mini-website generator + testing

Week 4-5:   Phase 2 (Employee Management)
  Mon-Wed:    Admin + Manager dashboards
  Thu-Fri:    Moderator + Editor dashboards
  Weekend:    Integration + testing

Week 6-7:   Phase 3 (Growth Systems)
  Mon-Tue:    Referral system + WhatsApp
  Wed-Thu:    Content automation
  Fri:        Analytics + payments + SEO

Week 8:     Phase 4 (Launch Prep)
  Mon:        Security hardening
  Tue-Wed:    Testing + optimization
  Thu:        Documentation
  Fri:        Soft launch

Total: 8 weeks to full launch
```

---

## Technology Stack

### Frontend
- **Next.js 14** (App Router, Server Components)
- **React 18** (Component library)
- **Tailwind CSS** (Styling)
- **TypeScript** (Type safety)
- **Vercel** (Deployment)

### Backend
- **Next.js API Routes** (Serverless functions)
- **PostgreSQL** (Database)
- **Prisma** (ORM)
- **NextAuth.js** (Authentication)

### External APIs
- **Twilio/Meta WhatsApp Business API** (WhatsApp messaging)
- **PayMongo** (Payments - PHP Peso billing)
- **Cloudinary** (Image storage + CDN)
- **SendGrid** (Email notifications)
- **Google Maps** (Location display)
- **OpenAI/Claude** (AI content generation)
- **Sentry** (Error tracking)

### DevOps
- **GitHub** (Version control + source of truth)
- **Vercel** (CI/CD + deployment)
- **GitHub Actions** (Automated testing)
- **PostgreSQL Backup** (Daily automated backups)

---

## Revenue Model (Validated in Plan)

### Month 1: Launch
- 50-100 restaurants signed up
- 5-10 featured subscriptions (₱299/month = ~£25/month)
- Revenue: £25-50/month

### Month 3: Growth
- 500 restaurants
- 50 featured subscriptions (£215/month)
- AdSense: £30/month
- Affiliate links: £20/month
- **Total: £265/month**

### Month 6: Expansion
- 1,000 restaurants
- 100 featured subscriptions (£430/month)
- Premium insights tier: 5 customers (£40/month)
- Data licensing: £50/month
- **Total: £520/month**

### Month 12: Multi-City
- 5,000+ restaurants (across 5 cities)
- 250+ featured subscriptions (£1,075/month)
- Premium insights: 20 customers (£160/month)
- Data licensing: £150/month
- **Total: £1,385/month**

---

## GitHub Workflow

### Branch Strategy
```
main (production - only tested, working code)
  ├── develop (staging - integration point)
  │   ├── phase-1 (core platform)
  │   ├── phase-2 (employees)
  │   ├── phase-3 (growth)
  │   └── phase-4 (launch)
  └── hotfix/* (urgent production fixes)
```

### Commit Convention
```
[PHASE-X] Feature: Description of changes

- Added user authentication endpoints
- Implemented JWT token refresh
- Added tests for auth flow

Closes #123
```

### Pull Request Workflow
1. Create feature branch from current phase branch
2. Write code + tests
3. Push to GitHub
4. Create PR
5. Self-review
6. Merge to phase branch
7. Phase branch merges to main when phase complete

---

## Success Metrics (Monthly Tracking)

### User Metrics
- Total restaurants signed up
- Active restaurants (logged in past 30 days)
- Featured subscriptions (count)
- Monthly churn rate

### Revenue Metrics
- MRR (Monthly Recurring Revenue) from subscriptions
- One-time referral reward claims
- AdSense revenue
- Data licensing revenue

### Growth Metrics
- New signups per day
- Signups via referral vs direct
- Viral coefficient (each user brings how many new users)
- Website traffic

### Engagement Metrics
- Average business page views/month
- Click-through rate (views to clicks)
- WhatsApp message open rate
- Featured business upgrade rate

---

## Critical Dependencies & Assumptions

### Assumptions
1. Your PH friend can dedicate 20+ hours/week to business outreach
2. Domain + hosting costs ~£50/month
3. PostgreSQL database service (Neon, Supabase): ~£20-30/month
4. WhatsApp API: ~£50/month for message volume
5. Cloudinary: ~£30/month for image storage
6. Initial traction comes from restaurant niche (sector-wide adoption)

### Risks & Mitigation
1. **Risk:** Restaurants don't want to sign up
   - **Mitigation:** Start with your PH friend's personal network (20 restaurants max)
   - Get testimonials from early adopters
   - Showcase success stories

2. **Risk:** Payment processing fails
   - **Mitigation:** Use PayMongo (proven in Philippines)
   - Have manual invoice system as backup
   - Test payment flow thoroughly before launch

3. **Risk:** WhatsApp messages marked as spam
   - **Mitigation:** Only send when user opted in
   - Follow WhatsApp Business API best practices
   - Start with 1 message/day per business

4. **Risk:** Competitors copy the model
   - **Mitigation:** Speed to market (8 weeks)
   - Build moat through: network effects, data, brand
   - Plan multi-city expansion early

---

## Next Steps After Reading This Document

1. **Create GitHub repository** (before any code)
   - Go to https://github.com/new
   - Name: `bisnesph-platform`
   - Clone to your machine

2. **Set up development environment** locally:
   ```bash
   # Install Node.js 18+
   # Clone repository
   git clone https://github.com/YOUR_USERNAME/bisnesph-platform.git
   cd bisnesph-platform

   # Create branches for each phase
   git checkout -b phase-1
   git checkout -b phase-2
   git checkout -b phase-3
   git checkout -b phase-4
   ```

3. **Build Interactive Demo** (before Phase 1)
   - Use static data (hardcoded 5 restaurants)
   - Focus on UX/flow
   - Get feedback from your PH friend
   - Validate concept viability

4. **Start Phase 1** (Core Platform)
   - Begin with database schema
   - Build API endpoints
   - Build frontend components
   - Deploy to Vercel

5. **Have someone (preferably Copilot) build Phase 1** using this document
   - Share entire document with Copilot
   - Request Phase 1 implementation
   - Review code + test locally
   - Push to GitHub phase-1 branch

---

## File Structure to Create

```
bisnesph-platform/
├── .github/
│   └── workflows/
│       ├── test.yml
│       └── deploy.yml
├── frontend/                    (Next.js 14 app)
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── styles/
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
├── database/
│   ├── schema.sql               (Phase 1.1)
│   ├── migrations/              (Prisma migrations)
│   └── seed.ts                  (Initial data)
├── docs/
│   ├── API.md                   (API documentation)
│   ├── SETUP.md                 (Developer setup)
│   ├── USER_GUIDE.md            (Business owner guide)
│   ├── EMPLOYEE_GUIDE.md        (Employee training)
│   └── DEPLOYMENT.md            (How to deploy)
├── scripts/
│   ├── daily-content-machine.ts (Content automation)
│   ├── send-whatsapp.ts         (WhatsApp messenger)
│   └── analytics.ts             (Analytics processor)
├── .env.example                 (Template for env vars)
├── .gitignore
├── README.md
└── LICENSE

```

---

## For Copilot/Claude AI Agent

**When you receive this document to implement:**

1. **Start with Phase 1 ONLY** - Don't try to build everything at once
2. **Follow the timeline** - Each phase has specific deliverables
3. **Prioritize database first** - Schema design is critical for Phase 1
4. **Test as you go** - Each component should be testable
5. **Commit to GitHub** - Push working code to phase-1 branch
6. **Ask questions** - If requirements unclear, ask the user
7. **Use TypeScript** - Strict typing for backend + frontend
8. **Mobile-first design** - Most users in Philippines use mobile
9. **Optimize for speed** - Fast pages = better SEO + UX
10. **Think about scale** - Design with 5,000+ businesses in mind

### Specific Instructions for Phase 1:
- Create database tables first (test schema)
- Build API endpoints second (test with Postman/curl)
- Build frontend components third (static + API integration)
- Test thoroughly before moving to Phase 2
- Deploy to Vercel (not just localhost)
- Document all API endpoints as you build

**This document contains all requirements. Build comprehensively using these instructions as your specification.**

---

## Contact & Support

- **Project Owner:** [Your Name]
- **PH Team Lead:** [Friend's Name/WhatsApp]
- **Timeline:** 8 weeks from start to soft launch
- **Budget:** ~£150-200/month (hosting + APIs)
- **GitHub Repo:** (To be created)

---

**Ready to build? Start by:**
1. Creating the GitHub repository
2. Reading through this entire document
3. Building the Interactive Demo
4. Then share this with Copilot for Phase 1 implementation

**Estimated final result:** A fully automated, viral-growth business directory platform generating £1,000+/month by Month 12, with multiple revenue streams and ready for £500k-2M acquisition exit.
