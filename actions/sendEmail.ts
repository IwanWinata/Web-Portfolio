import React from "react";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

let resend;

// Asynchronously load and initialize Resend only when needed
async function initializeResend() {
  if (!resend) {
    const { Resend } = await import("resend");
    resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  }
}

export const sendEmail = async (formData: FormData) => {
  await initializeResend(); // Make sure Resend is initialized

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  console.log("Sending email", senderEmail, message);

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "bytegrad@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
