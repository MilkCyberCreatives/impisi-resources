// src/components/StructuredData.tsx
'use client'
import React from 'react'

type Org = {
  name: string
  url: string
  logo: string
  sameAs?: string[]
  telephone?: string
}

type Local = {
  name: string
  telephone?: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion?: string
    postalCode?: string
    addressCountry: string
  }
  geo?: { latitude: number; longitude: number }
}

type SiteSearch = {
  url: string
  target: string
  queryInput: string
}

export default function StructuredData({
  org,
  local,
  siteSearch,
}: {
  org?: Org
  local?: Local
  siteSearch?: SiteSearch
}) {
  const nodes: Record<string, unknown>[] = []

  if (org) {
    nodes.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: org.name,
      url: org.url,
      logo: org.logo,
      sameAs: org.sameAs,
      contactPoint: org.telephone
        ? [{ '@type': 'ContactPoint', telephone: org.telephone, contactType: 'customer service' }]
        : undefined,
    })
  }

  if (local) {
    nodes.push({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: local.name,
      telephone: local.telephone,
      address: { '@type': 'PostalAddress', ...local.address },
      geo: local.geo ? { '@type': 'GeoCoordinates', ...local.geo } : undefined,
    })
  }

  if (siteSearch) {
    nodes.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: siteSearch.url,
      potentialAction: {
        '@type': 'SearchAction',
        target: siteSearch.target, // e.g. https://impisiresources.com/?q={search_term_string}
        'query-input': siteSearch.queryInput, // "required name=search_term_string"
      },
    })
  }

  return (
    <>
      {nodes.map((n, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(n) }} />
      ))}
    </>
  )
}
