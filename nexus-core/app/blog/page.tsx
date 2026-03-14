import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | NexusCore IT Solutions Bangalore",
    description: "Read our latest articles on IT Smart Hands, WiFi surveys, and managed IT services in India.",
};

export default function BlogPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6 lg:px-12 max-w-none">
                <header className="mb-16 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 font-display">Insights & Resources</h1>
                    <p className="text-slate-600 text-lg">
                        Expert advice on IT infrastructure, network design, and managed services for businesses in Bangalore and across APAC.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="flex items-center gap-4 mb-4 text-xs font-semibold text-violet-600 uppercase tracking-widest">
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span>{post.targetKeyword}</span>
                            </div>
                            <h2 className="text-2xl font-medium mb-4 group-hover:text-brand-primary transition-colors font-display">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                                {post.excerpt}
                            </p>
                            <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                                Read Full Article
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
