import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = 'https://shiftaitech.com'
const BRAND = 'Shift AI Tech'
const DEFAULT_DESC =
  'Shift AI Tech is a UK AI product company. We build, own, and operate AI products including BioSense, Braid, and Deep Space Learning, with NVIDIA-backed model training.'

const ROUTES = {
  '/': {
    title: 'Shift AI Tech · AI Products We Own & Ship',
    description: DEFAULT_DESC,
  },
  '/websites': {
    title: 'AI Websites That Rank & Convert | Shift AI Tech',
    description:
      'Shift AI Tech designs, builds, and hosts bespoke websites with SEO foundations. Fixed price. Fast delivery. United Kingdom.',
  },
  '/our-story': {
    title: 'Our Story · Shift AI Tech',
    description:
      'How Shift AI Tech funded Bitcoin prediction models, then cut the same rebuild by 82% with AI tooling. Now a UK AI product company.',
  },
  '/partners': {
    title: 'Specialist & Infrastructure Partners · Shift AI Tech',
    description:
      'Shift works with specialist AI partners including RAMDVG, and infrastructure partners including Amazon Web Services (AWS Activate).',
  },
  '/team': {
    title: 'Team · Shift AI Tech',
    description: 'Meet the founder-led team behind Shift AI Tech, the UK AI product company.',
  },
  '/blog': {
    title: 'Insights · Shift AI Tech',
    description: 'AI product insights from Shift AI Tech: models, training, and shipping products that work.',
  },
  '/onboarding': {
    title: 'Partner with Shift AI Tech',
    description: 'Talk products, partnerships, and how Shift AI Tech ships AI in market.',
  },
}

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: BRAND,
  legalName: 'Shift AI Technology Ltd',
  alternateName: ['Shift AI Technology', 'ShiftAI Tech', 'Shift AI Tech UK'],
  url: SITE,
  logo: `${SITE}/shift-logo-new.png`,
  email: 'partnerships@shiftaitech.com',
  description:
    'Shift AI Tech (Shift AI Technology Ltd, company 17159725) is a UK AI product company that builds, owns, and operates AI products including BioSense, Braid, and Deep Space Learning. Not Shift Technology (insurance AI), not Shift AI at shiftai.co.uk (automotive), and not other unrelated Shift AI brands.',
  foundingDate: '2024',
  identifier: {
    '@type': 'PropertyValue',
    name: 'Companies House number',
    value: '17159725',
    url: 'https://find-and-update.company-information.service.gov.uk/company/17159725',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 14, The Maltings Industrial Estate, Hall Road',
    addressLocality: 'Southminster',
    addressRegion: 'Essex',
    postalCode: 'CM0 7EQ',
    addressCountry: 'GB',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'partnerships@shiftaitech.com',
      areaServed: 'GB',
      availableLanguage: ['English'],
    },
  ],
  sameAs: [
    'https://find-and-update.company-information.service.gov.uk/company/17159725',
  ],
  knowsAbout: [
    'Artificial intelligence',
    'AI product development',
    'Model training',
    'NVIDIA GPUs',
    'Health intelligence',
    'AML compliance AI',
    'AI learning platforms',
    'RAG pipelines',
    'AI agents',
  ],
  slogan: 'AI products we own, train, and ship.',
  disambiguatingDescription:
    'Independent UK AI product company at shiftaitech.com. Distinct from Shift Technology, shiftai.co.uk, and other Shift AI brands.',
}

const WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  name: BRAND,
  url: SITE,
  description: DEFAULT_DESC,
  publisher: { '@id': `${SITE}/#organization` },
  inLanguage: 'en-GB',
}

const PRODUCT_CATALOG = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${SITE}/#products`,
  name: 'Shift AI Tech products',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'SoftwareApplication',
        name: 'BioSense',
        url: 'https://bio-sense.ai/',
        applicationCategory: 'HealthApplication',
        description: 'Personal health intelligence from blood panels and wearables.',
        provider: { '@id': `${SITE}/#organization` },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'SoftwareApplication',
        name: 'Braid',
        url: 'https://usebraid.ai/',
        applicationCategory: 'BusinessApplication',
        description: 'AI AML and risk assessment product for regulated firms.',
        provider: { '@id': `${SITE}/#organization` },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'SoftwareApplication',
        name: 'Deep Space Learning',
        applicationCategory: 'EducationalApplication',
        description: 'AI-avatar course platform for professional training.',
        provider: { '@id': `${SITE}/#organization` },
      },
    },
  ],
}

const FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE}/#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Shift AI Tech do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shift AI Tech is a UK AI product company. We build, own, and operate AI products including BioSense, Braid, and Deep Space Learning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Shift AI Tech the same as Shift Technology or other Shift AI companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Shift AI Tech is an independent UK product company at shiftaitech.com. It is not Shift Technology (insurance AI) or Shift AI at shiftai.co.uk (automotive tools).',
      },
    },
    {
      '@type': 'Question',
      name: 'What products does Shift AI Tech ship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BioSense for personal health intelligence, Braid for AML and risk assessments, and Deep Space Learning for AI-delivered professional training.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Shift AI Tech train its own models?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Shift trains and runs models on NVIDIA DGX and cloud GPUs as part of shipping and scaling its product stack.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Shift AI Tech based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shift AI Tech is a founder-led AI product company based in the United Kingdom.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I partner with Shift AI Tech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Email partnerships@shiftaitech.com or jack@shiftaitech.com, or start at https://shiftaitech.com/onboarding.',
      },
    },
  ],
}

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
    const page = ROUTES[path] || {
      title: `${BRAND} · AI Product Company UK`,
      description: DEFAULT_DESC,
    }
    const url = `${SITE}${path === '/' ? '/' : path}`

    document.title = page.title
    upsertMeta('name', 'description', page.description)
    upsertMeta('name', 'author', BRAND)
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', BRAND)
    upsertMeta('property', 'og:title', page.title)
    upsertMeta('property', 'og:description', page.description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', `${SITE}/shift-logo-new.png`)
    upsertMeta('property', 'og:locale', 'en_GB')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', page.title)
    upsertMeta('name', 'twitter:description', page.description)
    upsertMeta('name', 'twitter:image', `${SITE}/shift-logo-new.png`)
    upsertLink('canonical', url)

    const webpage = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': `${SITE}/#organization` },
      inLanguage: 'en-GB',
    }

    upsertJsonLd('ld-organization', ORGANIZATION)
    upsertJsonLd('ld-website', WEBSITE)
    upsertJsonLd('ld-service', PRODUCT_CATALOG)
    upsertJsonLd('ld-faq', FAQ)
    upsertJsonLd('ld-webpage', webpage)
  }, [pathname])

  return null
}
