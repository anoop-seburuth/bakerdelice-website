"use client";

import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const contactItems = [
  "hello@bakersdelice.com",
  "+230 123 4567",
  "Terre Rouge, Mauritius",
];

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", icon: <FacebookIcon /> },
  { label: "Instagram", icon: <InstagramIcon /> },
  { label: "TikTok", icon: <TikTokIcon /> },
];

export default function Footer() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050505] py-16 px-6">
      {/* Top separator */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(166, 115, 81, 0.2), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto mt-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Baker's Delice"
              width={360}
              height={150}
              className="h-[150px] w-auto mb-4 invert brightness-200"
            />
            <p className="font-heading text-lg text-santo mb-3">
              Baker&apos;s Delice
            </p>
            <p className="text-santo/50 text-sm leading-relaxed font-light">
              Crafting artisan breads and pastries in Terre Rouge, Mauritius
              since day one. Every bite tells a story of tradition and love.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-sawdust text-sm uppercase tracking-wider font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-santo/50 hover:text-sawdust transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-sawdust text-sm uppercase tracking-wider font-semibold mb-6">
              Contact Info
            </h4>
            <ul className="space-y-3">
              {contactItems.map((item) => (
                <li key={item} className="text-santo/50 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Social */}
          <div>
            <h4 className="text-sawdust text-sm uppercase tracking-wider font-semibold mb-6">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-santo/60 hover:bg-pecan hover:text-white hover:border-pecan hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-santo/30 text-sm">
            &copy; 2024 Baker&apos;s Delice. All rights reserved.
          </p>
          <p className="text-santo/30 text-sm">Terre Rouge, Mauritius 🇲🇺</p>
        </div>
      </div>
    </footer>
  );
}
