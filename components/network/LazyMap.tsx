"use client";

import dynamic from "next/dynamic";

const FakeMap = dynamic(
  () => import("@/components/network/FakeMap"),
  {
    ssr: false,
    loading: () => (
      <div
        className="
          flex
          h-[55vh]
          w-full
          items-center
          justify-center
          bg-[#0c0c0c]
          md:h-[70vh]
        "
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/40">
          Loading network
        </p>
      </div>
    ),
  }
);

export default function LazyMap() {
  return <FakeMap />;
}