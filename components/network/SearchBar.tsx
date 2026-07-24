"use client";

import { Search, MapPin } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mx-auto -mt-10 max-w-4xl px-6 relative z-20">
      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-900/90 p-3 shadow-2xl backdrop-blur-xl">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F7931A]/15">
          <Search className="h-5 w-5 text-[#F7931A]" />
        </div>

        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Search
          </p>

          <div className="mt-1 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-neutral-500" />
            <span className="text-neutral-300">
              Charging stations coming soon...
            </span>
          </div>
        </div>

        <button
          disabled
          className="rounded-xl bg-[#F7931A] px-6 py-3 font-semibold text-black opacity-60 cursor-not-allowed"
        >
          Coming Soon
        </button>

      </div>
    </div>
  );
}