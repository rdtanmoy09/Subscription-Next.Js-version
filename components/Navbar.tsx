import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex bg-navbar justify-between items-center px-[1.8rem] py-[1.1rem] text-white font-space">
      <Link href="/" className="text-[1.5rem] text-pink-700">
        Epitome SaaS
      </Link>
      <ul className="flex p-0 gap-5 text-[1rem]">
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
    </nav>
  );
}
