import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Info | Snapify",
  description: "Update your account information for Snapify.",
};

export default function GeneralSettingsPage() {
  // ...existing code...
  return (
    <section>
      <h1 className="font-display text-2xl font-bold mb-4">Account Information</h1>
      <div className="mb-6">
        <p>
          Owner: <span className="font-medium">Chirag Dodiya</span>
        </p>
        <p>
          Contact: <a href="mailto:hi@chirag.co" className="text-primary underline">hi@chirag.co</a>
        </p>
      </div>
      {/* ...rest of the account/general info form... */}
    </section>
  );
}