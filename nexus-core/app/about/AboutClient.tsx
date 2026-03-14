"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye, History, CheckCircle2 } from "lucide-react";

export default function AboutClient() {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-violet-100 selection:text-violet-900 pb-16">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-50/50 rounded-bl-full -z-10 blur-3xl"></div>
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-xl border border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide mb-6"
          >
            Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tight font-display mb-6 text-slate-900"
          >
            Building the Future of <br className="hidden md:block" />
            <span className="text-brand-primary">Enterprise IT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Learn our mission, values, and commitment to delivering reliable IT solutions that support business growth and digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-6 lg:px-12 py-16 max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Our Team"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-violet-900/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-6">
                <div className="text-5xl font-display font-medium text-brand-primary">10+</div>
                <div>
                  <div className="text-lg font-medium text-slate-900">Years of Excellence</div>
                  <div className="text-slate-500">Delivering global IT standards</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-6 font-display text-slate-900">
              Dedicated to delivering <span className="text-brand-primary">enterprise-grade</span> IT support
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We are dedicated to delivering enterprise-grade IT support and network solutions that uphold global standards of excellence. Through strong partnerships with leading technology providers such as Cisco, Juniper and Dell, we deliver reliable, scalable, and future-ready solutions.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Streamline business operations",
                "Embrace technological innovation",
                "Achieve sustainable growth",
                "Ensure long-term digital success"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-primary text-white font-medium hover:bg-brand-primary-hover transition-colors shadow-brand gap-2">
              Get Started Today <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, History */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-none">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-medium font-display mb-6 text-slate-900">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide our approach to technology and client success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To deliver enterprise-grade IT support and network solutions built on global standards of excellence. We strive to empower businesses with reliable, secure, and scalable technologies."
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "We envision becoming a trusted global leader in IT services by continuously innovating with partners like Cisco, Juniper and Dell to provide future-ready solutions that drive growth."
              },
              {
                icon: History,
                title: "Our History",
                desc: "With a strong foundation in IT and networking, we have built long-standing expertise in delivering technology-driven solutions. Our history reflects a commitment to excellence and reliability."
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-violet-100 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4 font-display text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners CTA */}
      <section className="container mx-auto px-6 lg:px-12 py-16 max-w-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-dark rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-violet-900/20"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark-hover to-brand-dark/40"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 font-display leading-tight">
              Need Global-Standard IT Support You Can Rely On?
            </h2>
            <p className="text-violet-200 text-xl mb-12 leading-relaxed">
              Delivering enterprise-grade IT support with global standards of excellence. With trusted partners like Cisco, Juniper and Dell, we ensure your business stays reliable, scalable, and future-ready.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="px-10 py-4 rounded-xl bg-brand-primary text-white font-medium hover:bg-brand-primary-hover transition-colors w-full sm:w-auto text-lg shadow-brand">
                Make an Appointment
              </Link>
              <a href="tel:9872330000" className="px-10 py-4 rounded-xl border-2 border-violet-400/30 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-3 text-lg">
                Call 987 233 0000
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
