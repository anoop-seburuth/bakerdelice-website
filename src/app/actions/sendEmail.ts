"use server";

import nodemailer from "nodemailer";

interface SendEmailResult {
  success: boolean;
  error?: string;
}

export async function sendEmail(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<SendEmailResult> {
  const { name, email, phone, message } = formData;

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Baker's Delice Website" <${process.env.SMTP_USER}>`,
      to: "hello@bakersdelice.com",
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Message from Baker's Delice Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return { success: true };
  } catch {
    console.error("Email send failed");
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
