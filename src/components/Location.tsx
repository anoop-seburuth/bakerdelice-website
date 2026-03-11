"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

export default function Location() {
  return (
    <section id="location" className="bg-tristesse py-24 px-6">
      {/* Decorative line */}
      <div
        className="w-full h-px mb-24"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(198, 161, 124, 0.2), transparent)",
        }}
      />

      <SectionHeader
        label="Find Us"
        title="Our Location"
        description="Visit us at our bakery in Terre Rouge, Mauritius. We're open 7 days a week to serve you fresh baked goodness."
        centered={true}
      />

      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Location Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pecan to-gingerbread flex items-center justify-center mb-6">
              <span className="text-2xl">📍</span>
            </div>

            {/* Business Name */}
            <h3 className="font-heading text-2xl font-bold text-santo mb-4">
              Baker&apos;s Delice Terre Rouge
            </h3>

            {/* Address */}
            <p className="text-santo/60 font-light leading-relaxed mb-6">
              Terre Rouge, Mauritius
              <br />
              Port Louis District
            </p>

            {/* Hours */}
            <div className="flex items-center gap-2 text-santo/60 text-sm mb-8">
              <span>🕐</span>
              <span>Mon - Sun: 5:30 AM - 7:00 PM</span>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://www.google.com/maps/place/Baker's+Delice/data=!4m2!3m1!1s0x0:0xebef4a5a839e0303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pecan hover:bg-gingerbread text-white px-6 py-3 rounded-full font-semibold transition text-sm"
            >
              Get Directions
              <span>→</span>
            </a>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl"
            style={{ borderRadius: "20px" }}
          >
            {/* Google Maps Iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872.9!2d57.528!3d-20.174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xebef4a5a839e0303!2sBaker&#39;s%20Delice!5e0!3m2!1sen!2smu!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              className="rounded-2xl grayscale-[0.3] brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Baker's Delice Terre Rouge Location"
            />

            {/* Dark Filter Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-pecan/5 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
