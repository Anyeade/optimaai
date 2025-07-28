import Table from "@/components/Common/Table";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  table: (props) => <Table {...props} />,
};
