/**
 * Metadata Helper Functions
 * Generates metadata objects for Next.js 14 App Router pages
 */

const baseUrl = 'https://explorethecity.in';
const siteName = 'ExploreTheCity.in';

/**
 * Generate metadata for city pages
 */
export function generateCityMetadata(city) {
  const title = `${city.name} Travel Guide 2025 | Weekend Getaways & Solo Travel Tips`;
  const description = `Complete ${city.name} travel guide: solo female safety tips, 2-day itineraries, budget under ₹3000, hidden gems & weekend breaks. Updated 2025.`;
  const url = `${baseUrl}/cities/${city.slug}`;
  const image = city.image || `${baseUrl}/images/cities/${city.slug}.jpg`;

  return {
    title,
    description,
    keywords: [
      `${city.name} travel guide`,
      `${city.name} tourism`,
      `places to visit ${city.name}`,
      `${city.name} weekend getaway`,
      `solo travel ${city.name}`,
      `${city.name} budget travel`
    ].join(', '),
    authors: [{ name: 'ExploreTheCity Team' }],
    creator: 'ExploreTheCity',
    publisher: 'ExploreTheCity.in',
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${city.name} Travel Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@explorethecityin',
      site: '@explorethecityin',
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generate metadata for blog posts
 */
export function generateBlogMetadata(blog) {
  const title = `${blog.title} | ExploreTheCity Blog`;
  const description = blog.excerpt;
  const url = `${baseUrl}/blog/${blog.slug}`;
  const image = blog.image || `${baseUrl}/images/blog/${blog.slug}.jpg`;

  return {
    title,
    description,
    keywords: blog.tags.join(', '),
    authors: [{ name: blog.author }],
    creator: blog.author,
    publisher: 'ExploreTheCity.in',
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      publishedTime: blog.date,
      authors: [blog.author],
      tags: blog.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@explorethecityin',
      site: '@explorethecityin',
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generate metadata for homepage
 */
export function generateHomeMetadata() {
  const title = 'ExploreTheCity.in | Discover Amazing Cities Across India';
  const description = 'Complete travel guide to explore Indian cities: solo travel tips, weekend getaways, budget itineraries, hidden gems & cultural experiences. Plan your perfect city trip!';
  const url = baseUrl;
  const image = `${baseUrl}/images/og-home.jpg`;

  return {
    title,
    description,
    keywords: [
      'india city travel guide',
      'explore india cities',
      'weekend getaways india',
      'solo travel india',
      'budget travel india',
      'indian cities tourism',
      'city exploration guide'
    ].join(', '),
    authors: [{ name: 'ExploreTheCity Team' }],
    creator: 'ExploreTheCity',
    publisher: 'ExploreTheCity.in',
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'ExploreTheCity - Discover India',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@explorethecityin',
      site: '@explorethecityin',
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generate JSON-LD structured data for city
 */
export function generateCityStructuredData(city) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: city.name,
    description: city.description,
    image: city.image,
    url: `${baseUrl}/cities/${city.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressRegion: city.state,
      addressCountry: 'IN',
    },
    touristType: [
      'Solo Travelers',
      'Families',
      'Couples',
      'Budget Travelers',
      'Digital Nomads',
    ],
    ...(city.faqs && {
      mainEntity: city.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }),
  };
}

/**
 * Generate JSON-LD structured data for blog article
 */
export function generateBlogStructuredData(blog) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image,
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      '@type': 'Person',
      name: blog.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ExploreTheCity.in',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${blog.slug}`,
    },
    keywords: blog.tags.join(', '),
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbData(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}
