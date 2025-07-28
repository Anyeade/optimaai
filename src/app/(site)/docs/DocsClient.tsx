"use client";
import dynamic from "next/dynamic";
import DocsLayout from "@/components/Docs/DocsLayout";
import MDXRootProvider from "../MDXRootProvider";

const Quickstart = dynamic(() => import("@/content/docs/quickstart.mdx"), { ssr: false });

export default function DocsClient() {
  return (
    <DocsLayout>
      <MDXRootProvider>
        <Quickstart />
      </MDXRootProvider>
    </DocsLayout>
  );
}
