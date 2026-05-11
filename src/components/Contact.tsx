"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong.");
    }
  };

  const inputClasses =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-santo placeholder:text-santo/30 focus:border-pecan/50 focus:outline-none focus:ring-1 focus:ring-pecan/20 transition font-light text-sm";

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{
        background:
          "linear-gradient(to bottom, #0A0A0A, rgba(137, 76, 44, 0.05), #0A0A0A)",
      }}
    >
      {/* Top decorative line */}
      <div
        className="w-full h-px mb-24"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(198, 161, 124, 0.2), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Get in Touch"
          title="Contact Us"
          description="We'd love to hear from you. Reach out for orders, inquiries, or just to say hello."
          centered={false}
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN - Contact Info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Email */}
            <div className="flex gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-pecan/10 flex items-center justify-center">
                <span className="text-pecan text-lg">&#9993;</span>
              </div>
              <div>
                <p className="text-santo/50 text-xs uppercase tracking-wider">
                  Email Us
                </p>
                <p className="text-santo font-semibold">
                  hello@bakersdelice.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-pecan/10 flex items-center justify-center">
                <span className="text-pecan text-lg">&#128222;</span>
              </div>
              <div>
                <p className="text-santo/50 text-xs uppercase tracking-wider">
                  Call Us
                </p>
                <p className="text-santo font-semibold">+230 123 4567</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-pecan/10 flex items-center justify-center">
                <span className="text-pecan text-lg">&#128336;</span>
              </div>
              <div>
                <p className="text-santo/50 text-xs uppercase tracking-wider">
                  Opening Hours
                </p>
                <p className="text-santo font-semibold">
                  Mon - Sun: 5:30 AM - 7:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Contact Form */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className={inputClasses}
              />

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-400 text-sm">
                  Message sent successfully! We&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-pecan hover:bg-gingerbread text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-pecan/20 text-sm tracking-wide uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
