import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F7931A]">
          Contact
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Let's build the future of
          <span className="text-[#F7931A]"> EV charging.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
          Whether you're interested in installing chargers, partnering with
          Topup, or simply learning more, we'd love to hear from you.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-3 md:px-10">

        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
          <Mail className="h-8 w-8 text-[#F7931A]" />

          <h3 className="mt-6 text-2xl font-semibold">
            Email
          </h3>

          <p className="mt-3 text-neutral-400">
            contact.sjrventures@gmail.com
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
          <Phone className="h-8 w-8 text-[#F7931A]" />

          <h3 className="mt-6 text-2xl font-semibold">
            Phone
          </h3>

          <p className="mt-3 text-neutral-400">
            +91 95858 24943
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
          <MapPin className="h-8 w-8 text-[#F7931A]" />

          <h3 className="mt-6 text-2xl font-semibold">
            Office
          </h3>

          <p className="mt-3 text-neutral-400">
            Tamil Nadu, India
          </p>
        </div>

      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-4xl px-6 pb-28">

        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8 md:p-12">

          <h2 className="text-3xl font-semibold">
            Send us a message
          </h2>

          <p className="mt-4 text-neutral-400">
            We'll get back to you as soon as possible.
          </p>

          <form className="mt-10 space-y-6">

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#F7931A]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#F7931A]"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#F7931A]"
            />

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#F7931A]"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#F7931A] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:brightness-110"
            >
              Send Message
              <ArrowRight size={18} />
            </button>

          </form>

        </div>

      </section>
    </main>
  );
}