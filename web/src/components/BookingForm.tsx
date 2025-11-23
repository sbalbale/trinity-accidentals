"use client";

import { useState } from "react";
import { sendBookingEmail } from "@/app/actions";

export default function BookingForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus("submitting");
    setErrorMessage(null);

    const result = await sendBookingEmail(formData);

    if (result.error) {
      setStatus("error");
      setErrorMessage(result.error);
    } else {
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-heading font-bold text-green-800 mb-4">
          Request Sent!
        </h3>
        <p className="text-green-700">
          Thank you for your interest. We will get back to you shortly to
          discuss your event.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-trinityMaroon underline hover:text-red-900"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
      <h3 className="text-2xl font-heading font-bold text-trinityMaroon mb-6">
        Book the Accidentals
      </h3>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Name / Organization
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-trinityMaroon focus:border-trinityMaroon"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-trinityMaroon focus:border-trinityMaroon"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="eventType"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              Event Type
            </label>
            <select
              id="eventType"
              name="eventType"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-trinityMaroon focus:border-trinityMaroon"
            >
              <option value="">Select an event type</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Private Party">Private Party</option>
              <option value="Concert">Concert</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-trinityMaroon focus:border-trinityMaroon"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="details"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Additional Details
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-trinityMaroon focus:border-trinityMaroon"
            placeholder="Tell us more about your event..."
          ></textarea>
        </div>

        {status === "error" && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
            {errorMessage || "Something went wrong. Please try again."}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-trinityMaroon text-white font-bold py-3 px-6 rounded-lg hover:bg-red-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}
