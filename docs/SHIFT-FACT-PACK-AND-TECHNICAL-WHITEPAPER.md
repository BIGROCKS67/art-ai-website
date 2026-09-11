# Shift AI Technology Ltd — Diligence Fact Pack + Technical Whitepaper

Updated: 2026-09-09  
Sources: Companies House; Jack Rockell answers; BioSense repo; FibreCRM/Braid monorepo; Deep Space Learning docs; NVIDIA DGX SETUP folder.  
Tone: facts only.

---

# Part 1 — Diligence answers

## 1. Company details

| Field | Value |
|--------|--------|
| Legal name | SHIFT AI TECHNOLOGY LTD |
| Company number | 17159725 |
| Status | Active |
| Type | Private limited company |
| Incorporated | **15 April 2026** |
| Registered office | Unit 14, The Maltings Industrial Estate, Hall Road, Southminster, Essex, CM0 7EQ, United Kingdom |
| SIC | 62090; 63110 |
| Directors | Darren Bishop; Jack Rockell |
| Trading as | Shift AI Tech |
| Domain | https://shiftaitech.com |
| Contact | jack@shiftaitech.com · partnerships@shiftaitech.com |

## 2. People

| Role | Count | Notes |
|------|-------|--------|
| Co-founders | 2 | One commercial / one technical (dev) |
| Subcontractors | 2 | Active |
| **Total working in/for Shift now** | **4** | |
| **Developers / technical** | **~3** | Technical co-founder + 2 subcontractors (confirm if commercial co-founder also codes) |

## 3. Funding

- **No outside investment.** Fully self-funded / bootstrapped for Shift Ltd.
- Historical story capital (website): ~$650k spent on Bitcoin prediction models (2024) linked to Infinite Point Capital narrative; **separate from** CH incorporation funding status.

## 4. AWS credits

- **Yes — AWS Activate credits issued** (USD promotional credits; appear in Billing console after 3–4 hours). Amount not stated in the issue email; check Billing and Cost Management for balance + expiry.
- AWS **is** used in production (see infra below); Activate credits apply to eligible services automatically.

## 5. Accelerators / incubators / VC–angel affiliations

- **AWS Activate** (startup credits / AWS for Startups). No equity accelerator or VC affiliation.

## 6. NVIDIA / GPU

- **Own NVIDIA DGX Spark** already (GB10 Grace Blackwell class, documented locally as `spark-*`).
- Intended use: **training AI models**; looking to expand NVIDIA usage.
- Documented DGX workloads today (local ops folder): PyTorch / transformers; FLUX.1 image + LoRA; ChromaDB + sentence-transformers RAG for trading/quant tooling; bot/trading stacks. Deep Space video path is **not** DGX-dependent (HeyGen SaaS + Remotion CPU).

## 7. Products Shift owns (Jack: own all)

| Product | Live surface | Status |
|---------|--------------|--------|
| **BioSense** | bio-sense.ai / Cloud Run | Owned health intelligence SaaS |
| **Braid** (AML / CRA skins) | usebraid.ai · cra.fibrecrm.ai · aml.shiftaitech.com | Owned AI AML risk-assessment platform (built for FibreCRM commercial relationship; Jack confirms Shift owns) |
| **Deep Space Learning** (EduStream) | Deep Space Commodities course platform | Owned AI-avatar L&D product |
| Other portfolio items on marketing site (screener, churn, nutrition) | Case/portfolio | Jack: own all — treat as Shift IP unless later corrected |

Website client builds (Red Cow, Mixa, etc.) are delivery work, not SaaS products.

## 8. Traction

- **Revenue to date:** ~**£10k** made already (confirm currency if not GBP).
- **Ongoing live / active:** BioSense, Braid AML, Deep Space.
- Partnership: **RAMDVG** (tokenisation) for joint AI go-to-market (esp. legal / asset).
- No formal pitch deck currently.

## 9. Decks

- **No pitch decks.**
- Capability materials: websites flyer; this whitepaper; product READMEs / handover docs in repos.

## 10. AWS usage (from code, not a billing export)

| Area | Services observed |
|------|-------------------|
| Shift marketing site forms | API Gateway `eu-west-2` |
| Braid / CRA (FibreCRM AWS acct `361226991768`, `eu-west-2`) | ECS Fargate, ECR, S3, CloudFront, RDS PostgreSQL Multi-AZ, (CloudFormation under `infrastructure/`) |
| BioSense | **Primary = GCP Cloud Run + Cloud SQL** (not AWS). R2 (Cloudflare) for PDFs. Optional Vercel cron defs exist but prod narrative is GCP. |

