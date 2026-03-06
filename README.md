# 🐼 Snapify – Next.js + PostgreSQL Screenshot API SaaS Starter
## Enterprise-Grade Screenshot & PDF API Platform

This repository is a **production-ready SaaS starter** built with **Next.js (App Router)**, **PostgreSQL**, and **Prisma**, branded for Snapify.

**Snapify** provides a simple, scalable API to convert any URL into a high-quality screenshot or PDF—designed for SEO, monitoring, directory, and automation use cases.

---

## 🚨 ABSOLUTE AUTHORITY NOTICE

This repository is governed by the **Snapify Template Manifest**.

If anything conflicts:

1. Snapify Template Manifest rules win
2. This README wins over inline comments
3. Explicit user instructions win over defaults
4. Assumptions are forbidden

If unclear → **STOP AND ASK**

---

## 🚀 TECHNOLOGY STACK

- **Frontend:** Next.js (App Router)
- **Backend:** Node.js (Route Handlers + Server Actions)
- **Database:** PostgreSQL (hosted on Railway)
- **ORM:** Prisma
- **Authentication:** NextAuth / Custom Auth
- **Language:** TypeScript (strict)
- **Deployment:** Vercel or Docker
- **Automation:** Custom Node.js scripts

---

## 🧠 SNAPIFY OVERVIEW

Snapify delivers:

- Instant website screenshots & PDFs via REST API
- Dashboard for account management, API usage, and billing
- Secure authentication and robust data safety
- Seamless Stripe-powered pay-per-request billing

**Perfect for**: SEO tools, directories, monitoring, automation providers, and developers needing on-demand website images.

---

## 📁 PROJECT STRUCTURE (SOURCE OF TRUTH)

```txt
/
├── app/                         # Next.js App Router (PRIMARY)
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Public / marketing entry (Snapify branded)
│   ├── (dashboard)/             # Auth-protected Snapify SaaS surface
│   │   ├── page.tsx             # Main dashboard landing
│   │   ├── layout.tsx           # Dashboard shell
│   │   ├── activity/            # Snapify API activity log
│   │   └── general/             # Account info for Snapify
│   ├── api/                     # Backend route handlers (Snapify endpoints)
│   └── actions/                 # Server actions
│
├── components/                  # Reusable UI components
│   ├── ui/                      # Design system primitives
│   └── forms/                   # Controlled forms
│
├── lib/                         # Core application logic (Snapify)
│   ├── db.ts                    # Prisma client
│   ├── auth.ts                  # Auth logic
│   └── validators.ts            # Zod / validation schemas
│
├── prisma/
│   ├── schema.prisma            # Database schema (CRITICAL)
│   └── migrations/              # Auto-generated (do not hand-edit)
│
├── scripts/                     # Automation & infrastructure logic
│   ├── db-init.js               # Database bootstrap (IMMUTABLE)
│   ├── dev-supervisor.js        # Dev orchestration (IMMUTABLE)
│   └── git-poll.js              # Repo polling (IMMUTABLE)
│
├── public/                      # Static assets
├── styles/                      # Global styles
│
├── env.example                  # Environment variable contract
├── Dockerfile                   # Container build definition (Snapify)
├── next.config.js               # Framework config
└── package.json                 # Dependency graph
```

---

## 🧭 LANDING PAGES & DASHBOARD RULES (SNAPIFY)

### Landing Pages

- All landing page creation and updates MUST be done in:

```
app/(dashboard)/page.tsx
```

- This file is the **single source of truth** for Snapify’s SaaS landing experience
- No additional landing pages may be created unless explicitly requested
- Marketing and SaaS entry logic must converge here

---

### Dashboard & SaaS Feature Placement

All **Snapify SaaS features** must live inside:

```
app/(dashboard)/
```

Rules:

- New Snapify SaaS features must be added as **folders**
  (e.g. `/activity`, `/general`)
- `app/(dashboard)/page.tsx` must be updated to surface new features
- `app/(dashboard)/layout.tsx` may be updated **only** to support layout or navigation
- No Snapify SaaS UI, logic, or workflows may exist outside `(dashboard)`

---

### Authentication Pages (STRICT)

- **Auth pages must not be changed** unless explicitly requested by the user
- Existing auth structure must be preserved
- No visual, layout, or logic changes by default

Authentication is **stable infrastructure**, not a customization surface.

---

## 🔐 ENVIRONMENT VARIABLES (CONTRACT)

Rules:

- `env.example` is the **single source of truth**
- AI must not invent new environment variables
- All env usage must be validated
- Secrets must never be committed
- UI code must never access env variables directly

---

## 🗄️ DATABASE & PRISMA (CRITICAL ZONE)

- PostgreSQL hosted on Railway
- Prisma ORM is mandatory
- `schema.prisma` is feature-driven and may be updated to support requirements
- `prisma/migrations` are generated and must not be hand-edited
- UI and templates should align with defined schema changes (no silent/assumed schema shifts)

### Schema change workflow (feature-driven)
- Capture the feature requirement first.
- Edit `prisma/schema.prisma` for new Snapify features; do not touch existing migration files.
- GitHub Actions will generate and apply migrations automatically from the updated schema.
- If any ambiguity remains, stop and request clarification.

---

## 🔌 API ROUTES & SERVER ACTIONS

Rules:

- Request/response contracts are immutable
- Authentication checks must remain enforced
- Input validation is required

---

## 🔐 AUTHENTICATION & AUTHORIZATION

- Providers may be updated; preserve security posture and documented flows
- Session shape should remain consistent unless a feature requires a well-defined change
- Role logic must remain consistent or be explicitly revised

---

## 🤖 SCRIPTS DIRECTORY CONTRACT

Scripts are **infrastructure-only**.

**Immutability Rule**

All files inside the `scripts/` directory are **effectively immutable**.

---

## 📦 DEPLOYMENT

Designed for:

- Vercel
- Docker-based platforms
- Managed PostgreSQL providers (Railway, Supabase, Neon)

---

## 📄 LICENSE

Part of the **Snapify Template System**.  
Usage may be subject to internal or commercial licensing.

---

## 🐼 FINAL DIRECTIVE

This repository prioritizes:

- Predictability
- Stability
- Longevity
- AI correctness

**Stability &gt; Cleverness**