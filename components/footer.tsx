export default function Footer() {
  return (
    <footer className="w-full py-6 bg-footer_color text-center font-space border-t border-white/10">
      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} Epitome SaaS. All Rights Reserved.
      </p>
    </footer>
  );
}
