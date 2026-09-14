export const keyMessages = [
  'Shift AI Tech builds, owns, and operates AI products.',
  'Live products in health, compliance, and learning: BioSense, Braid, Deep Space Learning.',
  'We train models on NVIDIA DGX and cloud GPUs to power our product stack.',
  'A UK AI product company. Founder-led. Shipping in market.',
]

export const caseStudyCategories = [
  { id: 'aml', label: 'CRM / AI generated KYC & AML Reporting' },
  { id: 'lnd', label: 'AI Learning & Development Training Videos' },
  { id: 'biosense', label: 'Sports & AI Health Life Science' },
  { id: 'screener', label: 'AI Supplier & Customer Screener' },
  { id: 'churn', label: 'Predictive Customer Success & Retention' },
  { id: 'nutrition', label: 'AI Nutrition & Lifestyle Planning' },
]

export const portfolio = [
  {
    id: 'aml',
    iconKey: 'Shield',
    sector: 'Compliance & Finance',
    category: 'CRM / AI generated KYC & AML Reporting',
    partner: 'Braid',
    short: 'AML reporting that cuts compliance from days to hours.',
    description:
      'Owned Anti-Money Laundering and risk assessment product for regulated firms. Monitors entities and transactions, flags risk with AI, and generates regulator-ready reports.',
    tags: ['AML Reporting', 'KYC Automation', 'Financial Crime Detection'],
    quote:
      'What used to take our compliance team three days now takes under two hours. The accuracy and audit trail are exceptional.',
    reference: 'Compliance Director, Mid-Sized Accountancy Practice',
    images: ['/case-studies/braid-aml.jpg'],
    featured: true,
    link: { href: 'https://usebraid.ai/', label: 'usebraid.ai' },
  },
  {
    id: 'lnd',
    iconKey: 'GraduationCap',
    sector: 'Learning & Development',
    category: 'AI Learning & Development Training Videos',
    partner: 'Deep Space Learning',
    short: 'Training courses scripted, narrated, and delivered by AI.',
    description:
      'Owned AI course platform for professional training. Lessons scripted, narrated, and delivered by AI avatar instructors at product scale.',
    tags: ['AI Avatars', 'Course Delivery', 'Training Video Automation'],
    quote:
      'We went from concept to a fully accredited, AI-delivered course catalogue in eight weeks. The cost saving versus traditional production is significant.',
    reference: 'Head of Learning & Development, Professional Training Provider',
    images: [
      '/case-studies/deep-space-1.jpg',
      '/case-studies/deep-space-3.jpg',
      '/case-studies/deep-space-2.jpg',
    ],
    featured: true,
  },
  {
    id: 'biosense',
    iconKey: 'Activity',
    sector: 'Health & Life Science',
    category: 'Sports & AI Health Life Science',
    partner: 'BioSense',
    short: 'Personal health intelligence from blood panels and wearables.',
    description:
      'Owned personalised health intelligence product. Users upload blood results, connect wearables, and get AI biomarker analysis with weekly reports.',
    tags: ['Claude AI', 'Wearable Integration', 'Biomarker Analysis', 'Next.js'],
    quote:
      'From interactive POC to production. Auth, blood-panel analysis, billing, and wearable sync in one continuous health intelligence product.',
    reference: 'Shift AI Tech · Live product',
    link: { href: 'https://bio-sense.ai/', label: 'bio-sense.ai' },
    images: ['/case-studies/biosense.jpg'],
    featured: true,
  },
  {
    id: 'screener',
    iconKey: 'Search',
    sector: 'Risk & Procurement',
    category: 'AI Supplier & Customer Screener',
    partner: 'Supplier & Customer Intelligence Engine',
    description:
      'AI screening product for onboarding suppliers and high-value customers. Ingests filings, sanctions, adverse media, and transaction history for real-time risk scores.',
    tags: ['Supplier Screening', 'Customer Due Diligence', 'Risk Scoring'],
    quote:
      'Onboarding reviews that took analysts half a day now complete in minutes, with a full audit trail for every decision.',
    reference: 'Head of Risk, Professional Services Firm',
  },
  {
    id: 'churn',
    iconKey: 'Users',
    sector: 'Customer Success & SaaS',
    category: 'Predictive Customer Success & Retention',
    partner: 'Churn Prediction & Retention Engine',
    description:
      'Predictive ML product that identifies at-risk subscribers up to 60 days before churn and triggers retention workflows.',
    tags: ['Churn Prediction', 'Retention Automation', 'Predictive ML'],
    quote:
      'Churn rate dropped 23% in the first quarter after deployment. The early-warning signals have completely changed how our CS team prioritises.',
    reference: 'Head of Customer Success, B2B SaaS Platform',
  },
  {
    id: 'nutrition',
    iconKey: 'Utensils',
    sector: 'Health & Fitness',
    category: 'AI Nutrition & Lifestyle Planning',
    partner: 'Smart Kitchen & Nutrition Planner',
    description:
      'AI kitchen inventory and meal planning product. Tracks pantry stock, designs macro-balanced plans, and generates shopping lists.',
    tags: ['Nutrition AI', 'Meal Planning', 'Fitness Optimisation'],
    quote:
      'Users report saving an average of £60 per month on groceries while hitting their nutrition targets more consistently than before.',
    reference: 'Founder, Fitness & Nutrition App',
  },
]
