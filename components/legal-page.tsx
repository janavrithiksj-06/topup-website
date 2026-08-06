import { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  children: ReactNode;
}

export default function LegalPage({
  title,
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="mb-10 text-4xl font-bold">{title}</h1>

        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </main>
  );
}