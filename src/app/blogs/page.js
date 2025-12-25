import BlogCard from "@/components/blog-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { BLOG_POSTS } from "@/constants/blog-data";

export const metadata = {
    title: "Blog | Jasmin Bhesaniya - Frontend Developer",
    description:
        "Read my latest articles on React, Next.js, JavaScript, and modern web development. Insights, tutorials, and best practices.",
    keywords: [
        "Jasmin Bhesaniya Blog",
        "Frontend Development Blog",
        "React Tutorials",
        "Next.js Guides",
        "JavaScript Articles",
        "Web Development",
    ],
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-bg text-text transition-colors duration-300">
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
