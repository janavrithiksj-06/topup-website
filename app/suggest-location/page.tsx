"use client";

import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

export default function SuggestLocationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    mapsLink: "",
    propertyType: "",
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
      const res = await fetch("/api/suggest-location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setSuccess("Thanks. We've received your location suggestion.");

      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        mapsLink: "",
        propertyType: "",
        message: "",
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F5F2] text-[#111111]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        data-navbar-theme="light"
        className="
          mx-auto
          max-w-[1500px]
          px-6
          pb-16
          pt-36
          md:px-10
          md:pb-20
          md:pt-44
          lg:px-14
        "
      >
        <div className="max-w-4xl">

          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#FF8000]">
            Suggest a Location
          </p>

          <h1
            className="
              mt-6
              max-w-5xl
              text-[clamp(3.5rem,7vw,7rem)]
              font-medium
              leading-[0.86]
              tracking-[-0.065em]
            "
          >
            Know a place
            <br />
            that needs Topup?
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              text-base
              leading-7
              text-black/55
              md:text-lg
            "
          >
            Help us decide where to build next. Tell us about a highway,
            hotel, restaurant, commercial property, or any location that
            could benefit from reliable EV charging.
          </p>

        </div>
      </section>

      {/* =====================================================
          FORM
      ===================================================== */}

      <section
        data-navbar-theme="light"
        className="
          mx-auto
          max-w-[1500px]
          px-6
          pb-28
          md:px-10
          md:pb-36
          lg:px-14
        "
      >
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          {/* LEFT INFORMATION */}

          <div className="lg:pt-6">

            <div className="flex items-center gap-3">
              <MapPin
                size={17}
                strokeWidth={1.5}
                className="text-[#FF8000]"
              />

              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/35">
                Help Us Grow
              </p>
            </div>

            <h2
              className="
                mt-6
                max-w-md
                text-4xl
                font-medium
                leading-[0.92]
                tracking-[-0.05em]
                md:text-5xl
              "
            >
              A better
              <br />
              network starts
              <br />
              with the right
              <br />
              locations.
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-7 text-black/45">
              We&apos;re looking for locations where EV drivers can easily
              stop, charge and continue their journey.
            </p>

            <div className="mt-10 border-t border-black/10 pt-6">

              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-black/30">
                Good locations include
              </p>

              <ul className="mt-4 space-y-2 text-sm text-black/50">
                <li>• Highways and major roads</li>
                <li>• Hotels and restaurants</li>
                <li>• Malls and commercial destinations</li>
                <li>• Existing parking facilities</li>
              </ul>

            </div>

          </div>

          {/* FORM */}

          <div
            className="
              rounded-[28px]
              border
              border-black/10
              bg-white
              p-6
              shadow-[0_18px_55px_rgba(0,0,0,0.055)]
              md:p-9
              lg:p-11
            "
          >

            {/* HEADER */}

            <div
              className="
                flex
                items-start
                justify-between
                border-b
                border-black/10
                pb-6
              "
            >
              <div>

                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/35">
                  Location Details
                </p>

                <h3 className="mt-2 text-xl font-medium tracking-[-0.025em]">
                  Tell us about the location.
                </h3>

              </div>

              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF8000]" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-1"
            >

              {/* NAME */}

              <label className="block border-b border-black/10 py-5">
                <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-black/40">
                  Your Name
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
                    text-[16px]
                    font-medium
                    text-[#111111]
                    outline-none
                    placeholder:text-black/25
                  "
                />
              </label>

              {/* EMAIL + PHONE */}

              <div className="grid md:grid-cols-2 md:gap-8">

                <label className="block border-b border-black/10 py-5">
                  <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-black/40">
                    Email
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
                      text-[16px]
                      font-medium
                      text-[#111111]
                      outline-none
                      placeholder:text-black/25
                    "
                  />
                </label>

                <label className="block border-b border-black/10 py-5">
                  <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-black/40">
                    Phone
                  </span>

                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                    placeholder="+91"
                    className="
                      mt-3
                      w-full
                      bg-transparent
                      text-[16px]
                      font-medium
                      text-[#111111]
                      outline-none
                      placeholder:text-black/25
                    "
                  />
                </label>

              </div>

              {/* LOCATION */}

              <label className="block border-b border-black/10 py-5">
                <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-black/40">
                  Location
                </span>

                <input
                  type="text"
                  required
                  value={form.location}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      location: e.target.value,
                    })
                  }
                  placeholder="City, area, highway, or address"
                  className="
                    mt-3
                    w-full
                    bg-transparent
                    text-[16px]
                    font-medium
                    text-[#111111]
                    outline-none
                    placeholder:text-black/25
                  "
                />
              </label>

              {/* GOOGLE MAPS */}

              <label className="block border-b border-black/10 py-5">
                <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-black/40">
                  Google Maps Link
                </span>

                <input
                  type="url"
                  value={form.mapsLink}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      mapsLink: e.target.value,
                    })
                  }
                  placeholder="Paste the Google Maps link"
                  className="
                    mt-3
                    w-full
                    bg-transparent
                    text-[16px]
                    font-medium
                    text-[#111111]
                    outline-none
                    placeholder:text-black/25
                  "
                />
              </label>

              {/* PROPERTY TYPE */}

              <label className="block border-b border-black/10 py-5">
                <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-black/40">
                  Location Type
                </span>

                <select
                  required
                  value={form.propertyType}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      propertyType: e.target.value,
                    })
                  }
                  className="
                    mt-3
                    w-full
                    appearance-none
                    bg-transparent
                    text-[16px]
                    font-medium
                    text-[#111111]
                    outline-none
                  "
                >
                  <option value="" disabled>
                    Select location type
                  </option>
                  <option value="Highway / Major Road">
                    Highway / Major Road
                  </option>
                  <option value="Hotel / Resort">
                    Hotel / Resort
                  </option>
                  <option value="Restaurant / Cafe">
                    Restaurant / Cafe
                  </option>
                  <option value="Mall / Commercial Property">
                    Mall / Commercial Property
                  </option>
                  <option value="Parking Facility">
                    Parking Facility
                  </option>
                  <option value="Fuel Station">
                    Fuel Station
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </label>

              {/* MESSAGE */}

              <label className="block border-b border-black/10 py-5">
                <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-black/40">
                  Why This Location?
                </span>

                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell us why you think this would be a good charging location."
                  className="
                    mt-3
                    w-full
                    resize-none
                    bg-transparent
                    text-[16px]
                    font-medium
                    leading-7
                    text-[#111111]
                    outline-none
                    placeholder:text-black/25
                  "
                />
              </label>

              {/* SUBMIT */}

              <div className="pt-7">

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
                    mt-4
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
                  "
                >
                  {loading ? "Sending..." : "Suggest Location"}

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

                <p className="mt-4 text-[11px] leading-5 text-black/30">
                  Your information will only be used to evaluate the suggested
                  location and contact you if needed.
                </p>

              </div>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}