
import React, { useState } from "react";
import DocsSearchModal from "./DocsSearchModal";
import { sidebarNav } from "./sidebarNav";

// Flatten sidebarNav to get all doc titles for suggestions
const docsIndex: string[] = sidebarNav.flatMap(section => section.items.map(item => item.title));

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div
          className="relative w-full max-w-xl bg-white/60 dark:bg-dark-2/60 backdrop-blur-md shadow-lg rounded-full border border-gray-200 dark:border-dark-3/30 px-2 py-1 flex items-center transition-all duration-200 focus-within:ring-2 focus-within:ring-primary/60"
        >
          {/* AI Icon */}
          <span className="flex items-center justify-center h-10 w-10 text-primary/80">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="10" fill="url(#ai-gradient)" opacity="0.7" />
              <path d="M11 6v5l3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="ai-gradient" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7F5AF0" />
                  <stop offset="1" stopColor="#2CB67D" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <input
            id="docs-search"
            type="text"
            placeholder="Ask Trio AI anything about the docs... (/ to focus)"
            className="w-full bg-transparent outline-none border-none text-base px-2 py-2 rounded-full placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-0 focus:outline-none"
            onFocus={() => setOpen(true)}
            readOnly
            aria-label="Ask Trio AI about documentation"
            style={{ boxShadow: 'none' }}
          />
          {/* Glow on focus */}
          <span className="absolute inset-0 pointer-events-none rounded-full transition-all duration-200 focus-within:shadow-[0_0_0_4px_rgba(127,90,240,0.15)]" />
        </div>
      </div>
      <DocsSearchModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default SearchBar;

