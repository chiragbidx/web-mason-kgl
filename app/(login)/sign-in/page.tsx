import { Metadata } from "next";
import Login from "../login";

export const metadata: Metadata = {
  title: "Sign In | Snapify",
  description: "Sign in to your Snapify Screenshot API dashboard.",
};

export default function SignInPage() {
  return <Login mode="signin" />;
}