"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      setSuccess("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="bg-black text-white">
      {/* Hero */}
<section className="relative overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/contact-hero.jpg')",
    }}
  />

  <div className="absolute inset-0 bg-black/75" />

  <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 md:px-10">
    <div className="max-w-3xl">

      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#F7931A]">
        CONTACT TOPUP
      </p>

      <h1 className="text-5xl font-bold leading-tight md:text-7xl">
        Let's Build the Future of
        <span className="text-[#F7931A]"> EV Charging</span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
        From hotels and commercial properties to fleet operators and investors,
        we're helping accelerate India's transition to electric mobility.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <div className="rounded-full border border-white/20 px-5 py-3">
          DC Fast Charging
        </div>

        <div className="rounded-full border border-white/20 px-5 py-3">
          Commercial Installations
        </div>

        <div className="rounded-full border border-white/20 px-5 py-3">
          Business Partnerships
        </div>
      </div>

    </div>
  </div>
</section>

{/* Contact Section */}
<section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
  <div className="grid gap-12 lg:grid-cols-[420px_1fr]">

    {/* Business Information */}
    <div className="rounded-[32px] border border-white/10 bg-neutral-900 p-10">

      <span className="rounded-full border border-[#F7931A]/30 bg-[#F7931A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#F7931A]">
        Get in Touch
      </span>

      <h2 className="mt-8 text-4xl font-semibold">
        Let's Talk.
      </h2>

      <p className="mt-6 leading-8 text-neutral-400">
        Whether you're planning a commercial EV charging installation,
        exploring partnership opportunities, or simply have a question,
        our team is here to help.
      </p>

      <div className="mt-12 space-y-8">

        <div className="flex items-start gap-5">
          <Mail className="mt-1 h-6 w-6 text-[#F7931A]" />

          <div>
            <p className="font-semibold">Email</p>
            <p className="mt-1 text-neutral-400">
              contact.sjrventures@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <MapPin className="mt-1 h-6 w-6 text-[#F7931A]" />

          <div>
            <p className="font-semibold">Location</p>
            <p className="mt-1 text-neutral-400">
              Tamil Nadu, India
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <Phone className="mt-1 h-6 w-6 text-[#F7931A]" />

          <div>
            <p className="font-semibold">Business Hours</p>
            <p className="mt-1 text-neutral-400">
              Monday – Saturday
              <br />
              9:00 AM – 6:00 PM
            </p>
          </div>
        </div>

      </div>

      <div className="mt-14 rounded-2xl border border-[#F7931A]/20 bg-[#F7931A]/5 p-6">
        <h3 className="font-semibold">
          Response Time
        </h3>

        <p className="mt-3 text-neutral-400">
          We typically respond to all enquiries within one business day.
        </p>
      </div>

    </div>

    {/* Contact Form */}
    <div className="rounded-[32px] border border-white/10 bg-neutral-900 p-10 md:p-14">

      <h2 className="text-4xl font-semibold">
        Send an Enquiry
      </h2>

      <p className="mt-4 text-neutral-400">
        Tell us about your project and we'll get back to you shortly.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-12 space-y-6"
      >

        <div className="grid gap-6 md:grid-cols-2">

          <input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="rounded-2xl border border-white/10 bg-black px-6 py-4 outline-none transition focus:border-[#F7931A]"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="rounded-2xl border border-white/10 bg-black px-6 py-4 outline-none transition focus:border-[#F7931A]"
          />

        </div>

        <input
          type="text"
          placeholder="Subject"
          required
          value={form.subject}
          onChange={(e) =>
            setForm({
              ...form,
              subject: e.target.value,
            })
          }
          className="w-full rounded-2xl border border-white/10 bg-black px-6 py-4 outline-none transition focus:border-[#F7931A]"
        />

        <textarea
          rows={7}
          placeholder="Tell us about your project..."
          required
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
          className="w-full rounded-2xl border border-white/10 bg-black px-6 py-4 outline-none transition focus:border-[#F7931A]"
        />

        {success && (
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
            {success}
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-3 rounded-full bg-[#F7931A] px-8 py-4 font-semibold text-black transition hover:scale-105 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Enquiry"}

          <ArrowRight size={18} />
        </button>

        <p className="text-sm text-neutral-500">
          Your information is kept confidential and is only used to
          respond to your enquiry.
        </p>

      </form>

    </div>

  </div>
</section>


{/* Why Topup */}
<section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
  <div className="text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F7931A]">
      WHY TOPUP
    </p>

    <h2 className="mt-5 text-5xl font-bold">
      Built for Reliability.
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-400">
      Our focus is simple—deliver dependable EV charging
      infrastructure that businesses and drivers can trust.
    </p>
  </div>

  <div className="mt-16 grid gap-8 md:grid-cols-3">
    <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
      <h3 className="text-2xl font-semibold">Premium Hardware</h3>
      <p className="mt-4 leading-8 text-neutral-400">
        High-performance DC fast charging solutions built for commercial environments.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
      <h3 className="text-2xl font-semibold">Strategic Locations</h3>
      <p className="mt-4 leading-8 text-neutral-400">
        Positioned along key travel corridors and commercial destinations.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
      <h3 className="text-2xl font-semibold">Long-Term Partnerships</h3>
      <p className="mt-4 leading-8 text-neutral-400">
        Working with hotels, businesses, fleet operators and property owners across India.
      </p>
    </div>
  </div>
</section>

</main>
);
}