"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import FAQ from "./components/FAQ";
import {
  Asterisk,
  ArrowRight,
  X
} from "lucide-react";

const testimonials = [
  {
    quote: <>Nexus Core <span className="font-bold text-slate-900">transformed our network infrastructure</span>. Their WiFi survey was incredibly detailed and the <span className="font-bold text-slate-900">implementation was flawless</span>.</>,
    name: "Sarah Jenkins",
    role: "CTO @ TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: <>The Smart Hands service is a <span className="font-bold text-slate-900">lifesaver</span>. We have <span className="font-bold text-slate-900">reliable support</span> across all our APAC offices now without needing full-time staff everywhere.</>,
    name: "David Chen",
    role: "IT Director @ GlobalCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: <><span className="font-bold text-slate-900">Outstanding consulting team</span>. They helped us migrate to the cloud <span className="font-bold text-slate-900">seamlessly with zero downtime</span>. Highly recommended.</>,
    name: "Amanda Ross",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: <><span className="font-bold text-slate-900">Highly responsive and professional</span>. Their 24/7 maintenance gives us <span className="font-bold text-slate-900">complete peace of mind</span> knowing our systems are monitored.</>,
    name: "Michael Chang",
    role: "CEO @ InnovateTech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: <>The <span className="font-bold text-slate-900">best IT partner</span> we&apos;ve worked with in Singapore. Truly <span className="font-bold text-slate-900">enterprise-grade service</span> with a personal touch.</>,
    name: "Priya Sharma",
    role: "Head of Infrastructure",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  }
];

const services = [
  {
    id: 1,
    title: "Consulting",
    shortDesc: "WiFi Surveys & Network Design with Ekahau tools.",
    fullDesc: "Our IT consulting services are designed to help businesses harness the full potential of technology. We work closely with you to understand your goals, challenges, and existing infrastructure, then craft a roadmap that aligns IT strategies with long-term growth.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Implementation",
    shortDesc: "IT Smart Hand Services by certified engineers.",
    fullDesc: "Deploying enterprise hardware across multiple locations can be a logistical nightmare. Our certified engineers act as your hands on the ground, handling everything from rack-and-stack to complex cabling and router configurations, ensuring your deployments are swift and secure.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Project Management",
    shortDesc: "24/7 Maintenance & Support across APAC, even in remote locations.",
    fullDesc: "This is why NexusCore has 24/7 support and proactive monitoring. As a leading IT consulting company Singapore, we promise responsive, real-world solutions that keep your operations running without interruptions.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "IT Support",
    shortDesc: "Data Center & Cloud hosting solutions from planning to deployment.",
    fullDesc: "When it comes to IT support, reliability is everything. Our dedicated team ensures that your systems remain secure, stable, and fully optimized around the clock. We offer proactive monitoring, rapid troubleshooting, and preventive maintenance.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
  }
];

