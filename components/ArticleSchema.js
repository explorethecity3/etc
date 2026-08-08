export default function ArticleSchema({ blog, url }) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image,
    datePublished: blog.date,
    dateModified: blog.lastUpdated || blog.date,
    author: {
      '@type': 'Organization',
      name: blog.author,
      url: 'https://www.explorethecity.in/authors/explore-the-city-editorial',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Explore The City',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.explorethecity.in/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: blog.tags?.join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
