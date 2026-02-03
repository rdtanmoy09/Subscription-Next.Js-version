"use client";

import { useState } from "react";
import Link from "next/link";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Footer />
    </main>
  );
}
