"use client"; // Required for interactivity
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // This effect adds/removes the "dark" class to the very top of your HTML
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-app-bg text-app-fg border-b border-border-subtle transition-colors duration-300">
      <span className="text-xl font-bold font-space text-[1.5rem] text-pink-700">
        Epitome SaaS
      </span>

      <div className="flex items-center gap-6">
        <ul className="flex gap-4 font-space text-[1rem]">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Service</Link>
          </li>
          <li>
            <Link href="/">Term</Link>
          </li>
          <li>
            <Link href="/">Privacy</Link>
          </li>
        </ul>

        {/* The Dark Mode Switcher */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
