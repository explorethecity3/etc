import Link from 'next/link'
import AdSense from '@/components/AdSense'
import blogs from '@/data/blogs.json'

export async function generateMetadata({ searchParams }) {
  const params = await searchParams
  const category = params?.category

  if (category) {
    return {
      title: `${category} - Travel Blog | Explore The City`,
      description: `Explore ${category.toLowerCase()} articles, stories, and guides. Discover practical tips and insights for your travel adventures in India.`,
      keywords: `${category.toLowerCase()}, travel blog, travel stories, india travel, city guides`,
      alternates: {
        canonical: `https://www.explorethecity.in/blog?category=${encodeURIComponent(category)}`,
      },
    }
  }

  return {
    title: 'Travel Blog - Stories, Tips & Guides | Explore The City',
    description: 'Read inspiring travel stories, practical tips, and comprehensive guides for exploring cities across India. Learn from experienced travelers.',
    keywords: 'travel blog, travel stories, travel tips, india travel, city guides',
    alternates: {
      canonical: 'https://www.explorethecity.in/blog',
    },
  }
}

export default async function BlogPage({ searchParams }) {
  const params = await searchParams
  const selectedCategory = params?.category

  // Get all unique categories
  const categories = [...new Set(blogs.map((blog) => blog.category))]

  // Filter blogs by category if one is selected
  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            {selectedCategory ? `${selectedCategory}` : 'Travel Stories & Guides'}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {selectedCategory
              ? `Explore our collection of ${selectedCategory.toLowerCase()} articles and guides`
              : 'Discover inspiring stories, practical tips, and insider knowledge from fellow travelers'}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className={`px-6 py-2 rounded-full font-semibold transition ${
                !selectedCategory
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Posts
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container-custom">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary font-semibold">
                        {blog.category}
                      </span>
                      <span className="text-xs text-gray-500">{blog.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t mt-auto">
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* AdSense */}
      {/* <div className="container-custom">
        <AdSense slot="8888888888" format="horizontal" />
      </div> */}
    </div>
  )
}
