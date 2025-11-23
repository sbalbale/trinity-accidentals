"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const eventType = formData.get("eventType") as string;
  const date = formData.get("date") as string;
  const details = formData.get("details") as string;

  if (!name || !email || !eventType || !date) {
    return { error: "Missing required fields" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Trinity Accidentals <onboarding@resend.dev>", // Update this with your verified domain
      to: ["trinityaccidentals@gmail.com"], // Update this to the actual recipient
      subject: `New Performance Request: ${eventType}`,
      text: `
        Name: ${name}
        Email: ${email}
        Event Type: ${eventType}
        Date: ${date}
        Details: ${details}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { error: "Failed to send email" };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Server error:", error);
    return { error: "Internal server error" };
  }
}
