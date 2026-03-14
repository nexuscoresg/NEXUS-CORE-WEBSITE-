"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { MapPin, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: '', email: '', service: '', message: '' };

    if (!formData.name.trim()) { newErrors.name = 'Name is required'; valid = false; }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) { newErrors.email = 'Valid email is required'; valid = false; }
    if (!formData.service) { newErrors.service = 'Please select a service'; valid = false; }

    setErrors(newErrors);

    if (valid) {
      setStatus('submitting');

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
            name: formData.name,
            email: formData.email,
            service: formData.service,
            message: formData.message,
            subject: `New Service Request: ${formData.service} from ${formData.name}`,
            from_name: "Nexus Core Website",
          }),
        });

        const result = await response.json();
        if (result.success) {
          setStatus('success');
          setFormData({ name: '', email: '', service: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        } else {
          console.error("Submission failed:", result);
          setStatus('idle');
          alert("Something went wrong. Please try again or contact us directly at nexuscore.sg@gmail.com");
        }
      } catch (error) {
        console.error("Submission error:", error);
        setStatus('idle');
        alert("Unable to send message. Please check your internet connection and try again.");
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-violet-100 selection:text-violet-900 pb-16">
      {/* Header */}
      <section className="pt-24 pb-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-violet-200/50 rounded-full blur-[100px] -z-10"></div>
        <div className="container mx-auto px-6 lg:px-12 max-w-none text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-xl border border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-sm font-medium tracking-wide mb-6"
          >
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tight font-display mb-6 text-slate-900"
          >
            Let&apos;s Build Something <br className="hidden md:block" />
            <span className="text-brand-primary">Great Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Reach out to Nexus Core for fast support and professional IT services that keep your business running efficiently.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6">
        <div className="container mx-auto px-6 lg:px-12 max-w-none">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col lg:flex-row">

            {/* Left Info Panel */}
            <div className="bg-brand-dark p-10 lg:p-14 text-white lg:w-5/12 relative overflow-hidden flex flex-col justify-between">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                alt="Contact Support"
                fill
                className="object-cover opacity-20 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark-hover to-transparent"></div>

              <div className="relative z-10">
                <h2 className="text-4xl font-medium font-display mb-6 leading-tight">
                  Reach Us And Get In Touch!
                </h2>
                <p className="text-violet-200 leading-relaxed mb-12 text-lg">
                  We are here to support your business with end-to-end IT consulting and enterprise solutions designed for reliability, scalability, and future growth.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-brand-primary transition-colors">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-violet-300 mb-1 uppercase tracking-wider">Address</h4>
                      <p className="text-white font-medium leading-relaxed text-lg">
                        111 NORTH BRIDGE ROAD,<br />
                        #20-05, PENINSULA PLAZA,<br />
                        SINGAPORE 179098
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-brand-primary transition-colors">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-violet-300 mb-1 uppercase tracking-wider">Email Address</h4>
                      <a href="mailto:nexuscore.sg@gmail.com" className="text-white font-medium hover:text-violet-200 transition-colors text-lg">
                        nexuscore.sg@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-brand-primary transition-colors">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-violet-300 mb-1 uppercase tracking-wider">Phone Numbers</h4>
                      <p className="text-white font-medium hover:text-violet-200 transition-colors text-lg">
                        Tel: 95 (+123) 259 987 <br />
                        Mob: (+0122) 3250 166 25
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="p-10 lg:p-14 lg:w-7/12 bg-white">
              <h3 className="text-2xl font-medium mb-8 text-slate-900 font-display">Send us a message</h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center flex flex-col items-center justify-center h-full min-h-[400px]"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-medium text-emerald-900 mb-2 font-display">Message Sent!</h4>
                  <p className="text-emerald-700">Thank you for reaching out. Our team will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.name ? 'border-red-300 bg-red-50' : 'border-slate-200'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Select a Service</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border ${errors.service ? 'border-red-300 bg-red-50' : 'border-slate-200'} rounded-xl px-4 py-3 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                      >
                        <option value="" disabled>Choose a service...</option>
                        <option value="WiFi Survey">WiFi Survey</option>
                        <option value="IT Smart Hand Services">IT Smart Hand Services</option>
                        <option value="Maintenance and Support">Maintenance and Support</option>
                        <option value="Data Center & Cloud">Data Center & Cloud</option>
                        <option value="Enterprise IoT Solutions">Enterprise IoT Solutions</option>
                        <option value="Distribution & Logistics">Distribution & Logistics</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                    {errors.service && <p className="text-red-500 text-xs mt-1.5">{errors.service}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your message (optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full px-8 py-4 rounded-xl bg-brand-primary text-white font-medium hover:bg-brand-primary-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-brand"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                      {status === 'idle' && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