const partners = [
  { name: 'Google Cloud', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
  { name: 'IBM', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Oracle', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'NVIDIA', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
  { name: 'HPE', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg' },
  { name: 'Cisco', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { name: 'Juniper', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Juniper_Networks_logo.svg' },
  { name: 'Dell', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
];

export default function HomeClient() {
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-violet-100 selection:text-violet-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 pt-6 md:pt-12 pb-16 max-w-none">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl relative"
          >
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] font-display">
              Powering Enterprises <br />
              with Expert IT <br />
              Solutions in Bangalore
            </h1>
            <Asterisk className="absolute -top-4 -right-12 w-16 h-16 text-violet-400 animate-spin-slow hidden md:block" style={{ animationDuration: '10s' }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="max-w-md pt-4"
          >
            <p className="text-slate-600 mb-8 leading-relaxed">
              We go beyond traditional IT support — delivering enterprise-grade Smart Hands services, WiFi surveys, and cloud solutions designed to fuel business growth. From our hub in <strong>Bangalore</strong>, we ensure reliability and innovation for businesses across APAC.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-brand-primary text-white font-medium hover:bg-brand-primary-hover transition-colors shadow-brand">
              Get Started Today
            </Link>
          </motion.div>
        </div>

        {/* Dark Card - Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-brand-dark rounded-[2.5rem] px-10 py-16 md:px-16 md:py-28 text-white relative overflow-hidden max-w-none mx-auto shadow-2xl shadow-indigo-950/20"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-violet-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:text-left text-center">
            <div className="lg:w-3/5">
              <div className="inline-block px-4 py-2 rounded-full border border-white/20 text-xs font-bold tracking-widest mb-10 bg-white/10 backdrop-blur-md uppercase">
                Established Excellence
              </div>

              <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8 font-display">
                We are a trusted provider of <span className="text-indigo-400 font-bold">IT Smart Hands</span> and network solutions.
              </h2>

              <p className="text-lg md:text-xl text-indigo-100/80 leading-relaxed mb-12 max-w-3xl">
                Helping businesses in Bangalore and across the APAC region stay connected, secure, and future-ready with global best practices and localized expertise.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 w-full">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-4xl md:text-5xl font-bold mb-2 font-display text-white">250+</span>
                  <span className="text-xs text-indigo-300 font-bold uppercase tracking-wider">Successful Projects</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-4xl md:text-5xl font-bold mb-2 font-display text-white">13+</span>
                  <span className="text-xs text-indigo-300 font-bold uppercase tracking-wider">Industry Awards</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-4xl md:text-5xl font-bold mb-2 font-display text-white">4K+</span>
                  <span className="text-xs text-indigo-300 font-bold uppercase tracking-wider">Happy Customers</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-4xl md:text-5xl font-bold mb-2 font-display text-white">98%</span>
                  <span className="text-xs text-indigo-300 font-bold uppercase tracking-wider">Satisfaction Rate</span>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 relative h-[300px] lg:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                alt="Future Ready IT"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-sm font-medium text-white italic">"Driving innovation through reliable infrastructure."</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Reliable IT Services */}
      <section className="container mx-auto px-6 lg:px-12 py-16 max-w-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 mb-12 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight font-display">Reliable IT Services That Grow With You</h2>
          <p className="text-slate-600 mt-4 text-lg">
            At Nexuscore, we provide tailored IT solutions that help businesses run smoothly. From secure cloud services to reliable servers, our team ensures your technology works for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-violet-50 rounded-[2rem] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px] transition-transform duration-300"
          >
            <h3 className="text-2xl font-medium text-violet-950 leading-snug mb-4 font-display">
              Simplifying Technology, Step by Step
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We make IT simple. Our professionals develop, deploy and support solutions that are suitable for your requirements. It can be network installation, data management, or maintenance.
            </p>
            <div className="mt-auto pt-8">
              <div className="w-12 h-12 rounded-full bg-violet-200 flex items-center justify-center">
                <span className="text-violet-700 font-bold">01</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-brand-primary rounded-[2rem] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px] text-white transition-transform duration-300 shadow-brand"
          >
            <h3 className="text-2xl font-medium leading-snug mb-4 font-display">
              Support You Can Count On
            </h3>
            <p className="text-violet-100 leading-relaxed">
              This is why NexusCore has 24/7 support and proactive monitoring. As a leading IT consulting company, we promise responsive, real-world solutions that keep your operations running without interruptions.
            </p>
            <div className="mt-auto pt-8">
              <div className="w-12 h-12 rounded-full bg-violet-400 flex items-center justify-center">
                <span className="text-white font-bold">02</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-slate-100 rounded-[2rem] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-[400px] transition-transform duration-300"
          >
            <h3 className="text-2xl font-medium text-slate-900 leading-snug mb-4 font-display">
              Your Technology Partner
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We believe technology should be reliable, simple, and tailored for you. Partner with NexusCore and experience IT solutions that make growth easy, safe, and sustainable.
            </p>
            <div className="mt-auto pt-8">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                <span className="text-slate-700 font-bold">03</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 overflow-hidden relative border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-none">
          <div className="flex items-center mb-12 relative">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight whitespace-nowrap z-10 bg-white pr-8 font-display">Our Services</h2>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-8 text-6xl font-medium text-slate-100 -z-10 select-none pointer-events-none w-[200%] overflow-hidden font-display">
              <span>Our Services</span>
              <span>Our Services</span>
              <span>Our Services</span>
              <span>Our Services</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-[2rem] flex flex-col relative overflow-hidden group shadow-sm hover:shadow-xl cursor-pointer transition-all duration-500 h-[400px]"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                  <div className="relative z-10 flex flex-col h-full p-8 justify-end">
                    <div className="absolute top-8 left-8 text-xs font-medium text-white/70 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full">0{service.id}</div>

                    <h3 className="text-2xl font-medium mb-2 text-white font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{service.title}</h3>

                    <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      {service.shortDesc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Modal Popup */}
      <AnimatePresence>
        {selectedServiceId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedServiceId(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl z-10 overflow-hidden flex flex-col"
            >
              <button
                onClick={() => setSelectedServiceId(null)}
                className="absolute top-4 right-4 p-2 text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {services.filter(s => s.id === selectedServiceId).map(service => {
                return (
                  <div key={service.id} className="flex flex-col w-full">
                    <div className="w-full h-64 relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col">
                      <h3 className="text-3xl font-medium mb-4 text-slate-900 font-display">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed mb-8">
                        {service.fullDesc}
                      </p>

                      <div className="flex items-center gap-4 mt-auto">
                        <Link
                          href="/contact"
                          onClick={() => setSelectedServiceId(null)}
                          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-primary text-white font-medium hover:bg-brand-primary-hover transition-colors text-sm"
                        >
                          Request Service
                        </Link>
                        <button
                          onClick={() => setSelectedServiceId(null)}
                          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors text-sm"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Partners Marquee */}
      <section className="py-12 bg-white border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mb-8 text-center max-w-none">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Trusted Partners</p>
        </div>
        <div className="flex w-[200%] animate-marquee-left gap-16 items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center w-32 h-12">
              <Image
                src={partner.icon}
                alt={partner.name}
                width={128}
                height={48}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-16 bg-slate-50 overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 mb-12 text-center max-w-none">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight font-display mb-4">What Our Clients Say</h2>
          <p className="text-slate-500">Trusted by leading companies across the region.</p>
        </div>

        <div className="relative flex flex-col gap-6">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

          {/* Row 1: Left */}
          <div className="flex w-[200%] animate-marquee-left gap-6 hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[350px] md:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex-shrink-0 flex flex-col justify-between">
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border border-slate-100">
                    <Image src={t.image} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Right */}
          <div className="flex w-[200%] animate-marquee-right gap-6 hover:[animation-play-state:paused]">
            {[...testimonials].reverse().concat([...testimonials].reverse()).map((t, i) => (
              <div key={i} className="w-[350px] md:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex-shrink-0 flex flex-col justify-between">
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border border-slate-100">
                    <Image src={t.image} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA Section */}
      <section className="bg-brand-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 leading-tight font-display">
              Need Global-Standard IT Support You Can Rely On!
            </h2>
            <p className="text-lg text-violet-200 mb-12 leading-relaxed">
              Delivering enterprise-grade IT support with global standards of excellence. With trusted partners like Cisco, Juniper and Dell, we ensure your business stays reliable, scalable, and future-ready.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand-dark font-medium rounded-xl hover:bg-slate-100 transition-colors gap-2">
              Get A Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
