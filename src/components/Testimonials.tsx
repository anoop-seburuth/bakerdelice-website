"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const reviews = [
  {
    name: "Nilesh Gayan",
    initial: "N",
    text: "The best bakery in Mauritius! Their bread is always fresh and the pastries are absolutely divine. I visit every weekend without fail.",
  },
  {
    name: "Raz S",
    initial: "R",
    text: "Baker's Delice has become our family's go-to bakery. The delivery service is prompt and the quality never disappoints. Highly recommended!",
  },
  {
    name: "Sandeep Dhoonmoon",
    initial: "S",
    text: "Authentic Mauritian flavours in every bite. The traditional bread reminds me of my grandmother's baking. A true gem in Terre Rouge.",
  },
];

function ReviewCard({ review, index }: { review: (typeof reviews)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
      className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-b from-coffee/10 to-tristesse border border-white/5 hover:border-pecan/20 transition-colors duration-500"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-sawdust text-lg">
            &#9733;
          </span>
        ))}
      </div>

      {/* Quote Mark */}
      <div className="font-heading text-6xl text-pecan/20 leading-none mb-4">
        &ldquo;
      </div>

      {/* Review Text */}
      <p className="text-santo/70 italic leading-relaxed font-light text-sm">
        {review.text}
      </p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pecan to-gingerbread flex items-center justify-center text-white font-bold text-sm">
          {review.initial}
        </div>
        <div>
          <p className="text-santo font-semibold text-sm">{review.name}</p>
          <p className="text-sawdust/60 text-xs">Verified Customer</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-tristesse py-24 px-6">
      {/* Decorative Line */}
      <div
        className="w-full h-px mb-24"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(166, 115, 81, 0.3), transparent)",
        }}
      />

      <SectionHeader
        label="Testimonials"
        title="What Our Customers Say"
        description="Don't just take our word for it — hear from the people who start their mornings with Baker's Delice."
        centered={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
        {reviews.map((review, index) => (
          <ReviewCard key={review.name} review={review} index={index} />
        ))}
      </div>
    </section>
  );
}
