import { ReactNode } from "react";
import { Manrope } from "next/font/google";

const font = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function DashboardShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={`min-h-screen flex flex-col bg-neutral-50 ${font.variable}`}>
      <header className="w-full px-6 md:px-12 py-6 flex items-center justify-between border-b border-neutral-200 bg-white shadow-sm">
        <span className="font-display font-bold text-lg text-primary">Snapify</span>
        <nav className="flex items-center gap-8 text-sm font-medium text-neutral-900">
          <a href="/dashboard" className="hover:text-primary transition">
            Dashboard
          </a>
          <a href="/dashboard/pricing" className="hover:text-primary transition">
            Pricing
          </a>
        </nav>
      </header>
      <main className="flex-1 w-full">{children}</main>
      <footer className="w-full py-5 text-center text-xs text-neutral-400 mt-auto font-mono bg-white border-t border-neutral-200">
        &copy; {new Date().getFullYear()} Snapify. All rights reserved.
      </footer>
    </div>
  );
}