**Monthly spend:** not in repos. **ASK for AWS/GCP bill totals if application needs a number.**

---

# Part 2 — Technical whitepaper (detail dump)

## A. BioSense — personal health intelligence

**Repo:** `Shift-ai-tech-ORG/BioSense-App` · local `/Users/jackrockell/Desktop/biosense`  
**Live (README):** Cloud Run `europe-west2`, project naming `shift-biosense`

### Stack
- Next.js **16.2.4** App Router, React 19, TypeScript, Tailwind v4
- Prisma **7** + PostgreSQL 15 (`@prisma/adapter-pg`)
- NextAuth v4 (Credentials + JWT, bcrypt cost 12)
- Anthropic SDK · model **`claude-sonnet-4-5`**
- Stripe subscriptions (AED 149/mo, AED 1499/yr in code)
- Cloudflare R2 for blood PDF storage
- Resend (email helpers present)
- Docker Node 22 · Cloud Build → Artifact Registry → Cloud Run (1Gi, max 10)

### Architecture
```
Browser (App Router)
  → NextAuth session
  → Route Handlers /api/*
  → Prisma → Cloud SQL Postgres
  → Claude (blood analysis, chat, weekly/monthly reports)
  → R2 (PDFs)
  → Stripe (billing webhooks)
  → Cloud Scheduler → /api/cron/* (x-cron-secret)
```

### LLM / agents
- **Not multi-agent.** Single-call Claude wrapper with retries on 529/429.
- Surfaces: blood PDF analysis (JSON biomarkers T1/T2/T3); “Ask Anything” chat with DB context stuffing; weekly/monthly report JSON.
- App 5 medical-language policy in system prompts (no diagnosis claims).
- Deterministic (non-LLM): health score, bio-age heuristic, Pearson lag patterns, anomaly thresholds.

### RAG
- **None.** Personalisation = SQL context into prompt, not vector retrieval.

### Data model (highlights)
User, DailyCheckin, HealthScore, BloodResult, BiologicalAge, WearableSync, ChatMessage, WeeklyReport, MonthlyReport, Pattern, Consent, NotificationLog, Stripe fields on User.

### Integrations
Oura / Whoop / Garmin OAuth; Apple Health JSON upload; Samsung auth stub; Stripe Checkout + Portal + webhook; R2; Resend.

### Security
JWT sessions 30d; per-route session checks (no Next middleware file); cron secret header; Stripe signature verify; consent versions + IP; account export + hard delete (PDPL-oriented); Cloud Run `--allow-unauthenticated` with app-level auth.

### Gaps / incomplete (honest)
Web push send path unwired; lag-analysis writer / bio-age writer not fully wired from routes; wearable metric sync after OAuth limited; some README “done” items partial.

---

## B. Braid / CRA / AML — AI risk assessments

**Canonical repo:** `FibreCRM/AI-Risk-Assessments` · local `/Users/jackrockell/Desktop/ACCOUNTING SOFTWARE`  
**Skins (same codebase):**
- Braid → `usebraid.ai` (self-serve, `product_type=standalone`)
- CRA → `cra.fibrecrm.ai` (FibreCRM enterprise)
- AML → `aml.shiftaitech.com` (legacy Hetzner)

Built by Shift AI for FibreCRM commercial channel; Jack confirms Shift owns the product IP.

### Stack
- Backend: Python 3.13, Flask 3.1, Gunicorn, Flask-JWT-Extended, SQLAlchemy, WeasyPrint, Sentry
- Frontend: React 19, Vite 8, TypeScript, Tailwind v4, React Router 7
- AI: **Google Gemini 2.5 Flash + Pro on Vertex AI** (`europe-west1` when Vertex enabled)
- Search: **Tavily** (adverse media + enrichment)
- QA: deterministic `trial/qa_checker.py` (“Python decides score, AI decides words”)
- Payments: Stripe (GBP) checkout, subscriptions, top-ups, portal; webhook idempotency via `StripeEventLog`

### Infrastructure
| Env | Host | DB | Compute |
|-----|------|-----|---------|
| AML | Hetzner VPS | SQLite | Nginx + Gunicorn |
| CRA | AWS eu-west-2 | RDS Postgres Multi-AZ | ECS Fargate |
| Braid | Same AWS account | RDS Postgres | ECS Fargate + S3/CloudFront |

### Pipeline
Firm submits company/individual → Companies House / Charity / web → FCDO sanctions + OpenSanctions PEP → Tavily adverse media → Gemini report → QA rules → HTML/PDF → UI and/or Make.com webhook (enterprise).

