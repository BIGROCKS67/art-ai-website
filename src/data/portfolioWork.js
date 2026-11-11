// Portfolio content. Codes match the printed Shift catalogue (shift-sales-brief),
// so a buyer holding the PDF can find the same build here.

export const results = [
  {
    name: 'Key Partnership Recruitment',
    what: 'Recruitment agency, Stony Stratford',
    url: 'https://ourkeypartnership.co.uk',
    lines: [
      'First in Google’s Businesses box for “recruitment stony stratford”, rated 5.0 from 47 reviews.',
      'Ask Google’s AI for the best recruitment agency in Stony Stratford and it names them first.',
      'Before our rebuild, search engines got an error from every page of their site.',
    ],
    shots: [
      { src: '/proof/kp-places-top.jpg', w: 468, h: 278, label: 'Google: “recruitment stony stratford”', alt: 'Google Businesses box with Key Partnership Recruitment first, 5.0 from 47 reviews' },
      { src: '/proof/kp-ai.jpg', w: 590, h: 230, label: 'Google’s AI: “best recruitment agency in Stony Stratford”', alt: 'Google AI Mode naming Key Partnership Recruitment as the highest-rated local agency' },
    ],
    date: 'Searched 4 November 2026',
  },
  {
    name: 'Stone Bathrooms',
    what: 'Bathroom installer, Milton Keynes',
    url: 'https://stonebathrooms.uk',
    lines: [
      'First in Google’s map results when you search from Milton Keynes, rated 5.0.',
      'Google’s AI describes the firm using the words from the site we built.',
      'We set up their Google Business Profile from scratch alongside the site.',
    ],
    shots: [
      { src: '/proof/g-places.jpg', w: 650, h: 165, label: 'Google Maps, searched from Milton Keynes', alt: 'Stone Bathrooms first in Google map results, 5.0 stars' },
      { src: '/proof/g-ai.jpg', w: 1270, h: 230, label: 'Google’s AI Overview', alt: 'Google AI Overview describing Stone Bathrooms and the counties they cover' },
    ],
    date: 'Searched November 2026',
  },
]

export const systems = [
  {
    code: 'A01',
    title: 'Tender estimating for trade contractors',
    status: 'Live, invite-only',
    built: 'November 2026',
    video: '/builds/A01-tender-estimating',
    body: 'The estimator drops in the whole tender pack. The app finds the pages that matter, pulls out the scope, prices every line from the firm’s own price book and labour times, and lists the questions to ask the client. AI reads the documents; plain code does every sum, so each figure can be checked line by line.',
    for: 'Built for a commercial heating contractor',
  },
  {
    code: 'A02',
    title: 'Anti-money-laundering checks for accountants',
    status: 'Live, white-labelled for a CRM provider',
    built: 'March 2026',
    video: '/builds/A02-aml-checks',
    body: 'Every UK accountant has to risk-assess new clients. The firm enters a company or a person, and the platform checks Companies House, directors and owners, UK sanctions, politically exposed persons and the press, then writes a 13-section report with a risk rating.',
    for: 'UK and EU data only',
  },
  {
    code: 'C03',
    title: 'Operating system for a group of five businesses',
    status: 'Built and in use',
    built: 'May 2026',
    video: '/builds/C03-operating-system',
    body: 'One owner runs a pilates studio, studio hire, chair rental, holiday lets and a barbershop from one admin system. Bookings sync every night from the booking apps and Airbnb, with occupancy, lost revenue per room, invoices and Stripe payment links in one place.',
    for: 'East Sussex',
  },
  {
    code: 'C02',
    title: 'Back-office portals',
    status: 'Demo with sample data',
    built: 'May 2026',
    video: '/builds/C02-back-office-portals',
    body: 'Four portals, each replacing a spreadsheet and a folder of emails: HR with leave and sickness approvals, accounts with bank reconciliation and payroll, mortgages from lead to commission, and conveyancing with every sale by stage.',
    for: 'Made for Dubai firms, so figures show in AED',
  },
  {
    code: 'A04',
    title: 'Cash-flow planner for financial advisers',
    status: 'Built',
    built: 'January 2026',
    video: '/builds/A04-cash-flow-planner',
    body: 'It models a client’s plan against today’s market prices and UK tax wrappers, then answers the two questions clients ask: how fragile is my plan, and is now a bad time to retire?',
    for: 'UK tax wrappers',
  },
]

export const moreSystems = [
  { code: 'C01', title: 'Sales CRM for agents and brokers', line: 'Website and portal enquiries land in the pipeline on their own, with a morning list of follow-ups due.', status: 'Demo with sample data' },
  { code: 'C04', title: 'Practice system for an accountancy firm', line: 'A health score for every client and plain-English warnings, working alongside Xero.', status: 'Demo with sample data' },
  { code: 'C05', title: 'Cold-calling lead engine', line: 'Imports and scores lead lists; each caller presses one button to get the next business to ring.', status: 'In use, including by our own callers' },
  { code: 'C06', title: 'Sales and delivery platform', line: 'Follows each client from lead to sale, onboarding, delivery, retainer and renewal.', status: 'Built for a software company' },
  { code: 'A03', title: 'Personal health platform', line: 'Blood results, wearables and daily check-ins, explained in plain English.', status: 'Live, private beta' },
  { code: 'T01', title: 'AI trading platform', line: 'Research lab, bar-by-bar backtester and paper trading on live market feeds.', status: 'Running on paper' },
]

// Screenshots taken from the live sites. Newest first.
export const siteShots = [
  { name: 'Stone Bathrooms', sector: 'Bathroom installer, Milton Keynes', img: '/websites/stone-bathrooms.jpg', url: 'https://stonebathrooms.uk' },
  { name: 'Key Partnership Recruitment', sector: 'Recruitment, Stony Stratford', img: '/websites/key-partnership.jpg', url: 'https://ourkeypartnership.co.uk' },
  { name: 'DavisGT Engineering', sector: 'Battery safety consultancy', img: '/websites/davisgt.jpg', url: 'https://davisgtengineering.co.uk' },
  { name: 'Sam’s Pet Services', sector: 'Pet care, Brackley', img: '/websites/sams-pet-services.jpg', url: 'https://samspetservices.com' },
  { name: 'Peters Agricultural & Groundworks', sector: 'Groundworks, Silverstone', img: '/websites/peters-agri.jpg', url: 'https://petersagri.co.uk' },
  { name: 'A&D Roofing & Construction', sector: 'Roofing, Bicester', img: '/websites/ad-roofing.jpg', url: 'https://aanddroofingsolutions.com' },
  { name: 'Ground Six', sector: 'Building and landscaping', img: '/websites/ground-six.jpg', url: 'https://groundsix.co.uk' },
  { name: 'The Red Cow', sector: 'Village pub, Chesterton', img: '/websites/red-cow.jpg', url: 'https://theredcowchesterton.co.uk' },
  { name: 'Mixa Restaurant', sector: 'Restaurant', img: '/websites/mixa.jpg', url: 'https://www.mixarestaurant.com' },
  { name: 'Ready4Refurb', sector: 'Property', img: '/websites/ready4refurb.jpg', url: 'https://ready4refurb.com' },
  { name: 'Scalpx Capital', sector: 'Finance', img: '/websites/scalpx.jpg', url: 'https://www.scalpxcapital.com' },
]
