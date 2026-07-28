"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7931A]/10">
          <Search className="h-5 w-5 text-[#F7931A]" />
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-900">
            Search by city, highway or destination
          </p>

          <p className="mt-1 text-sm text-neutral-500">
            Available soon with the launch of the Topup network.
          </p>
        </div>

        <span className="rounded-full border border-[#F7931A]/20 bg-[#F7931A]/8 px-4 py-2 text-sm font-medium text-[#F7931A]">
          Coming Soon
        </span>

      </div>
    </div>
  );
}