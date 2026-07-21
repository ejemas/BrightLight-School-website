"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { contactOptions } from "@/lib/content";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const fieldClass = "h-11 rounded-lg border border-[#d7e8f3] bg-white px-3.5 text-sm outline-none transition-all duration-200 hover:border-[#2382bf]/40 focus:border-[#2382bf] focus:ring-2 focus:ring-[#2382bf]/15";
  const labelClass = "grid gap-1.5 text-[0.8rem] font-bold text-[#08213f]";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || "We could not send your enquiry right now. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "We could not send your enquiry right now. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card glass grid gap-4 p-6 lg:p-7">
      <div className="border-b border-[#d7e8f3] pb-4">
        <p className="eyebrow">Contact Form</p>
        <h2 className="mt-2 text-2xl font-extrabold text-[#08213f]">Send Us an Enquiry</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Parent/Guardian Name
          <input
            required
            name="guardianName"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Phone Number
          <input
            required
            name="phone"
            className={fieldClass}
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Email Address
          <input
            type="email"
            name="email"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Child&apos;s Name
          <input
            name="childName"
            className={fieldClass}
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Child&apos;s Age
          <input
            name="childAge"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Enquiry Type
          <select
            name="type"
            className={fieldClass}
          >
            {contactOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label className={labelClass}>
        Message
        <textarea
          required
          name="message"
          rows={4}
          className="min-h-28 resize-none rounded-lg border border-[#d7e8f3] bg-white px-3.5 py-3 text-sm outline-none transition-all duration-200 hover:border-[#2382bf]/40 focus:border-[#2382bf] focus:ring-2 focus:ring-[#2382bf]/15"
        />
      </label>
      <button type="submit" disabled={status === "loading"} className="button-primary mt-1 !h-[42px] !min-h-[42px] !px-5 !text-[0.82rem] disabled:cursor-not-allowed disabled:opacity-70">
        <Send size={16} />
        {status === "loading" ? "Sending..." : "Submit"}
      </button>
      {status === "success" ? (
        <p className="rounded-xl bg-gradient-to-r from-[#e9f7ff] to-[#f0faff] p-4 text-sm font-bold text-[#08213f]">
          Thank you for contacting Brightlight International School. Our team will get back to you shortly.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-bold text-red-700">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
