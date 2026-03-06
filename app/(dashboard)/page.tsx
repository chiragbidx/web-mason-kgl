import Image from "next/image";

export const metadata = {
  title: "Snapify – Instant Website Screenshot & PDF API",
  description:
    "Snapify offers fast, reliable Screenshot & PDF APIs. Convert any URL into a high-quality image or PDF — perfect for SEO, monitoring, directories, and automation. Simple API. Pay per request.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 md:px-10 pb-24">
      <section className="relative flex flex-col items-center text-center gap-7 pt-14 pb-16 md:pt-20 md:pb-28">
        <span className="text-xs tracking-widest uppercase font-semibold text-primary/70">URL to Image/PDF API</span>
        <h1 className="font-display text-balance text-4xl/tight md:text-5xl/tight font-bold">
          Snapify: <span className="text-primary">Instantly Capture Any Website</span>
        </h1>
        <p className="mx-auto max-w-3xl text-neutral-500 md:text-lg font-medium">
          The simplest API to turn URLs into screenshots or PDFs. Snapify is engineered for SEO, monitoring, directories, & automation tools. Pay only for what you use.
        </p>
        <a
          className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-primary px-8 font-medium text-white shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 transition"
          href="/sign-up"
        >
          Get Started Free
        </a>
        <div className="relative w-full mt-6 md:mt-10 h-[340px] md:h-[420px]">
          <Image
            src="/screenshot-demo.png"
            alt="Snapify API – Website Screenshot Example"
            className="rounded-xl border border-gray-200 shadow-xl object-cover"
            fill
            sizes="(min-width: 768px) 800px, 100vw"
            priority
          />
        </div>
      </section>

      <section className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-9 text-left">
        <div>
          <h2 className="font-semibold mb-2 text-primary text-lg">Flexible API</h2>
          <p className="text-neutral-700">
            Simple, predictable REST API — capture screenshots or PDFs of any public URL in seconds. Works with any language, no auth headaches, easy integration.
          </p>
        </div>
        <div>
          <h2 className="font-semibold mb-2 text-primary text-lg">Pay Per Capture</h2>
          <p className="text-neutral-700">
            Transparent usage billing. Only pay for what you use—no upfront contracts, unlimited scale. Perfect for SEO, monitoring, & automation workflows.
          </p>
        </div>
        <div>
          <h2 className="font-semibold mb-2 text-primary text-lg">Fast & Reliable</h2>
          <p className="text-neutral-700">
            Snapify delivers high-resolution images or PDFs in milliseconds, with global infrastructure and enterprise security powering every request.
          </p>
        </div>
      </section>

      <section className="mt-20 md:mt-32">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
          <div className="flex-1">
            <h2 className="text-2xl font-bold font-display mb-4 text-primary">
              Built for Developers & Marketers
            </h2>
            <ul className="list-disc pl-6 text-neutral-700 text-base space-y-2">
              <li>SEO: Automate Open Graph images, directory thumbnails, & audits</li>
              <li>Monitoring: Visual change detection in real-time</li>
              <li>Directories: Enhance listings with live previews</li>
              <li>Automation: Integrate screenshots into flows, reports, or CRM</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/api-example-light.png"
              alt="Snapify API Request Example"
              className="rounded-lg border border-gray-200 object-contain shadow"
              width={500}
              height={330}
            />
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-32 flex flex-col gap-7 items-center text-center max-w-3xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-primary">Integrate Snapify in Minutes</h2>
        <p className="text-neutral-600">
          Get your API key instantly. Add website capture to any stack — no complex setup, no headaches. Track usage, manage billing, and download assets right from your dashboard.
        </p>
        <a
          className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-primary px-8 font-medium text-white shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 transition"
          href="/sign-up"
        >
          Try Snapify Free
        </a>
      </section>
    </main>
  );
}