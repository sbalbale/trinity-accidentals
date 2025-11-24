"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendBookingEmail } from "@/app/actions";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendBookingEmail(formData);

    setIsSubmitting(false);

    if (result.error) {
      setMessage({ type: "error", text: result.error });
    } else {
      setMessage({
        type: "success",
        text: "Thank you! We'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            className="bg-input border-input text-foreground placeholder:text-muted-foreground"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-input border-input text-foreground placeholder:text-muted-foreground"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="eventType"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Event Type *
        </label>
        <Input
          id="eventType"
          name="eventType"
          type="text"
          required
          className="bg-input border-input text-foreground placeholder:text-muted-foreground"
          placeholder="e.g., Wedding, Corporate Event, Concert"
        />
      </div>

      <div>
        <label
          htmlFor="date"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Preferred Date *
        </label>
        <Input
          id="date"
          name="date"
          type="date"
          required
          className="bg-input border-input text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div>
        <label
          htmlFor="details"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Additional Details
        </label>
        <Textarea
          id="details"
          name="details"
          rows={4}
          className="bg-input border-input text-foreground placeholder:text-muted-foreground"
          placeholder="Tell us more about your event..."
        />
      </div>

      {message && (
        <div
          className={`p-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-500/20 text-green-100 border border-green-500/50"
              : "bg-red-500/20 text-red-100 border border-red-500/50"
          }`}
        >
          {message.text}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
        size="lg"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
