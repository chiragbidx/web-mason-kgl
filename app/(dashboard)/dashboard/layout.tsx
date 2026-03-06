import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Overview", href: "/dashboard" },
  { name: "General", href: "/dashboard/general" },
  { name: "Activity", href: "/dashboard/activity" },
  { name: "Security", href: "/dashboard/security" },
  { name: "Billing", href: "/dashboard/pricing" },
];

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-neutral-50">
      <aside className="w-full md:w-56 bg-white shadow-sm md:min-h-screen px-4 py-6 md:py-8 border-b md:border-b-0 md:border-r border-neutral-200 flex md:flex-col gap-3 md:gap-7 justify-between md:justify-start items-center md:items-stretch z-20">
        <Link href="/dashboard" className="flex items-center gap-2 mb-3 md:mb-8 select-none">
          {/* Replace with Snapify logo/icon if available */}
          <span className="font-display text-xl font-bold tracking-tight text-primary">
            Snapify
          </span>
          <span className="text-xs font-semibold text-primary/60 hidden md:inline ml-1">
            API Screenshots
          </span>
        </Link>
        <nav className="flex md:flex-col gap-2 md:gap-1 w-full">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-1.5 rounded font-medium text-sm transition-colors",
                "hover:bg-primary/5 text-neutral-800"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block mt-auto text-xs text-neutral-400 select-none font-mono">
          &copy; {new Date().getFullYear()} Snapify
        </div>
      </aside>
      <main className="flex-1 min-w-0 w-full">{children}</main>
    </div>
  );
}