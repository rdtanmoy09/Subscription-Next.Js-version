export default function Footer() {
  return (
    /* Change: added text-app-fg and bg-app-bg */
    <footer className="w-full py-6 bg-app-bg text-app-fg text-center font-space border-t border-border-subtle">
      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} Epitome SaaS. All Rights Reserved.
      </p>
    </footer>
  );
}
