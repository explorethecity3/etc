import Image from 'next/image'
import Link from 'next/link'
import AdSense from '@/components/AdSense'
import blogs from '@/data/blogs.json'
import { FaClock, FaUser, FaCalendar, FaTag } from 'react-icons/fa'

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${blog.title} | Explore The City Blog`,
    description: blog.excerpt,
    keywords: blog.tags.join(', '),
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
    },
  }
}

export default function BlogPost({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <Link href="/blog" className="text-primary hover:underline">
          View All Posts
        </Link>
      </div>
    )
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogs
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm mb-4">
                {blog.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {blog.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-white text-sm">
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center">
                  <FaCalendar className="mr-2" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            {' / '}
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            {' / '}
            <span className="text-gray-800">{blog.title}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Excerpt */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-lg text-gray-700 italic">{blog.excerpt}</p>
            </div>

            {/* AdSense */}
            {/* <AdSense slot="4444444444" /> */}

            {/* Blog Content */}
            <article className="prose prose-lg max-w-none">
              {blog.content.map((section, index) => {
                if (section.type === 'heading') {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      {section.text}
                    </h2>
                  )
                }
                if (section.type === 'paragraph') {
                  return (
                    <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                      {section.text}
                    </p>
                  )
                }
                return null
              })}
            </article>

            {/* AdSense */}
            {/* <div className="my-8">
              <AdSense slot="5555555555" />
            </div> */}

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center flex-wrap gap-2">
                <FaTag className="text-gray-600" />
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">About the Author</h3>
              <p className="text-gray-700">
                <strong>{blog.author}</strong> is a passionate travel writer who loves
                exploring cities and sharing authentic experiences with fellow travelers.
              </p>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full">
                        <div className="p-6">
                          <span className="text-xs text-primary font-semibold">
                            {post.category}
                          </span>
                          <h4 className="text-lg font-bold text-gray-800 mt-2 mb-3">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* AdSense Sidebar */}
            {/* <AdSense slot="6666666666" format="vertical" /> */}

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
              <div className="space-y-2">
                {['Travel Guide', 'Budget Travel', 'Food & Culture', 'Weekend Trips', 'Cultural Travel', 'Festivals'].map((cat) => (
                  <Link
                    key={cat}
                    href={`/blog?category=${cat}`}
                    className="block text-gray-700 hover:text-primary hover:translate-x-2 transition-all"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
