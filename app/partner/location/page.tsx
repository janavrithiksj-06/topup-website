"use client";

import Link from "next/link";
import { ArrowRight, Check, MapPin, Building2, Zap, Truck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function LocationPartnerPage() {
  const shouldReduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    propertyType: "",
    powerAvailability: "",
    propertySize: "",
    roadFrontage: "",
    googleMapsLocation: "",
    preferredModel: "",
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
          partnershipType: "Location Partner",
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
        city: "",
        state: "",
        propertyType: "",
        powerAvailability: "",
        propertySize: "",
        roadFrontage: "",
        googleMapsLocation: "",
        preferredModel: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-white text-[#111111]">

      {/* HERO */}
<section
  data-navbar-theme="light"
  className="relative overflow-hidden border-b border-black/10 bg-[#f5f4f1]"
>
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
                Location Partnership
              </span>
            </div>

            <h1 className="text-[clamp(4rem,8.5vw,9rem)] font-medium leading-[0.86] tracking-[-0.065em]">
              Your location
              <br />
              could power
              <br />
              the <span className="text-[#F4511E]">road ahead.</span>
            </h1>

            <p className="mt-10 max-w-[680px] text-lg leading-relaxed text-black/60 md:text-xl">
              Turn a strategic property into an EV charging destination with
              Topup.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="#location-enquiry"
                className="group inline-flex items-center gap-4 bg-[#111111] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#F4511E]"
              >
                Discuss your location
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
          <div className="mb-2 text-black/60">01</div>
          Location
        </div>
      </section>

      {/* INTRO */}
     <section
  data-navbar-theme="light"
  className="border-b border-black/10"
>
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 md:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-16 lg:py-32">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
              Location partnership
            </span>
          </div>

          <div>
            <h2 className="max-w-[850px] text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Turn a strategic location into a charging destination.
            </h2>

            <p className="mt-8 max-w-[720px] text-lg leading-relaxed text-black/55">
              We work with property owners and businesses that have locations
              suited for EV charging. Together, we evaluate the opportunity
              and choose a commercial model that works for both sides.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE LOOK FOR */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
              What we look for
            </span>

            <h2 className="max-w-[850px] text-4xl font-medium leading-[1] tracking-[-0.04em] md:text-6xl">
              The right location can make all the difference.
            </h2>
          </div>

          <div className="grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPin,
                title: "Strategic location",
                text: "High-traffic roads, urban areas, commercial hubs and key travel corridors.",
              },
              {
                icon: Building2,
                title: "Suitable property",
                text: "Space that can accommodate chargers, parking, circulation and supporting infrastructure.",
              },
              {
                icon: Zap,
                title: "Power availability",
                text: "Existing electrical capacity or a practical path to the required power connection.",
              },
              {
                icon: Truck,
                title: "Vehicle access",
                text: "Safe and convenient access for passenger vehicles, commercial EVs or fleets.",
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

      {/* COMMERCIAL MODELS */}
      <section data-navbar-theme="light"className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
                Commercial models
              </span>

              <p className="mt-6 max-w-[300px] text-sm leading-relaxed text-black/45">
                We can structure the partnership around your property,
                investment preference and involvement.
              </p>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
              {[
                {
                  number: "01",
                  title: "Rent",
                  text: "Provide the location to Topup under an agreed rental arrangement.",
                },
                {
                  number: "02",
                  title: "Revenue Sharing",
                  text: "Share in the charging revenue generated from the location.",
                },
                {
                  number: "03",
                  title: "Invest & Share",
                  text: "Participate in the investment and share in the economics of the charging station.",
                },
              ].map((model) => (
                <div
                  key={model.title}
                  className="grid gap-5 py-8 md:grid-cols-[70px_0.8fr_1.2fr] md:items-start"
                >
                  <span className="text-sm text-[#F4511E]">
                    {model.number}
                  </span>

                  <h3 className="text-xl font-medium tracking-[-0.02em]">
                    {model.title}
                  </h3>

                  <p className="max-w-[500px] text-sm leading-relaxed text-black/50">
                    {model.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="location-enquiry" data-navbar-theme="light">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">

            {/* LEFT */}
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4511E]">
                Location enquiry
              </span>

              <h2 className="mt-6 max-w-[500px] text-4xl font-medium leading-[1] tracking-[-0.04em] md:text-6xl">
                Tell us about your location.
              </h2>

              <p className="mt-8 max-w-[420px] text-base leading-relaxed text-black/50">
                Share a few details about your property and location. Our
                team will review the opportunity and get in touch.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Location and property details",
                  "Power availability",
                  "Road access and frontage",
                  "Preferred commercial model",
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
                    We&apos;ve received your location enquiry. Our team will
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
                        Company
                      </span>

                      <input
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

                    {/* CITY */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        City *
                      </span>

                      <input
                        required
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="City"
                      />
                    </label>

                    {/* STATE */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        State *
                      </span>

                      <input
                        required
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="State"
                      />
                    </label>

                    {/* PROPERTY TYPE */}
                    <label className="block cursor-pointer border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Property type
                      </span>

                      <select
                        name="propertyType"
                        value={form.propertyType}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-pointer bg-transparent py-2 text-base outline-none"
                      >
                        <option value="">Select property type</option>
                        <option value="Highway / Roadside">
                          Highway / Roadside
                        </option>
                        <option value="Commercial Property">
                          Commercial Property
                        </option>
                        <option value="Hotel / Hospitality">
                          Hotel / Hospitality
                        </option>
                        <option value="Retail / Shopping">
                          Retail / Shopping
                        </option>
                        <option value="Industrial Property">
                          Industrial Property
                        </option>
                        <option value="Fuel Station">
                          Fuel Station
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </label>

                    {/* POWER */}
                    <label className="block cursor-pointer border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Power availability
                      </span>

                      <select
                        name="powerAvailability"
                        value={form.powerAvailability}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-pointer bg-transparent py-2 text-base outline-none"
                      >
                        <option value="">Select availability</option>
                        <option value="Available">Available</option>
                        <option value="Can be upgraded">
                          Can be upgraded
                        </option>
                        <option value="Not sure">Not sure</option>
                        <option value="Not available">
                          Not available
                        </option>
                      </select>
                    </label>

                    {/* PROPERTY SIZE */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Property size
                      </span>

                      <input
                        name="propertySize"
                        value={form.propertySize}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="Approx. sq. ft. / acres"
                      />
                    </label>

                    {/* ROAD FRONTAGE */}
                    <label className="block cursor-text border-b border-black/10 py-6">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Road frontage
                      </span>

                      <input
                        name="roadFrontage"
                        value={form.roadFrontage}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="Approx. frontage"
                      />
                    </label>

                    {/* MAPS */}
                    <label className="block cursor-text border-b border-black/10 py-6 md:col-span-2">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Google Maps location
                      </span>

                      <input
                        name="googleMapsLocation"
                        value={form.googleMapsLocation}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-text bg-transparent py-2 text-base outline-none placeholder:text-black/25"
                        placeholder="Paste Google Maps link"
                      />
                    </label>

                    {/* MODEL */}
                    <label className="block cursor-pointer border-b border-black/10 py-6 md:col-span-2">
                      <span className="block text-xs uppercase tracking-[0.15em] text-black/45">
                        Preferred commercial model
                      </span>

                      <select
                        name="preferredModel"
                        value={form.preferredModel}
                        onChange={handleChange}
                        className="mt-2 block w-full cursor-pointer bg-transparent py-2 text-base outline-none"
                      >
                        <option value="">Select a model</option>
                        <option value="Rent">Rent</option>
                        <option value="Revenue Sharing">
                          Revenue Sharing
                        </option>
                        <option value="Invest & Share">
                          Invest & Share
                        </option>
                        <option value="Not sure">
                          Not sure — discuss options
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
                        placeholder="Tell us anything else about the location."
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
                      : "Submit location enquiry"}

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
                Location partnership
              </span>

              <h2 className="mt-5 max-w-[800px] text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl">
                Have a location?
                <br />
                Let&apos;s talk.
              </h2>
            </div>

            <a
              href="#location-enquiry"
              className="group inline-flex w-fit items-center gap-4 bg-white px-7 py-4 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
            >
              Submit your location
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