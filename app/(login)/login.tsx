"use client";

import { useActionState } from "react";
import { signIn, signUp } from "./actions";
import { useState } from "react";

export default function Login({ mode }: { mode: "signin" | "signup" }) {
  const [state, formAction] = useActionState(
    mode === "signin" ? signIn : signUp,
    undefined
  );
  const [email, setEmail] = useState("");

  return (
    <form
      className="w-full max-w-sm mx-auto p-6 bg-white rounded-xl shadow flex flex-col gap-5"
      action={formAction}
    >
      <h1 className="font-display text-2xl font-bold mb-2 text-primary text-center">
        {mode === "signin" ? "Sign in to Snapify" : "Create your Snapify Account"}
      </h1>
      <label className="text-sm font-medium">
        Email
        <input
          name="email"
          type="email"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
          placeholder="your@email.com"
        />
      </label>
      <label className="text-sm font-medium">
        Password
        <input name="password" type="password" required className="mt-1 p-2 w-full border rounded" />
      </label>
      {mode === "signup" && (
        <label className="text-sm font-medium">
          Full Name
          <input name="name" type="text" required className="mt-1 p-2 w-full border rounded" />
        </label>
      )}
      {state?.error && (
        <div className="text-red-500 font-medium text-sm text-center">
          {state.error}
        </div>
      )}
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded font-bold hover:bg-primary/90 transition mt-2"
      >
        {mode === "signin" ? "Sign in" : "Sign up"}
      </button>
      <p className="text-xs text-neutral-500 text-center mt-4">
        By continuing, you agree to Snapify’s Terms. Need help? Email{" "}
        <a href="mailto:hi@chirag.co" className="underline text-primary">hi@chirag.co</a>
      </p>
    </form>
  );
}