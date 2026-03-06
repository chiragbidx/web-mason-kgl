import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SWRConfig } from "swr";
import { cookies } from "next/headers";

const font = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snapify – Screenshot & PDF API",
  description:
    "Snapify: Convert any URL to an image or PDF with a simple, pay-per-request API. Perfect for SEO, monitoring, directories, and automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ... existing SWRConfig/cookie logic
  return (
    <html lang="en" className={font.variable}>
      <body>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
            fallback: {},
          }}
        >
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}