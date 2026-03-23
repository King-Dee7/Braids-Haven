import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Reusable per-page meta tag component.
 * Handles title, meta description, OG tags, and Twitter cards.
 * 
 * UPDATE: Replace "https://braidshaven.fi" with your real domain after deployment.
 */
const SITE_URL = 'https://braidshaven.fi';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

const PageMeta = ({ 
  title, 
  description, 
  path = '/', 
  image = DEFAULT_IMAGE,
  type = 'website'
}) => {
  const fullUrl = `${SITE_URL}${path}`;
  const fullTitle = `${title} | Braids Haven`;

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_FI" />
      <meta property="og:site_name" content="Braids Haven" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="geo.region" content="FI-18" />
      <meta name="geo.placename" content="Helsinki" />
    </Helmet>
  );
};

export default PageMeta;
