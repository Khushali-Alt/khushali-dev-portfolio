import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/portfolio";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between border-2 border-foreground bg-background/95 px-4 py-3 shadow-editorial backdrop-blur-md">
        <a href="#home" className="flex items-center gap-3 font-extrabold">
          <span className="grid size-9 place-items-center border-2 border-foreground bg-pop text-xs">KT</span>
          <span>khushali.dev</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} aria-current={active === item.id ? "page" : undefined} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="icon-button lg:hidden">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {open ? (
        <div className="mx-auto mt-2 max-w-7xl border-2 border-foreground bg-card p-2 shadow-editorial lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className="block border-b border-border px-4 py-3 text-sm font-bold last:border-0">
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}