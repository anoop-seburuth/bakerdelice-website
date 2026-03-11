"use client";

import { motion } from "framer-motion";

const floatingParticles = [
  { width: "w-1", height: "h-1", top: "12%", left: "8%", duration: "15s", delay: "0s" },
  { width: "w-2", height: "h-2", top: "25%", left: "85%", duration: "20s", delay: "3s" },
  { width: "w-1", height: "h-1", top: "45%", left: "15%", duration: "18s", delay: "5s" },
  { width: "w-1.5", height: "h-1.5", top: "60%", left: "90%", duration: "12s", delay: "2s" },
  { width: "w-2", height: "h-2", top: "75%", left: "25%", duration: "22s", delay: "7s" },
  { width: "w-1", height: "h-1", top: "35%", left: "70%", duration: "25s", delay: "1s" },
  { width: "w-1.5", height: "h-1.5", top: "80%", left: "60%", duration: "10s", delay: "4s" },
  { width: "w-1", height: "h-1", top: "18%", left: "50%", duration: "17s", delay: "6s" },
];

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/hero-bg.jpg"
        alt="Artisan bakery background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ animation: "slowZoom 20s ease-in-out infinite alternate" }}
      />

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #0A0A0A 0%, rgba(104, 41, 13, 0.8) 40%, transparent 100%)",
        }}
      />

      {/* Floating Golden Particles */}
      {floatingParticles.map((particle, index) => (
        <div
          key={index}
          className={`absolute ${particle.width} ${particle.height} bg-sawdust/30 rounded-full`}
          style={{
            top: particle.top,
            left: particle.left,
            animation: `float ${particle.duration} ease-in-out infinite`,
            animationDelay: particle.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          className="max-w-4xl px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-sawdust text-sm tracking-widest uppercase">
            &mdash; We Bake Differently &mdash;
          </span>

          {/* Title */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-santo leading-tight mt-6">
            Freshly Baked
            <br />
            <span className="text-sawdust">Mauritian Bread</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-santo/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            At Baker&apos;s Delice, every loaf tells a story of Mauritian tradition.
            From our ovens in Terre Rouge, we craft artisan breads, pastries, and
            cakes that bring warmth to your table.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="#services"
              className="bg-pecan hover:bg-gingerbread text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border border-sawdust/30 text-sawdust hover:bg-sawdust/10 px-8 py-3 rounded-full font-semibold transition"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Side Decorative */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-sawdust/30 to-transparent" />
        <span
          className="text-sawdust/40 text-xs tracking-[0.3em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          TERRE ROUGE
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-sawdust/30 to-transparent" />
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-santo/40 text-xs tracking-widest">SCROLL</span>
        <div
          className="w-px h-8 bg-sawdust/30"
          style={{ animation: "bounce 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
