
import React, { useState } from "react";
import DocsSearchModal from "./DocsSearchModal";
import { sidebarNav } from "./sidebarNav";

// Flatten sidebarNav to get all doc titles for suggestions
const docsIndex: string[] = sidebarNav.flatMap(section => section.items.map(item => item.title));

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full flex items-center">
        <input
          id="docs-search"
          type="text"
          placeholder="Search docs... (/ to focus)"
          className="w-full rounded border border-gray-300 dark:border-dark-3/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
          onFocus={() => setOpen(true)}
          readOnly
        />
      </div>
      <DocsSearchModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default SearchBar;

