"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { contactOptions } from "@/lib/content";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const fieldClass = "h-11 rounded-lg border border-[#d7e8f3] bg-white px-3.5 text-sm outline-none transition-all duration-200 hover:border-[#2382bf]/40 focus:border-[#2382bf] focus:ring-2 focus:ring-[#2382bf]/15";
  const labelClass = "grid gap-1.5 text-[0.8rem] font-bold text-[#08213f]";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="card glass grid gap-4 p-6 lg:p-7">
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
      <button type="submit" className="button-primary mt-1 !h-[42px] !min-h-[42px] !px-5 !text-[0.82rem]">
        <Send size={16} />
        Submit
      </button>
      {sent ? (
        <p className="rounded-xl bg-gradient-to-r from-[#e9f7ff] to-[#f0faff] p-4 text-sm font-bold text-[#08213f]">
          Thank you for contacting The BrightLight Nursery and Primary School. Our team will get back to you shortly.
        </p>
      ) : null}
    </form>
  );
}
