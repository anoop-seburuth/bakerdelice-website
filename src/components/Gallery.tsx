"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const galleryItems = [
  {
    label: "Artisan Bread",
    image: "/images/gallery-6.jpg",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    label: "Fresh Pastries",
    image: "/images/gallery-1.jpg",
    span: "",
  },
  {
    label: "Cakes & Treats",
    image: "/images/gallery-2.jpg",
    span: "",
  },
  {
    label: "Baguettes",
    image: "/images/gallery-3.jpg",
    span: "md:col-span-2",
  },
  {
    label: "Sweet Delights",
    image: "/images/gallery-4.jpg",
    span: "",
  },
  {
    label: "Our Bakery",
    image: "/images/gallery-5.jpg",
    span: "",
  },
];

function GalleryItem({ item, index }: { item: (typeof galleryItems)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-tristesse/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Label text */}
      <span className="absolute bottom-4 left-4 text-santo font-heading text-lg font-bold translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        {item.label}
      </span>

      {/* Zoom icon */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-sawdust/30 flex items-center justify-center text-sawdust text-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-transform duration-500">
        +
      </span>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-6"
      style={{
        background:
          "linear-gradient(to bottom, #0A0A0A, rgba(104, 41, 13, 0.1), #0A0A0A)",
      }}
    >
      <SectionHeader
        label="Our Gallery"
        title="Baked with Passion"
        description="A glimpse into our world of artisan baking — from golden crusts to delicate pastries."
        centered={true}
      />

      {/* Gallery grid */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          style={{ gridAutoRows: "280px" }}
        >
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
