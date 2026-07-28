"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, city }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
      setCity("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="border border-white/10 px-6 py-10 md:px-10 md:py-12">
      <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#F7931A]">
        Get Notified
      </p>
      <h2 className="mt-4 max-w-lg text-2xl font-medium tracking-[-0.01em] md:text-3xl">
        We&apos;ll tell you the moment Topup opens near you.
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:gap-8"
      >
        <label className="block flex-1">
          <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#D6D6D6]">
            Your City
          </span>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Chennai, Bangalore, Mumbai..."
            className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-[15px] text-[#F8F8F5] placeholder:text-[#D6D6D6]/40 outline-none transition-colors focus:border-[#F7931A]"
          />
        </label>

        <label className="block flex-1">
          <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#D6D6D6]">
            Email Address
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-[15px] text-[#F8F8F5] placeholder:text-[#D6D6D6]/40 outline-none transition-colors focus:border-[#F7931A]"
          />
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center gap-3 bg-[#F7931A] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[#111111] transition-colors duration-300 hover:bg-[#F8F8F5] disabled:opacity-50 md:mb-[1px]"
        >
          {status === "loading" ? "Sending" : "Notify Me"}
          <ArrowRight size={16} />
        </button>
      </form>

      {status === "success" && (
        <p className="mt-5 text-[14px] text-[#F7931A]">
          You&apos;re on the list — we&apos;ll be in touch.
        </p>
      )}
      {status === "error" && (
        <p className="mt-5 text-[14px] text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}