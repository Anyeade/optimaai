"use client";
import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "./components/mdx-components";

export default function MDXRootProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
}
