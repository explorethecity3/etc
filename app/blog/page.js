import Link from 'next/link'
import AdSense from '@/components/AdSense'
import blogs from '@/data/blogs.json'

export const metadata = {
  title: 'Travel Blog - Stories, Tips & Guides | Explore The City',
  description: 'Read inspiring travel stories, practical tips, and comprehensive guides for exploring cities across India. Learn from experienced travelers.',
  keywords: 'travel blog, travel stories, travel tips, india travel, city guides',
}

export default function BlogPage() {
  // Get all unique categories
  const categories = [...new Set(blogs.map((blog) => blog.category))]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Travel Stories & Guides</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover inspiring stories, practical tips, and insider knowledge from fellow travelers
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-6 py-2 bg-primary text-white rounded-full font-semibold">
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
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
        </div>
      </section>

      {/* AdSense */}
      {/* <div className="container-custom">
        <AdSense slot="8888888888" format="horizontal" />
      </div> */}
    </div>
  )
}
