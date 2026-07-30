import FadeIn from "./FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Find",
    text: "See what's available before you leave. No unnecessary detours.",
  },
  {
    number: "02",
    title: "Plug In",
    text: "Fast, reliable charging designed to get you moving again.",
  },
  {
    number: "03",
    title: "Take Five",
    text: "Grab a coffee, stretch your legs, or simply enjoy the pause.",
  },
  {
    number: "04",
    title: "Drive On",
    text: "Recharge your car and continue your journey with confidence.",
  },
];

export default function BuiltForTheRoad() {
  return (
    <FadeIn>
      <section className="relative overflow-hidden bg-[#F6F2EA] text-[#111111]">
        {/* Subtle glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-220px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#B89B5E]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-8 py-36">
          {/* Label */}
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#A88A4A]">
            Built for the Road
          </p>

          {/* Heading */}
          <h2 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            One good stop.
            <br />
            That's all your
            <br />
            journey should need.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-600">
            Charging shouldn't interrupt the drive. It should simply become
            part of it.
          </p>

          {/* Divider */}
          <div className="my-24 h-px bg-[#DDD5C8]" />

          {/* Steps */}
          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.number} className="group">
                <p className="text-6xl font-light text-[#C8BA98] transition duration-300 group-hover:text-[#A88A4A]">
                  {step.number}
                </p>

                <h3 className="mt-6 text-3xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom statement */}
          <div className="mt-28 border-t border-[#DDD5C8] pt-12">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="text-3xl font-medium leading-relaxed">
                  Less waiting.
                  <br />
                  More driving.
                </p>

                <p className="mt-4 text-neutral-500">
                  That's the experience we're building.
                </p>
              </div>

              <Link
                href="/network"
                className="group inline-flex items-center gap-3 rounded-full border border-black px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
              >
                Explore Network
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}