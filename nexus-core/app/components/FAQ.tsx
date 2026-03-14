import React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqData = [
    {
        question: "What is IT Smart Hands?",
        answer: "IT Smart Hands is a service where certified engineers provide on‑site support for tasks like rack‑and‑stack, cabling, and configuration, allowing you to deploy hardware quickly without sending your own staff.",
    },
    {
        question: "How much does a WiFi site survey cost in Bangalore?",
        answer: "Pricing varies based on site size and complexity, but a typical professional WiFi survey in Bangalore starts around ₹25,000. Contact us for a detailed quote.",
    },
    {
        question: "Why choose a managed IT provider in India?",
        answer: "A managed IT provider offers 24/7 monitoring, proactive maintenance, and local expertise, ensuring reliable operations and cost‑effective support for your business.",
    },
    {
        question: "How do you handle Ekahau WiFi Surveys?",
        answer: "We use professional Ekahau Sidekick 2 tools for all our surveys, ensuring precise heatmaps, throughput analysis, and interference detection for enterprise-grade wireless networks.",
    },
    {
        question: "Do you offer 24/7 maintenance in remote locations?",
        answer: "Yes, our team provides 24/7 monitoring and support, including IT Smart Hands for remote branch offices across APAC, ensuring zero downtime for your critical services.",
    },
    {
        question: "Can help with Cloud Migration and IT consulting?",
        answer: "Absolutely. We offer end-to-end consulting for cloud infrastructure planning, data center migrations, and hardware deployments tailored to your business needs.",
    },
];

export default function FAQ() {
    return (
        <section className="container mx-auto px-6 lg:px-12 py-12 mb-12" id="faq">
            <div className="max-w-6xl mx-auto">
                <div className="text-left mb-12 max-w-2xl">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-widest mb-6">
                        FAQ
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 font-display text-slate-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        Find answers to common questions about our IT Smart Hands, WiFi surveys, and managed services in Bangalore and APAC.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                    {faqData.map((item, idx) => (
                        <details
                            key={idx}
                            className="group border-b border-slate-100 py-6 transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-violet-50 group-hover:text-violet-600 transition-colors">
                                        <HelpCircle className="w-5 h-5 flex-shrink-0" />
                                    </div>
                                    <span className="font-medium text-lg text-slate-900 leading-tight">
                                        {item.question}
                                    </span>
                                </div>
                                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="pt-4 pl-14">
                                <p className="text-slate-500 leading-relaxed text-base">
                                    {item.answer}
                                </p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>

            {/* JSON‑LD FAQ schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqData.map((item) => ({
                        "@type": "Question",
                        "name": item.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": item.answer,
                        },
                    })),
                }),
            }} />
        </section>
    );
}
