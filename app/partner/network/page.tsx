"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Network,
  Zap,
  MapPin,
  Gauge,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function NetworkPartnerPage() {
  const shouldReduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    infrastructureType: "",
    chargerCount: "",
    chargerCapacity: "",
    locations: "",
    currentNetwork: "",
    partnershipInterest: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          partnershipType: "Network Partner",
          ...form,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");

      setForm({
        name: "",
        company: "",
        phone: "",
        email: "",
        infrastructureType: "",
        chargerCount: "",
        chargerCapacity: "",
        locations: "",
        currentNetwork: "",
        partnershipInterest: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-white text-[#111111]">

      {/* HERO */}
      <section data-navbar-theme="light" className="relative overflow-hidden border-b border-black/10 bg-[#f5f4f1]">
        <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 lg:px-16 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[1000px]"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F4511E]" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/55">
                Network Partnership
              </span>
            </div>

            <h1 className="text-[clamp(4rem,8.5vw,9rem)] font-medium leading-[0.86] tracking-[-0.065em]">
              Connect your
              <br />
              charging
              <br />
              <span className="text-[#F4511E]">network.</span>
            </h1>

            <p className="mt-10 max-w-[680px] text-lg leading-relaxed text-black/60 md:text-xl">
              Already operate EV charging infrastructure? Partner with Topup
              to connect, expand and create more value from your network.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="#network-enquiry"
                className="group inline-flex items-center gap-4 bg-[#111111] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#F4511E]"
              >
                Discuss your network
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/partner"
                className="inline-flex items-center gap-2 border-b border-black/40 pb-1 text-sm font-medium transition-colors hover:border-[#F4511E] hover:text-[#F4511E]"
              >
                View all partnerships
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 right-8 hidden text-right text-xs uppercase tracking-[0.18em] text-black/35 lg:block">
          <div className="mb-2 text-black/60">04</div>
          Network
        </div>
      </section>

      {/* INTRO */}
      <section data-navbar-theme="light"className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 md:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-16 lg:py-32">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
              Network partnership
            </span>
          </div>

          <div>
            <h2 className="max-w-[850px] text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Bring your charging infrastructure into a larger network.
            </h2>

            <p className="mt-8 max-w-[720px] text-lg leading-relaxed text-black/55">
              If you already operate EV chargers or charging locations, Topup
              can work with you to explore ways to connect your infrastructure
              with a broader charging network.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THIS CAN INCLUDE */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

          <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
              The opportunity
            </span>

            <h2 className="max-w-[850px] text-4xl font-medium leading-[1] tracking-[-0.04em] md:text-6xl">
              Make your existing infrastructure work harder.
            </h2>
          </div>

          <div className="grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Network,
                title: "Network expansion",
                text: "Connect your charging locations with a wider network and reach more EV users.",
              },
              {
                icon: Zap,
                title: "Charging infrastructure",
                text: "Bring existing charging assets and infrastructure into potential partnership opportunities.",
              },
              {
                icon: MapPin,
                title: "More locations",
                text: "Explore opportunities to expand your charging footprint into strategic locations.",
              },
              {
                icon: Gauge,
                title: "Better utilisation",
                text: "Explore ways to increase visibility and utilisation of your existing charging assets.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="bg-[#111111] p-8 md:p-10">
                  <Icon
                    size={25}
                    strokeWidth={1.4}
                    className="text-[#F4511E]"
                  />

                  <h3 className="mt-12 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section data-navbar-theme="light" className="bg-[#f5f4f1]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

          <div className="mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
              How it works
            </span>

            <h2 className="mt-6 max-w-[850px] text-4xl font-medium leading-[1] tracking-[-0.04em] md:text-6xl">
              From your existing network to a potential partnership.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "Tell us",
                text: "Share details about your existing charging infrastructure and network.",
              },
              {
                number: "02",
                title: "Evaluate",
                text: "We assess the infrastructure, locations and potential partnership opportunities.",
              },
              {
                number: "03",
                title: "Connect",
                text: "We agree on how the infrastructure and network can work together.",
              },
              {
                number: "04",
                title: "Grow",
                text: "Explore opportunities to expand the network and create more value.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="border-t border-black/15 pt-6"
              >
                <span className="text-sm text-[#F4511E]">
                  {step.number}
                </span>

                <h3 className="mt-8 text-xl font-medium">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-black/50">
                  {step.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="network-enquiry" data-navbar-theme="light">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">

            {/* LEFT */}
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
                Network enquiry
              </span>

              <h2 className="mt-6 max-w-[500px] text-4xl font-medium leading-[1] tracking-[-0.04em] md:text-6xl">
                Tell us about your network.
              </h2>

              <p className="mt-8 max-w-[420px] text-base leading-relaxed text-black/50">
                Share a few details about your existing charging
                infrastructure and what you&apos;re looking to achieve.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Existing charging infrastructure",
                  "Number and type of chargers",
                  "Current locations",
                  "Partnership objectives",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check
                      size={17}
                      className="mt-0.5 shrink-0 text-[#F4511E]"
                    />
                    <span className="text-sm text-black/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div>
              {status === "success" ? (
                <div className="border border-black/10 bg-[#f5f4f1] p-10 md:p-14">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#F4511E] text-white">
                    <Check size={23} />
                  </div>

                  <h3 className="mt-8 text-3xl font-medium tracking-[-0.03em]">
                    Thank you.
                  </h3>

                  <p className="mt-4 max-w-[500px] text-base leading-relaxed text-black/55">
                    We&apos;ve received your network enquiry. Our team will
                    review the details and get back to you.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border-t border-black/15"
                >

                  <div className="grid gap-x-8 md:grid-cols-2">

                    {/* NAME */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Name *
                      </span>

                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="Your name"
                      />
                    </label>

                    {/* COMPANY */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Company *
                      </span>

                      <input
                        required
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="Company name"
                      />
                    </label>

                    {/* PHONE */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Phone *
                      </span>

                      <input
                        required
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="+91"
                      />
                    </label>

                    {/* EMAIL */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Email *
                      </span>

                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="you@company.com"
                      />
                    </label>

                    {/* INFRASTRUCTURE TYPE */}
                    <label className="block cursor-pointer border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Infrastructure type
                      </span>

                      <select
                        name="infrastructureType"
                        value={form.infrastructureType}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-pointer bg-transparent py-2 text-base outline-none"
                      >
                        <option value="">
                          Select infrastructure type
                        </option>
                        <option value="Public Charging">
                          Public Charging
                        </option>
                        <option value="Fleet Charging">
                          Fleet Charging
                        </option>
                        <option value="Highway Charging">
                          Highway Charging
                        </option>
                        <option value="Destination Charging">
                          Destination Charging
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </label>

                    {/* CHARGER COUNT */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Number of chargers
                      </span>

                      <input
                        name="chargerCount"
                        value={form.chargerCount}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="e.g. 10"
                      />
                    </label>

                    {/* CAPACITY */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Charger capacity
                      </span>

                      <input
                        name="chargerCapacity"
                        value={form.chargerCapacity}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="e.g. 60 kW / 120 kW"
                      />
                    </label>

                    {/* LOCATIONS */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Locations
                      </span>

                      <input
                        name="locations"
                        value={form.locations}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="Cities / states / corridors"
                      />
                    </label>

                    {/* CURRENT NETWORK */}
                    <label className="block cursor-text border-b border-black/10 py-6 md:col-span-2">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Tell us about your current network
                      </span>

                      <textarea
                        name="currentNetwork"
                        value={form.currentNetwork}
                        onChange={handleChange}
                        rows={4}
                        className="mt-2 block w-full resize-none bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="Tell us about your existing charging network, locations and operations."
                      />
                    </label>

                    {/* PARTNERSHIP INTEREST */}
                    <label className="block cursor-pointer border-b border-black/10 py-6 md:col-span-2">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        What are you looking for?
                      </span>

                      <select
                        name="partnershipInterest"
                        value={form.partnershipInterest}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-pointer bg-transparent py-2 text-base outline-none"
                      >
                        <option value="">
                          Select an option
                        </option>
                        <option value="Network integration">
                          Network integration
                        </option>
                        <option value="Network expansion">
                          Network expansion
                        </option>
                        <option value="New locations">
                          New locations
                        </option>
                        <option value="Fleet partnerships">
                          Fleet partnerships
                        </option>
                        <option value="Other">
                          Other
                        </option>
                      </select>
                    </label>

                    {/* MESSAGE */}
                    <label className="block cursor-text border-b border-black/10 py-6 md:col-span-2">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Anything else?
                      </span>

                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className="mt-2 block w-full resize-none bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="Tell us anything else about the partnership."
                      />
                    </label>
                  </div>

                  {status === "error" && (
                    <p className="mt-6 text-sm text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group mt-10 inline-flex items-center gap-4 bg-[#111111] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#F4511E] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "loading"
                      ? "Sending..."
                      : "Submit network enquiry"}

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4511E] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                Network partnership
              </span>

              <h2 className="mt-5 max-w-[800px] text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl">
                Already have
                <br />
                charging infrastructure?
              </h2>
            </div>

            <a
              href="#network-enquiry"
              className="group inline-flex w-fit items-center gap-4 bg-white px-7 py-4 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
            >
              Start a conversation
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}