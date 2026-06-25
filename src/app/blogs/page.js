import BlogCard from "@/components/blog-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { BLOG_POSTS } from "@/constants/blog-data";
import { siteConfig } from "@/lib/site";

const blogDescription =
  "Articles and tutorials on React, Next.js, JavaScript, TypeScript and modern frontend development by Jasmin Bhesaniya.";

export const metadata = {
  title: "Blog",
  description: blogDescription,
  keywords: [
    "Jasmin Bhesaniya Blog",
    "Frontend Development Blog",
    "React Tutorials",
    "Next.js Guides",
    "JavaScript Articles",
    "TypeScript",
    "Web Development",
  ],
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/blogs`,
    title: `Blog | ${siteConfig.name}`,
    description: blogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${siteConfig.name}`,
    description: blogDescription,
  },
};

export default function BlogPage() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/blogs/#blog`,
    url: `${siteConfig.url}/blogs`,
    name: `${siteConfig.name} — Blog`,
    description: blogDescription,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    blogPost: BLOG_POSTS.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.description,
      url: blog.link,
      ...(blog.date && /^\d{4}$/.test(String(blog.date))
        ? { datePublished: `${blog.date}-01-01` }
        : {}),
      keywords: blog.category,
      author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    })),
  };

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800 transition-colors duration-300 dark:bg-neutral-900 dark:text-neutral-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16 space-y-4">
            <h1>
              <span
                className="block text-4xl sm:text-5xl lg:text-7xl font-bold animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="gradient-text">My Blogs</span>
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10">
              Sharing my thoughts, experiences, and knowledge about frontend development,
              React ecosystem, and software engineering best practices.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {BLOG_POSTS.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
