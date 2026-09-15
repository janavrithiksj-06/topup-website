"use client";

import Link from "next/link";
import { ArrowRight, Check, Truck, Route, Zap, Receipt } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function FleetPartnerPage() {
  const shouldReduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    fleetType: "",
    vehicleCount: "",
    vehicleModels: "",
    operatingRoutes: "",
    currentChargingSetup: "",
    chargingLocations: "",
    chargingFrequency: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

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
          partnershipType: "Fleet Partner",
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
        fleetType: "",
        vehicleCount: "",
        vehicleModels: "",
        operatingRoutes: "",
        currentChargingSetup: "",
        chargingLocations: "",
        chargingFrequency: "",
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
                Fleet Partnership
              </span>
            </div>

            <h1 className="text-[clamp(4rem,8.5vw,9rem)] font-medium leading-[0.86] tracking-[-0.065em]">
              Charge your
              <br />
              fleet with
              <br />
              <span className="text-[#F4511E]">confidence.</span>
            </h1>

            <p className="mt-10 max-w-[680px] text-lg leading-relaxed text-black/60 md:text-xl">
              Build reliable EV charging infrastructure around your fleet,
              routes and operational requirements with Topup.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="#fleet-enquiry"
                className="group inline-flex items-center gap-4 bg-[#111111] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#F4511E]"
              >
                Discuss your fleet
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
          <div className="mb-2 text-black/60">02</div>
          Fleet
        </div>
      </section>

      {/* INTRO */}
      <section data-navbar-theme="light"className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 md:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-16 lg:py-32">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
              Built around your operation
            </span>
          </div>

          <div>
            <h2 className="max-w-[850px] text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Charging should work around your fleet — not the other way
              around.
            </h2>

            <p className="mt-8 max-w-[720px] text-lg leading-relaxed text-black/55">
              Your routes, vehicle utilisation and turnaround times determine
              where and how your fleet needs to charge. Topup works with fleet
              operators to develop charging infrastructure that fits those
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FLEET TYPES */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
              Fleet types
            </span>

            <h2 className="max-w-[850px] text-4xl font-medium leading-[1] tracking-[-0.04em] md:text-6xl">
              Infrastructure for commercial EV movement.
            </h2>
          </div>

          <div className="grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Truck,
                title: "Electric trucks",
                text: "Charging designed around long-haul and regional freight operations.",
              },
              {
                icon: Route,
                title: "Logistics fleets",
                text: "Infrastructure aligned with delivery routes, hubs and operating schedules.",
              },
              {
                icon: Zap,
                title: "Commercial EVs",
                text: "Reliable charging for businesses transitioning their vehicle operations to electric.",
              },
              {
                icon: Receipt,
                title: "Fleet operations",
                text: "Charging and billing structures designed for recurring commercial usage.",
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

      {/* WHAT TOPUP PROVIDES */}
      <section data-navbar-theme="light" className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
                The partnership
              </span>

              <p className="mt-6 max-w-[300px] text-sm leading-relaxed text-black/45">
                We can structure the charging network around the practical
                requirements of your fleet.
              </p>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
              {[
                {
                  title: "Route-based infrastructure",
                  text: "Identify strategic charging locations around your operating routes and fleet movement.",
                },
                {
                  title: "Dedicated charging",
                  text: "Explore charging arrangements designed around your fleet's recurring requirements.",
                },
                {
                  title: "Fleet billing",
                  text: "Structure charging usage and billing around your commercial operations.",
                },
                {
                  title: "High-power charging",
                  text: "Deploy charging capacity appropriate for commercial vehicles and required turnaround times.",
                },
                {
                  title: "Operational reliability",
                  text: "Build infrastructure with uptime and predictable fleet operations as key priorities.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-5 py-8 md:grid-cols-[70px_0.8fr_1.2fr] md:items-start"
                >
                  <span className="text-sm text-[#F4511E]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-xl font-medium tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="max-w-[500px] text-sm leading-relaxed text-black/50">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section data-navbar-theme="light"className="bg-[#f5f4f1]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

          <div className="mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
              How it works
            </span>

            <h2 className="mt-6 max-w-[850px] text-4xl font-medium leading-[1] tracking-[-0.04em] md:text-6xl">
              From fleet requirements to charging infrastructure.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                text: "We understand your fleet, routes, vehicle requirements and charging needs.",
              },
              {
                number: "02",
                title: "Plan",
                text: "We identify suitable charging locations and develop the infrastructure plan.",
              },
              {
                number: "03",
                title: "Deploy",
                text: "We work with the relevant partners to establish the charging infrastructure.",
              },
              {
                number: "04",
                title: "Operate",
                text: "The charging network supports your fleet as your operations grow.",
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
      <section id="fleet-enquiry" data-navbar-theme="light">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">

            {/* LEFT */}
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
                Fleet enquiry
              </span>

              <h2 className="mt-6 max-w-[500px] text-4xl font-medium leading-[1] tracking-[-0.04em] md:text-6xl">
                Tell us about your fleet.
              </h2>

              <p className="mt-8 max-w-[420px] text-base leading-relaxed text-black/50">
                Give us a few details about your fleet and operating
                requirements. Our team will get in touch to discuss the
                opportunity.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Fleet size and vehicle type",
                  "Operating routes and locations",
                  "Current charging requirements",
                  "Future electrification plans",
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
                    We&apos;ve received your fleet enquiry. Our team will
                    review the details and get back to you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="border-t border-black/15">

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

                    {/* FLEET TYPE */}
                    <label className="block cursor-pointer border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Fleet type
                      </span>

                      <select
                        name="fleetType"
                        value={form.fleetType}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-pointer bg-transparent py-2 text-base outline-none"
                      >
                        <option value="">Select fleet type</option>
                        <option value="Electric Trucks">
                          Electric Trucks
                        </option>
                        <option value="Logistics / Delivery">
                          Logistics / Delivery
                        </option>
                        <option value="Electric Buses">
                          Electric Buses
                        </option>
                        <option value="Passenger / Commercial EVs">
                          Passenger / Commercial EVs
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </label>

                    {/* VEHICLE COUNT */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Number of vehicles
                      </span>

                      <input
                        name="vehicleCount"
                        value={form.vehicleCount}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="e.g. 50"
                      />
                    </label>

                    {/* VEHICLE MODELS */}
                    <label className="block cursor-text border-b border-black/10 py-6 md:col-span-2">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Vehicle models
                      </span>

                      <input
                        name="vehicleModels"
                        value={form.vehicleModels}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="Vehicle make / model"
                      />
                    </label>

                    {/* ROUTES */}
                    <label className="block cursor-text border-b border-black/10 py-6 md:col-span-2">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Operating routes
                      </span>

                      <textarea
                        name="operatingRoutes"
                        value={form.operatingRoutes}
                        onChange={handleChange}
                        rows={3}
                        className="mt-2 block w-full resize-none bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="e.g. Chennai – Coimbatore – Bengaluru"
                      />
                    </label>

                    {/* CURRENT CHARGING */}
                    <label className="block cursor-text border-b border-black/10 py-6 md:col-span-2">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Current charging setup
                      </span>

                      <textarea
                        name="currentChargingSetup"
                        value={form.currentChargingSetup}
                        onChange={handleChange}
                        rows={3}
                        className="mt-2 block w-full resize-none bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="Tell us about your current charging infrastructure, if any."
                      />
                    </label>

                    {/* LOCATIONS */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Required charging locations
                      </span>

                      <input
                        name="chargingLocations"
                        value={form.chargingLocations}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="Cities / routes / hubs"
                      />
                    </label>

                    {/* FREQUENCY */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Charging frequency
                      </span>

                      <input
                        name="chargingFrequency"
                        value={form.chargingFrequency}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="e.g. Daily / multiple times per day"
                      />
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
                        placeholder="Tell us anything else that would help us understand your requirement."
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
                      : "Submit fleet enquiry"}

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
                Fleet infrastructure
              </span>

              <h2 className="mt-5 max-w-[800px] text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl">
                Ready to electrify
                <br />
                your fleet?
              </h2>
            </div>

            <a
              href="#fleet-enquiry"
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