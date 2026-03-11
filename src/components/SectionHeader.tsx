"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`space-y-4 ${centered ? "text-center" : "text-left"}`}
    >
      {/* Label */}
      <p className="text-sm font-body uppercase tracking-widest text-sawdust">
        {label}
      </p>

      {/* Title */}
      <h2 className="font-heading text-4xl font-bold text-santo md:text-5xl">
        {title}
      </h2>

      {/* Divider */}
      <div className={centered ? "flex justify-center" : ""}>
        <div
          className="h-px w-20"
          style={{
            background:
              "linear-gradient(to right, #A67351, transparent)",
          }}
        />
      </div>

      {/* Description */}
      <p
        className={`max-w-2xl font-body font-light text-santo/70 ${
          centered ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}
