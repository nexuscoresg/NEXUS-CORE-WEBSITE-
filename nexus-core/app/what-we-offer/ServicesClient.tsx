"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  Wifi,
  Wrench,
  ShieldCheck,
  Cloud,
  Cpu,
  Truck,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    id: "wifi",
    title: "WiFi Survey",
    desc: "Consultation, planning and designing and setup Office WiFi network with Ekahau wifi tool.",
    icon: Wifi,
    colSpan: "md:col-span-2 lg:col-span-4",
    rowSpan: "md:row-span-2",
    bg: "bg-white",
    accent: "text-violet-500",
    content: (
      <div className="mt-8 flex flex-col h-full justify-between">
        <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl">
          We provide expert consultation, planning, and design for office WiFi networks in <strong>Bangalore</strong> using the <strong>Ekahau WiFi tool</strong>. Our surveys ensure optimal coverage and peak performance for your enterprise environment.
        </p>
        <div className="relative h-56 w-full rounded-2xl overflow-hidden mt-auto">
          <Image src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" alt="Enterprise WiFi Survey Bangalore" fill className="object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <span className="font-medium">Ekahau Certified Experts</span>
            <Wifi className="w-5 h-5" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: "smart-hands",
    title: "Professional IT Smart Hand Services",
    desc: "Blend of experienced, specialized and certified technicians.",
    icon: Wrench,
    colSpan: "md:col-span-2 lg:col-span-4",
    rowSpan: "md:row-span-2",
    bg: "bg-slate-50",
    accent: "text-emerald-500",
    content: (
      <div className="mt-8 flex flex-col h-full">
        <p className="text-slate-600 leading-relaxed mb-8">
          Our <strong>Smart Hands Service in Bangalore</strong> provides specialized and certified technicians to perform critical field-level hardware and support tasks for your communication and networking equipment.
        </p>
        <ul className="space-y-4 mt-auto bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          {['Field-level hardware support', 'Communication & networking setup', 'Certified technicians in Bangalore'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
  {
    id: "maintenance",
    title: "Maintenance and Support",
    desc: "Solutions available across APAC, including remote locations.",
    icon: ShieldCheck,
    colSpan: "md:col-span-2 lg:col-span-3",
    rowSpan: "md:row-span-2",
    bg: "bg-slate-50",
    accent: "text-amber-500",
    content: (
      <div className="mt-8 flex flex-col h-full">
        <p className="text-slate-600 leading-relaxed mb-8">
          We provide solutions available across APAC, including standard as well as remote and hard to access locations, with Service Level Agreements up to 24x7x2 and 24x7x4.
        </p>
        <div className="mt-auto bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-slate-600 font-medium">SLA Options</span>
            <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-1 rounded">24/7 Coverage</span>
          </div>
          <div className="space-y-3">
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '95%' }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-amber-400"
              ></motion.div>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80%' }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-full bg-amber-300"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "cloud",
    title: "Data Center & Cloud",
    desc: "Full range of Cloud & Data services.",
    icon: Cloud,
    colSpan: "md:col-span-2 lg:col-span-5",
    rowSpan: "md:row-span-2",
    bg: "bg-white",
    accent: "text-blue-500",
    content: (
      <div className="mt-8 flex flex-col lg:flex-row gap-8 h-full">
        <div className="flex-1 flex flex-col">
          <p className="text-slate-600 leading-relaxed mb-8">
            Offers a full range of Cloud & Data services, from infrastructure assessment, Planning and design along with the deployment & installation with highly experienced and skilled resources.
          </p>
          <div className="mt-auto">
            <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors bg-blue-50 px-4 py-2 rounded-lg">
              Start Cloud Migration <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="flex-1 relative min-h-[200px] rounded-2xl overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" alt="Data Center" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    )
  },
  {
    id: "iot",
    title: "Enterprise IoT Solutions",
    desc: "Planning, delivery, integration and support of IoT solutions.",
    icon: Cpu,
    colSpan: "md:col-span-2 lg:col-span-4",
    rowSpan: "md:row-span-2",
    bg: "bg-slate-50",
    accent: "text-purple-500",
    content: (
      <div className="mt-8 flex flex-col h-full">
        <p className="text-slate-600 leading-relaxed mb-8">
          We help Clients for planning, delivery, integration and support of IoT solutions across the globe, We cater medium to large-sized projects. From telecommunications companies, IoT technology vendors, enterprises.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-auto">
          <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-display text-slate-900 mb-1 font-medium">Global</span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Reach</span>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-display text-slate-900 mb-1 font-medium">Scale</span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Enterprise</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "logistics",
    title: "Distribution & Logistics",
    desc: "Deliver Network equipment worldwide.",
    icon: Truck,
    colSpan: "md:col-span-2 lg:col-span-4",
    rowSpan: "md:row-span-2",
    bg: "bg-white",
    accent: "text-rose-500",
    content: (
      <div className="mt-8 flex flex-col h-full">
        <p className="text-slate-600 leading-relaxed mb-8">
          We deliver Network equipment worldwide offer a full line of most network equipment vendors, cost effectively and globally, we provide reverse and forward logistics as per Client requirement along with EOR and IOR services.
        </p>
        <div className="mt-auto relative h-32 rounded-xl overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" alt="Logistics" fill className="object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-slate-900/40"></div>
          <div className="absolute inset-0 flex items-center justify-center gap-4 p-4">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div className="text-white">
              <div className="text-lg font-medium">Worldwide Delivery</div>
              <div className="text-sm text-white/80">EOR & IOR Services</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function ServicesClient() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-violet-100 selection:text-violet-900 min-h-screen pb-32">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-violet-200/50 rounded-full blur-[100px] -z-10"></div>
        <div className="container mx-auto px-6 lg:px-12 max-w-none text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 rounded-xl border border-violet-200 bg-violet-100 text-violet-700 text-sm font-medium tracking-wide mb-6">
              Our Services
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight font-display mb-6 text-slate-900">
              Advanced IT Services <br />
              <span className="text-brand-primary">for Modern Businesses</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Nexus Core delivers advanced, enterprise-grade IT services in <strong>Bangalore</strong> and across APAC, ensuring secure and dependable performance for modern businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-6">
        <div className="container mx-auto px-6 lg:px-12 max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-6 auto-rows-[minmax(180px,auto)]">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${service.colSpan} ${service.rowSpan} ${service.bg} rounded-[2rem] p-8 md:p-10 border border-slate-200 hover:border-violet-200 transition-colors flex flex-col overflow-hidden relative group shadow-sm hover:shadow-xl`}
                >
                  {/* Subtle gradient glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-slate-100 shadow-sm ${service.accent}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-medium font-display mb-2 text-slate-900">
                      {service.title}
                    </h3>

                    {service.content}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 px-6">
        <div className="container mx-auto px-6 lg:px-12 max-w-none">
          <div className="bg-gradient-to-br from-brand-dark via-brand-dark-hover to-brand-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-violet-900/30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              {/* Pill badge */}
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-wide mb-8 bg-white/5 backdrop-blur-sm text-white">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-5xl font-medium font-display mb-6 text-white">Ready to upgrade your infrastructure?</h2>
              <p className="text-violet-200 text-lg mb-10">
                Let&apos;s discuss how our services can align with your long-term growth strategies.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-brand-dark font-medium hover:bg-slate-100 transition-colors gap-2">
                Contact Our Experts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
