export const metadata = {
  title: "Page Not Found | Snapify",
  description: "Sorry, we couldn't find the page you were looking for – Snapify API.",
};

export default function NotFoundPage() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center py-28">
      <h1 className="font-display text-4xl font-bold mb-4 text-primary">404 – Not Found</h1>
      <p className="text-neutral-600 mb-8">
        Sorry, we couldn't find the page you were looking for.<br />
        Go back to{" "}
        <a href="/" className="text-primary underline hover:text-primary/80 transition">Snapify home</a>.
      </p>
    </main>
  );
}