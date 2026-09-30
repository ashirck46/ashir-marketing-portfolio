"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      className="rounded-full border border-line px-3 py-1.5 text-sm text-mute transition-colors hover:border-accent hover:text-ink"
    >
      <span className="dark:hidden">Dark</span>
      <span className="hidden dark:inline">Light</span>
    </button>
  );
}
