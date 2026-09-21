/** Quick-win website build + host offer: shared by landing page & flyer. */

export const PACKAGE_PRICE = {
  gbp: { amount: 500, label: '£500', currency: 'GBP' },
  aed: { amount: 2500, label: 'AED 2,500', currency: 'AED' },
  usd: { amount: 650, label: '$650', currency: 'USD' },
}

export const HOURLY_RATE = {
  gbp: { amount: 50, label: '£50/hr', currency: 'GBP' },
  aed: { amount: 250, label: 'AED 250/hr', currency: 'AED' },
  usd: { amount: 65, label: '$65/hr', currency: 'USD' },
}

/** Fixed package = brochure / get-started sites */
export const PACKAGE_LABEL = 'Brochure website + hosting'

export const PACKAGE_NOTE =
  'Fixed package pricing is for brochure websites that get a business up and running online. eCommerce and AI business modules are also an area of expertise and are available subject to a free consultation.'

export const CONSULTATION_NOTE =
  'eCommerce builds and AI business modules: free consultation. Scoped and priced after we understand the brief.'

export const INCLUDED = [
  {
    title: 'Bespoke Design',
    desc: 'Built from scratch around your brand. No templates.',
  },
  {
    title: 'Mobile-First',
    desc: 'Designed for phones first, where most of your traffic lands.',
  },
  {
    title: 'Copywriting',
    desc: 'Clear, persuasive content that speaks to your customers.',
  },
  {
    title: 'SEO Foundations',
    desc: 'Google Business Profile, meta tags, and fast indexing.',
  },
  {
    title: 'Hosting Included',
    desc: 'Live hosting, SSL, and security updates in the package price.',
  },
  {
    title: 'Launch Support',
    desc: 'We get you live and stay available when you need help.',
  },
]

export const EXTRAS = [
  {
    title: 'eCommerce & AI modules',
    desc: 'Stores, CRM/API links, and AI business modules. Free consultation first, then scoped pricing.',
    badge: 'Free consult',
  },
  {
    title: 'Extra development',
    desc: 'Changes, new pages, and custom features billed hourly.',
    priceKey: 'hourly',
  },
]

/** Featured six — keep these as the primary showcase */
export const CASE_STUDIES = [
  {
    name: 'The Red Cow',
    url: 'https://theredcowchesterton.co.uk',
    sector: 'Hospitality',
  },
  {
    name: 'Eagle AI Labs',
    url: 'https://www.eagleailabs.com',
    sector: 'Technology',
  },
  {
    name: 'Scalpx Capital',
    url: 'https://www.scalpxcapital.com',
    sector: 'Finance',
  },
  {
    name: 'Shift AI Tech',
    url: 'https://shiftaitech.com',
    sector: 'AI Products',
  },
  {
    name: 'Ready4Refurb',
    url: 'https://ready4refurb.com',
    sector: 'Property',
  },
  {
    name: 'Mixa Restaurant',
    url: 'https://www.mixarestaurant.com',
    sector: 'Hospitality',
  },
]

/**
 * Full completed / shipped list for sales confidence.
 * Featured six appear again here so the bottom list reads as a full portfolio.
 */
export const COMPLETED_SITES = [
  { name: 'The Red Cow', url: 'https://theredcowchesterton.co.uk', sector: 'Hospitality' },
  { name: 'Mixa Restaurant', url: 'https://www.mixarestaurant.com', sector: 'Hospitality' },
  { name: 'The Greyhound Inn', url: 'https://www.thegreyhoundinnbrackley.co.uk', sector: 'Hospitality' },
  { name: 'Wilf’s Kitchen', url: 'https://wilfs-kitchen.vercel.app', sector: 'Food & drink' },
  { name: 'Ready4Refurb', url: 'https://ready4refurb.com', sector: 'Property' },
  { name: 'A&D Roofing & Construction', url: 'https://aanddroofingsolutions.com', sector: 'Trades' },
  { name: 'LJ Brown UK', url: 'https://ljbrownukltd.co.uk', sector: 'Groundworks' },
  { name: 'LJ Plumbing & Heating', url: 'https://lj-plumbing-pi.vercel.app', sector: 'Trades' },
  { name: 'SMH Gas', url: 'https://smh-gas.vercel.app', sector: 'Trades' },
  { name: 'Syd Wells Gambian Project', url: 'https://sydwellscharity.com', sector: 'Charity' },
  { name: 'AP Creative', url: 'https://ap-creative.vercel.app', sector: 'Creative' },
  { name: 'Eagle AI Labs', url: 'https://www.eagleailabs.com', sector: 'Technology' },
  { name: 'Scalpx Capital', url: 'https://www.scalpxcapital.com', sector: 'Finance' },
  { name: 'SCALR', url: 'https://www.scalr.solutions', sector: 'Technology' },
  { name: 'NexDesk', url: 'https://nexdesk.app', sector: 'Technology' },
  { name: 'Shift AI Tech', url: 'https://shiftaitech.com', sector: 'AI Products' },
  { name: 'BioSense', url: 'https://bio-sense.ai', sector: 'Health' },
  { name: 'Braid', url: 'https://usebraid.ai', sector: 'Compliance' },
  { name: 'FibreCRM CRA', url: 'https://cra.fibrecrm.ai', sector: 'Compliance' },
  { name: 'AML Intelligence', url: 'https://aml.shiftaitech.com', sector: 'Compliance' },
  { name: 'Pitch Predict', url: 'https://pitchpredict.ai', sector: 'Sports AI' },
  { name: 'Zeus AI', url: 'https://zeusai.co.uk', sector: 'AI Products' },
  { name: 'HyperFlowX', url: 'https://hyperflowx.com', sector: 'Trading' },
  { name: 'FlowX Trade', url: 'https://flowx.trade', sector: 'Trading' },
  { name: 'AlgoX', url: 'https://algox.ai', sector: 'Trading' },
  { name: 'Ground Six', url: 'https://groundsix.vercel.app', sector: 'Technology' },
]

/** Sales partners and their referral codes. Add new partners here. */
export const REFERRAL_PARTNERS = {
  LEE: { code: 'LEE', name: 'Lee', region: 'Network' },
  MARTIN: { code: 'MARTIN', name: 'Martin', region: 'Network' },
  BAHRAIN: { code: 'BAHRAIN', name: 'Bahrain Partner', region: 'GCC' },
}

export const WEBSITES_PATH = '/websites'
export const FLYER_PATH = '/flyer/websites.html'
export const CONTACT_EMAIL = 'partnerships@shiftaitech.com'
export const SITE_URL = 'https://shiftaitech.com'
