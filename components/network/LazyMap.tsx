"use client";

import dynamic from "next/dynamic";

const FakeMap = dynamic(
  () => import("@/components/network/FakeMap"),
  {
    ssr: false,
  }
);

export default function LazyMap() {
  return <FakeMap />;
}