"use client";

import { useState } from "react";
import { sendBookingEmail } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

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
      <div className="bg-[#0b3c6b] border border-green-500/30 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-serif font-bold text-green-400 mb-4">
          Request Sent!
        </h3>
        <p className="text-white/80">
          Thank you for your interest. We will get back to you shortly to
          discuss your event.
        </p>
        <Button
          variant="link"
          onClick={() => setStatus("idle")}
          className="mt-6 text-gold hover:text-gold/80"
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      action={handleSubmit}
      className="bg-[#0b3c6b] rounded-lg shadow-xl p-8 border border-white/10"
    >
      <h3 className="text-2xl font-serif font-bold text-white mb-6">
        Book the Accidentals
      </h3>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Name / Organization
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              className="bg-[#07294b] border-white/20 text-white placeholder:text-white/40 focus:border-gold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="bg-[#07294b] border-white/20 text-white placeholder:text-white/40 focus:border-gold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="eventType" className="text-white">
              Event Type
            </Label>
            <Input
              type="text"
              id="eventType"
              name="eventType"
              required
              placeholder="e.g., Wedding, Corporate Event, Concert"
              className="bg-[#07294b] border-white/20 text-white placeholder:text-white/40 focus:border-gold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-white">
              Date
            </Label>
            <Input
              type="date"
              id="date"
              name="date"
              required
              className="bg-[#07294b] border-white/20 text-white placeholder:text-white/40 focus:border-gold"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="details" className="text-white">
            Additional Details
          </Label>
          <Textarea
            id="details"
            name="details"
            rows={4}
            className="bg-[#07294b] border-white/20 text-white placeholder:text-white/40 focus:border-gold"
            placeholder="Tell us more about your event..."
          />
        </div>

        {status === "error" && (
          <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-md border border-red-500/20">
            {errorMessage || "Something went wrong. Please try again."}
          </div>
        )}

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-gold text-navy hover:bg-gold/90 font-bold py-6 text-lg"
        >
          {status === "submitting" ? "Sending..." : "Submit Request"}
        </Button>
      </div>
    </form>
  );
}
