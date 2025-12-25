"use client";
import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";

const BlogCard = ({ blog, index }) => {
    return (
        <div
            className="group h-full"
            style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
            }}
        >
            <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full focus:outline-none"
            >
                <Card className="h-full py-0 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/20 hover:border-primary-500/50 bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                    {/* Blog Image - reduced height h-40 */}
                    {blog.image && (
                        <div className="relative w-full h-40 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10" />

                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden absolute inset-0 items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-400">
                                <span className="text-3xl">📝</span>
                            </div>

                            <div className="absolute top-3 right-3">
                                <span className="px-2 py-0.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-medium rounded-full border border-white/20">
                                    {blog.category}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Content - reduced padding p-5 */}
                    <div className="flex-1 p-5 flex flex-col">
                        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                            {blog.title}
                        </h3>

                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                            {blog.description}
                        </p>

                        {/* Footer without date */}
                        <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-700 flex items-center justify-end">
                            <span className="flex items-center space-x-1 text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200">
                                <span>Read More</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </span>
                        </div>
                    </div>
                </Card>
            </a>
        </div>
    );
};

export default BlogCard;
