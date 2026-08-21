"use client";

import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

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

      setSuccess("Message sent successfully.");

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
    <main className="bg-[#F5F5F2] text-[#111111]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        data-navbar-theme="light"
        className="
          mx-auto
          flex
          min-h-[72vh]
          max-w-[1500px]
          flex-col
          justify-end
          px-6
          pb-20
          pt-40
          md:px-10
          md:pb-24
          lg:px-14
        "
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black/40">
          Contact Topup
        </p>

        <h1
          className="
            mt-8
            max-w-[1050px]
            text-[clamp(4rem,9vw,9rem)]
            font-medium
            leading-[0.84]
            tracking-[-0.07em]
          "
        >
          Let&apos;s talk.
        </h1>

        <div className="mt-10 max-w-xl border-t border-black/10 pt-6">
          <p className="text-base leading-7 text-black/55 md:text-lg">
            Have a question, want to partner with us, or looking to bring
            Topup charging to your location? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT DETAILS
      ===================================================== */}

      <section
        data-navbar-theme="light"
        className="
          border-y
          border-black/10
        "
      >
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-3">

          {/* EMAIL */}

          <a
            href="mailto:hello@topupchargers.com"
            className="
              group
              border-b
              border-black/10
              px-6
              py-9
              transition-colors
              duration-300
              hover:bg-white
              md:border-b-0
              md:border-r
              md:px-10
              md:py-11
              lg:px-14
            "
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/35">
                Email
              </p>

              <ArrowRight
                size={15}
                strokeWidth={1.5}
                className="
                  text-black/25
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#FF8000]
                "
              />
            </div>

            <p className="mt-5 text-[15px] text-black/75 md:text-base">
              hello@topupchargers.com
            </p>
          </a>

          {/* PHONE */}

          <a
            href="tel:+919080299599"
            className="
              group
              border-b
              border-black/10
              px-6
              py-9
              transition-colors
              duration-300
              hover:bg-white
              md:border-b-0
              md:border-r
              md:px-10
              md:py-11
              lg:px-14
            "
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/35">
                Phone
              </p>

              <ArrowRight
                size={15}
                strokeWidth={1.5}
                className="
                  text-black/25
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#FF8000]
                "
              />
            </div>

            <p className="mt-5 text-[15px] text-black/75 md:text-base">
              +91 90802 99599
            </p>
          </a>

          {/* LOCATION */}

          <div
            className="
              px-6
              py-9
              transition-colors
              duration-300
              hover:bg-white
              md:px-10
              md:py-11
              lg:px-14
            "
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/35">
                Location
              </p>

              <MapPin
                size={15}
                strokeWidth={1.5}
                className="text-[#FF8000]"
              />
            </div>

            <p className="mt-5 text-[15px] text-black/75 md:text-base">
              Tamil Nadu, India
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          ENQUIRY
      ===================================================== */}

      <section
        data-navbar-theme="light"
        className="
          mx-auto
          max-w-[1500px]
          px-6
          py-28
          md:px-10
          md:py-36
          lg:px-14
        "
      >
        <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">

          {/* LEFT SIDE */}

          <div className="lg:pt-8">

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black/35">
              Send an Enquiry
            </p>

            <h2
              className="
                mt-7
                max-w-md
                text-5xl
                font-medium
                leading-[0.9]
                tracking-[-0.055em]
                md:text-6xl
              "
            >
              Tell us
              <br />
              what you&apos;re
              <br />
              looking for.
            </h2>

            <p className="mt-8 max-w-sm text-sm leading-7 text-black/40">
              Whether it&apos;s a charging location, partnership,
              installation, or something else, send us a message and
              our team will get back to you.
            </p>

            <div className="mt-12 border-t border-black/10 pt-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/30">
                Response
              </p>

              <p className="mt-3 text-sm leading-6 text-black/40">
                We typically respond within one business day.
              </p>
            </div>

          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <div
            className="
              rounded-[28px]
              border
              border-black/10
              bg-white
              p-7
              shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              md:p-10
              lg:p-12
            "
          >

            {/* FORM HEADER */}

            <div className="flex items-start justify-between border-b border-black/10 pb-7">

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/35">
                  Enquiry Form
                </p>

                <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em]">
                  Tell us a little more.
                </h3>
              </div>

              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#FF8000]" />

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="mt-2"
            >

              {/* NAME */}

              <label className="block border-b border-black/10 py-6">
                <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-black/40">
                  Full Name
                </span>

                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="Your name"
                  className="
                    mt-3
                    w-full
                    bg-transparent
                    text-[17px]
                    font-medium
                    text-[#111111]
                    outline-none
                    placeholder:text-black/25
                  "
                />
              </label>

              {/* EMAIL */}

              <label className="block border-b border-black/10 py-6">
                <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-black/40">
                  Email Address
                </span>

                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="you@example.com"
                  className="
                    mt-3
                    w-full
                    bg-transparent
                    text-[17px]
                    font-medium
                    text-[#111111]
                    outline-none
                    placeholder:text-black/25
                  "
                />
              </label>

              {/* SUBJECT */}

              <label className="block border-b border-black/10 py-6">
                <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-black/40">
                  Subject
                </span>

                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      subject: e.target.value,
                    })
                  }
                  placeholder="What can we help with?"
                  className="
                    mt-3
                    w-full
                    bg-transparent
                    text-[17px]
                    font-medium
                    text-[#111111]
                    outline-none
                    placeholder:text-black/25
                  "
                />
              </label>

              {/* MESSAGE */}

              <label className="block border-b border-black/10 py-6">
                <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-black/40">
                  Message
                </span>

                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell us a little more..."
                  className="
                    mt-3
                    w-full
                    resize-none
                    bg-transparent
                    text-[17px]
                    font-medium
                    leading-8
                    text-[#111111]
                    outline-none
                    placeholder:text-black/25
                  "
                />
              </label>

              {/* STATUS + BUTTON */}

              <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">

                <div className="min-h-6">

                  {success && (
                    <p className="text-[13px] font-medium text-[#FF8000]">
                      {success}
                    </p>
                  )}

                  {error && (
                    <p className="text-[13px] font-medium text-red-500">
                      {error}
                    </p>
                  )}

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-4
                    bg-[#111111]
                    px-7
                    py-4
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#FF8000]
                    hover:text-[#111111]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    sm:w-auto
                  "
                >
                  {loading ? "Sending..." : "Send Enquiry"}

                  <ArrowRight
                    size={15}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>

              </div>

              <p className="mt-6 text-[12px] leading-6 text-black/30">
                We&apos;ll only use your details to respond to your enquiry.
              </p>

            </form>

          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section
        data-navbar-theme="dark"
        className="bg-[#0A0A0A] text-white"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-36 lg:px-14">

          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

            <div>

              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/35">
                The road ahead
              </p>

              <h2
                className="
                  mt-7
                  max-w-4xl
                  text-[clamp(3.5rem,7vw,7rem)]
                  font-medium
                  leading-[0.86]
                  tracking-[-0.065em]
                "
              >
                Let&apos;s build
                <br />
                what comes
                <br />
                next.
              </h2>

            </div>

            <a
              href="/network"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-5
                border-b
                border-white/30
                pb-3
                text-[11px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white
                transition-colors
                duration-300
                hover:border-[#FF8000]
                hover:text-[#FF8000]
              "
            >
              Explore the Network

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}