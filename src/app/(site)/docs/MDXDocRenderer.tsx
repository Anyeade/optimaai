"use client";
import dynamic from "next/dynamic";
import MDXRootProvider from "../MDXRootProvider";
import DocsLayout from "@/components/Docs/DocsLayout";

export default function MDXDocRenderer({ slug }: { slug: string }) {
  const Content = dynamic(() => import(`@/content/docs/${slug}.mdx`), { ssr: false });
  return (
    <DocsLayout>
      <MDXRootProvider>
        <Content />
      </MDXRootProvider>
    </DocsLayout>
  );
}
