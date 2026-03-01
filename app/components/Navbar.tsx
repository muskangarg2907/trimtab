import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Approach", href: "#approach" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-[color:var(--background)]/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-600 bg-slate-900 text-xs font-semibold tracking-[0.2em] text-[color:var(--accent)]">
            TT
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">TrimTab</span>
            <span className="text-sm font-medium text-slate-100">Leadership Advisory</span>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-sm font-medium text-slate-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn-secondary hidden md:inline-flex">
          Book a Conversation
        </Link>
      </nav>
    </header>
  );
}
