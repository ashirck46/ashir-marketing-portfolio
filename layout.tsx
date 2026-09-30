import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.positioning,
};

// Sets the theme before first paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
