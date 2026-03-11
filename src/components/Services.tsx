"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    title: "Fresh Breads",
    description:
      "Start your day with our handcrafted artisan breads, baked fresh every morning using traditional Mauritian recipes passed down through generations.",
    tag: "Open Daily",
    image:
      "/images/service-bread.png",
  },
  {
    title: "Sweet Treats",
    description:
      "Indulge in our selection of pastries, cakes, and sweet delicacies. Each piece is a work of art, crafted with premium ingredients and Mauritian flair.",
    tag: "Handcrafted",
    image:
      "/images/bakery-display.jpg",
  },
  {
    title: "Bread & Cake Delivery",
    description:
      "Can't make it to Terre Rouge? We deliver our freshly baked goods right to your doorstep across Mauritius. Fresh from our oven to your table.",
    tag: "Delivery",
    image:
      "/images/service-delivery.png",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-coffee/20 to-tristesse transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pecan/10"
    >
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="mb-4 inline-block rounded-full bg-pecan/10 px-3 py-1 text-xs uppercase tracking-wider text-pecan">
          {service.tag}
        </span>
        <h3 className="mb-3 font-heading text-xl font-bold text-santo">
          {service.title}
        </h3>
        <p className="text-sm font-light leading-relaxed text-santo/60">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-tristesse px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="What We Offer"
          title="Our Services"
          description="From traditional Mauritian breads to exquisite pastries, every creation at Baker's Delice is crafted with love and the finest ingredients."
          centered={false}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
