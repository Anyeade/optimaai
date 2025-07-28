
import MDXDocRenderer from "../MDXDocRenderer";
import { Metadata } from "next";
 export const metadata: Metadata = {
  title:
    "Trio Agent Docs | Optima AI Solutions - Your Partner in Intelligent Innovation 🚀",
  description: "Learn more about Optima AI Solutions, your partner in intelligent innovation, providing cutting-edge AI solutions for businesses of all sizes.",

icons: "/favicon.ico",
};

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
 
  const { slug } = await params;
  const slugStr = slug?.join("-") || "overview";
  return <MDXDocRenderer slug={slugStr} />;
}
