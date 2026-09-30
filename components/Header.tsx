import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/content";

const links = [
  ["Work", "#work"], ["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-lg">{profile.name}</a>
        <nav className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-mute md:flex">
            {links.map(([label, href]) => (
              <li key={href}><a href={href} className="transition-colors hover:text-ink">{label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="text-sm text-accent md:hidden">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
