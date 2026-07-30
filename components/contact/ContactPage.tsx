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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess("Message sent successfully.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="bg-[#171A1F] text-[#F8F8F5]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#111111]/85" />

        <div className="relative mx-auto flex min-h-[480px] max-w-[1400px] items-center px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.35em] text-[#D6D6D6]">
              Contact
            </p>
            <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.02em] md:text-7xl">
              Let&apos;s build the future
              <br />
              of <span className="text-[#2563EB]">EV charging</span>.
            </h1>
            <p className="mt-8 max-w-xl text-[17px] leading-8 text-[#D6D6D6]">
              From hotels and commercial properties to fleet operators and
              investors — we&apos;re building India&apos;s charging
              infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[360px_1fr] lg:gap-24">
          {/* Business Information */}
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#2563EB]">
              Get in Touch
            </p>
            <h2 className="mt-6 text-3xl font-medium tracking-[-0.01em]">
              Let&apos;s talk.
            </h2>
            <p className="mt-5 leading-7 text-[#D6D6D6]">
              Whether you&apos;re planning a commercial installation,
              exploring a partnership, or have a question — our team is
              here to help.
            </p>

            <div className="mt-12 space-y-8 border-t border-white/10 pt-10">
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 text-[#2563EB]" strokeWidth={1.5} />
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#D6D6D6]">
                    Email
                  </p>
                  <p className="mt-1.5 text-[15px]">contact.sjrventures@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 text-[#2563EB]" strokeWidth={1.5} />
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#D6D6D6]">
                    Location
                  </p>
                  <p className="mt-1.5 text-[15px]">Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 text-[#2563EB]" strokeWidth={1.5} />
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#D6D6D6]">
                    Business Hours
                  </p>
                  <p className="mt-1.5 text-[15px]">
                    Monday – Saturday, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#D6D6D6]">
                Response Time
              </p>
              <p className="mt-2 text-[15px] text-[#D6D6D6]">
                We typically respond within one business day.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.01em]">
              Send an enquiry
            </h2>
            <p className="mt-4 text-[#D6D6D6]">
              Tell us about your project and we&apos;ll get back to you
              shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-12 space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#D6D6D6]">
                    Full Name
                  </span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-[#FFFFFF]"
                  />
                </label>

                <label className="block">
                  <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#D6D6D6]">
                    Email Address
                  </span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-[#FFFFFF]"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#D6D6D6]">
                  Subject
                </span>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-[#FFFFFF]"
                />
              </label>

              <label className="block">
                <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#D6D6D6]">
                  Message
                </span>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-3 w-full resize-none border-b border-white/20 bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-[#FFFFFF]"
                />
              </label>

              {success && <p className="text-[14px] text-[#2563EB]">{success}</p>}
              {error && <p className="text-[14px] text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 bg-[#2563EB] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-[#111111] transition-colors duration-300 hover:bg-[#F8F8F5] disabled:opacity-50"
              >
                {loading ? "Sending" : "Send Enquiry"}
                <ArrowRight size={16} />
              </button>

              <p className="text-[13px] text-[#D6D6D6]/70">
                Your information is kept confidential and used only to
                respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Why Topup */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#2563EB]">
            Why Topup
          </p>
          <h2 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.01em] md:text-5xl">
            Built for reliability.
          </h2>

          <div className="mt-16 grid gap-0 border-t border-white/10 md:grid-cols-3">
            {[
              {
                title: "Premium Hardware",
                copy: "High-performance DC fast charging engineered for commercial environments.",
              },
              {
                title: "Strategic Locations",
                copy: "Positioned along key travel corridors and commercial destinations.",
              },
              {
                title: "Long-Term Partnerships",
                copy: "Working with hotels, businesses, fleet operators and property owners across India.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`border-b border-white/10 py-10 pr-8 md:border-b-0 md:py-12 ${
                  i > 0 ? "md:border-l md:pl-10" : ""
                }`}
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#D6D6D6]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}