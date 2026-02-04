"use client";

import Hero from "@/components/hero";
import Footer from "@/components/footer";

// In your page.tsx
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
