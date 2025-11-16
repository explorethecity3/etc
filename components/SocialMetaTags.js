'use client'

/**
 * Social Meta Tags Component
 * Optimizes content for sharing on Facebook, Twitter, LinkedIn, WhatsApp, and other platforms
 *
 * Usage:
 * <SocialMetaTags
 *   title="Mumbai Travel Guide 2025"
 *   description="Complete Mumbai travel guide with solo travel tips"
 *   image="https://explorethecity.in/images/mumbai.jpg"
 *   url="https://explorethecity.in/cities/mumbai"
 *   type="article"
 * />
 */

export default function SocialMetaTags({
  title,
  description,
  image,
  url,
  type = 'website', // website, article, profile
  author = 'ExploreTheCity Team',
  publishedTime,
  modifiedTime,
  tags = [],
  siteName = 'ExploreTheCity.in'
}) {
  // Construct full URLs if relative paths provided
  const baseUrl = 'https://explorethecity.in';
  const fullUrl = url?.startsWith('http') ? url : `${baseUrl}${url}`;
  const fullImage = image?.startsWith('http') ? image : `${baseUrl}${image}`;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Article specific tags */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@explorethecityin" />
      <meta name="twitter:site" content="@explorethecityin" />

      {/* Additional SEO Tags */}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={fullUrl} />

      {/* WhatsApp & Telegram */}
      <meta property="og:image:alt" content={title} />

      {/* Pinterest */}
      <meta name="pinterest-rich-pin" content="true" />

      {/* LinkedIn */}
      <meta property="og:linkedin:owner" content="ExploreTheCity" />
    </>
  );
}
