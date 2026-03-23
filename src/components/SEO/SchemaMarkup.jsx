import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * LocalBusiness structured data for Google Rich Results.
 * UPDATE: Replace placeholder values with real business info before deploying.
 */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Braids Haven",
  "description": "Premium African braiding service in Helsinki & Espoo, Finland. Specializing in knotless braids, cornrows, passion twists, fulani braids, and senegalese twists.",
  "url": "https://braidshaven.fi",
  "image": "https://braidshaven.fi/logo.png",
  "telephone": "+358-XX-XXX-XXXX",   // TODO: Replace with real phone
  "email": "hello@braidshaven.fi",     // TODO: Replace with real email
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Helsinki",
    "addressRegion": "Uusimaa",
    "addressCountry": "FI"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "60.1699",     // Helsinki latitude
    "longitude": "24.9384"     // Helsinki longitude
  },
  "areaServed": [
    { "@type": "City", "name": "Helsinki" },
    { "@type": "City", "name": "Espoo" }
  ],
  "priceRange": "€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://instagram.com/braidshaven.fi",
    "https://facebook.com/braidshaven"
  ],
  "founder": {
    "@type": "Person",
    "name": "Abena"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Braiding Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Knotless Braids",
          "description": "Pain-free, lightweight braids with no knots at the root. Natural-looking and gentle on the scalp."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "120",
          "priceCurrency": "EUR",
          "valueAddedTaxIncluded": true
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cornrows / Feed-ins",
          "description": "Classic cornrow braids, including feed-in styles with seamless extensions."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "60",
          "priceCurrency": "EUR",
          "valueAddedTaxIncluded": true
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Passion Twists",
          "description": "Soft, bohemian-style twists using passion twist hair for a textured, natural look."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "140",
          "priceCurrency": "EUR",
          "valueAddedTaxIncluded": true
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fulani Braids",
          "description": "Traditional Fulani-inspired braids with intricate patterns, beads, and accessories."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "110",
          "priceCurrency": "EUR",
          "valueAddedTaxIncluded": true
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Senegalese Twists",
          "description": "Sleek, rope-like twists using Kanekalon or Toyokalon hair for a polished protective style."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "130",
          "priceCurrency": "EUR",
          "valueAddedTaxIncluded": true
        }
      }
    ]
  }
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Braids Haven",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "3",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Amara K." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Absolutely in love with my hair. The parts are so clean, and it didn't hurt at all. Best braider I've found since moving to Finland."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sofia M." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "She understood exactly what I wanted from a single reference photo. The atmosphere in the studio was so relaxing too."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Nia T." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "My go-to place now. Fast, professional, and my natural hair feels so healthy and protected after every visit."
    }
  ]
};

const SchemaMarkup = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(localBusinessSchema)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(reviewSchema)}
    </script>
  </Helmet>
);

export default SchemaMarkup;
