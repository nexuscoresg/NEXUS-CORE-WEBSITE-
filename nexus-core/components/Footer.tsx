import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a14] text-slate-400 py-14 relative overflow-hidden border-t border-white/5">

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-8 group">
              <div className="relative w-48 h-12">
                <Image
                  src="/logo.png"
                  alt="Nexus Core"
                  fill
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              Delivering enterprise-grade IT Smart Hands, WiFi surveys, and 24/7 managed support across India and the APAC region.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* X */}
              <a
                href="https://x.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.244 2H21.5l-7.19 8.21L22 22h-6.828l-5.35-6.995L3.5 22H.244l7.69-8.78L2 2h6.93l4.84 6.337L18.244 2z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "What We Offer", href: "/what-we-offer" },
                { name: "Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowUpRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                "WiFi Survey",
                "IT Smart Hand",
                "Maintenance",
                "Cloud Hosting",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/what-we-offer"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Connect
            </h4>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    Call Us
                  </p>
                  <p className="text-slate-300">(888) 1452 756</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:nexuscore.sg@gmail.com"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    nexuscore.sg@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    Office
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    111 NORTH BRIDGE ROAD,<br />
                    #20-05, PENINSULA PLAZA,<br />
                    SINGAPORE 179098
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-slate-500 font-medium">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white">Nexus Core</span>. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-slate-500 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}