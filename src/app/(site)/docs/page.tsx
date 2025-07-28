
import { Metadata } from "next";
import DocsClient from "./DocsClient";

export const metadata: Metadata = {
  title:
    "Trio Agent Docs | Optima AI Solutions - Your Partner in Intelligent Innovation 🚀",
  description: "Learn more about Optima AI Solutions, your partner in intelligent innovation, providing cutting-edge AI solutions for businesses of all sizes.",
  icons: "/favicon.ico"
};

export default function DocsPage() {
  return <DocsClient />;
}

