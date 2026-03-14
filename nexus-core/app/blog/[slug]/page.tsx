import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};

    return {
        title: `${post.title} | NexusCore IT Blog`,
        description: post.excerpt,
        keywords: [post.targetKeyword, "IT support Bangalore", "managed IT services India"],
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
            <article className="container mx-auto px-6 lg:px-12 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-brand-primary transition-colors mb-12">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Blog
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-4 mb-6 text-xs font-semibold text-violet-600 uppercase tracking-widest">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>{post.targetKeyword}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 font-display leading-[1.1]">
                        {post.title}
                    </h1>
                </header>

                <div
                    className="prose prose-lg max-w-none text-slate-600 leading-relaxed 
          prose-headings:text-slate-900 prose-headings:font-display prose-headings:font-medium
          prose-strong:text-slate-900 prose-strong:font-bold
          prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline
          prose-ul:list-disc prose-ul:pl-6"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-16 border-t border-slate-100">
                    <div className="bg-brand-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-3xl font-medium mb-4 font-display">Need assistance with your IT infrastructure?</h2>
                            <p className="text-indigo-100/80 mb-8 text-lg">
                                Our experts in Bangalore are ready to help you with WiFi surveys, Smart Hands services, and comprehensive IT support.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-dark font-bold rounded-xl hover:bg-slate-100 transition-colors">
                                Speak to an Expert
                            </Link>
                        </div>
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