### Auth / tenancy
JWT (8h); TOTP MFA; roles user/partner/admin + firm admin; tenant = `Firm`; API keys SHA-256 for enterprise tasks; Microsoft Entra SSO per firm; affiliate realm JWT.

### Security posture (documented)
Internal audits May/July 2026; customer protection HTML; **not CREST**; July follow-up recommended independent pen test. FibreCRM org holds Cyber Essentials / IASME (FibreCRM corporate, not automatically Shift Ltd accreditation).

---

## C. Deep Space Learning (EduStream)

**Repo:** `Shift-ai-tech-ORG/deep-space-learning` (private)  
**Product:** Netflix-style course platform for *Deep Space Commodities and the New Space Economy*.

### Stack
Next.js 15, React 19, TypeScript, Tailwind · Supabase (Postgres + Auth) · Stripe one-time GBP unlock · OpenAI **GPT-4o-mini** tutor · Cloudflare R2 video (`deep-space-course`) · Remotion 4 · HeyGen avatar API · Vercel deploy target.

### Avatar / video pipeline
```
Lesson markdown
  → HeyGen (talking-head avatar + voice + captions)
  → Unsplash B-roll
  → Remotion composite (avatar + B-roll + lower-thirds)
  → ffmpeg
  → R2 upload
  → SQL points lessons.video_url → r2:…
  → GPT tutor prompts from captions
```
Scale: 12 chapters / 73 lessons; Chapter 1 documented live end-to-end (as of mid-2026 handoff notes).

### GPU
**Not required for Deep Space video** (HeyGen SaaS + Remotion CPU). Separate from DGX training box.

---

## D. NVIDIA DGX Spark (on-prem)

Documented under `/Users/jackrockell/Desktop/NVIDIA DGX SETUP`:
- NVIDIA DGX Spark / **GB10**
- PyTorch, transformers, accelerate, bitsandbytes
- FLUX.1-dev / schnell + DreamBooth LoRA training
- ChromaDB + sentence-transformers RAG for quant/trading KB
- Trading bot / optimizer workloads via screen/rsync

**Roadmap intent (Jack):** expand NVIDIA usage for **model training**.

---

## E. Cross-cutting IP / deployment / roadmap notes

### Proprietary IP (as claimed)
- BioSense application + health scoring / Claude App-5 prompt regime
- Braid/CRA/AML assessment engine (`trial/`), QA rules, multi-skin SaaS
- Deep Space course platform + avatar pipeline tooling
- DGX local training / FLUX / RAG tooling

### Cloud footprint summary
- **GCP:** BioSense (Cloud Run, Cloud SQL, Secret Manager, Scheduler, Artifact Registry)
- **AWS:** Braid/CRA (ECS, RDS, S3, CloudFront, ECR); Shift site forms API Gateway
- **Cloudflare:** R2 (BioSense PDFs; Deep Space video)
- **Supabase / Vercel / Hetzner:** Deep Space / legacy AML

### Near-term roadmap (inferred + Jack intent)
1. Keep BioSense, Braid, Deep Space live and shipping
2. Scale NVIDIA / DGX for training
3. RAMDVG joint AI for legal / tokenised assets
4. Formalise pen test cadence for Braid (ICAEW / FibreCRM thread)
5. Produce pitch deck when needed (none today)

---

## F. Still missing if applications demand it

1. Exact **monthly AWS + GCP spend** (billing console)
2. Whether revenue ~10k is **GBP** and period (LTD lifetime vs last 12 months)
3. Named customer logos / contracts we can disclose
4. Pen-test vendor booking for Braid (Cool Waters / clone CRA discussed)
5. Confirm commercial co-founder coding split if they want “X of Y are developers” exact

---

## One-paragraph company summary (factual)

Shift AI Technology Ltd (17159725, incorporated 15 April 2026, Southminster) is a bootstrapped UK AI product studio run by two co-founders plus two subcontractors (~3 technical). It owns and operates BioSense (Next.js/Claude/GCP), the Braid/CRA/AML assessment platform (Flask/React/Vertex Gemini on AWS and Hetzner), and Deep Space Learning (Next.js/HeyGen/Supabase/R2). Traction: ~£10k revenue to date with those products ongoing; RAMDVG partnership for tokenisation + AI. No outside equity. AWS Activate credits issued; production workloads on AWS. On-prem NVIDIA DGX Spark is used / planned for model training; looking to deepen NVIDIA usage. No pitch deck yet; technical detail lives in product repos and this document.
