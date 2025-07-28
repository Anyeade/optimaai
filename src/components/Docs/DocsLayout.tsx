"use client";

import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import ToC from "./ToC";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const DocsLayout: React.FC<Props> = ({ children }) => {
  // Keyboard navigation: / to focus search, j/k to move sidebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        const search = document.getElementById("docs-search");
        if (search) (search as HTMLInputElement).focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen bg-white dark:bg-dark">
      <Sidebar />
      <main className="flex-1 flex flex-row px-2 md:px-8 py-8 md:py-12">
      <div className="flex-1 max-w-3xl mx-auto">
        {/* Add top margin to prevent overlap with site header/nav */}
        <div className="mt-20">
        <SearchBar />
        </div>
        <div className="mt-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-pre:bg-gray-900 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-dark-2 prose-img:rounded-lg prose-table:rounded-lg prose-table:bg-gray-50 dark:prose-table:bg-dark-2 prose-code:before:content-none prose-code:after:content-none prose-code:bg-gray-100 dark:prose-code:bg-dark-3 prose-li:marker:text-primary prose-hr:my-8 prose-hr:border-t prose-hr:border-gray-200 dark:prose-hr:border-dark-3/20 prose-strong:text-primary prose-strong:font-semibold prose-p:leading-relaxed prose-p:text-base prose-p:mb-4 prose-ul:pl-6 prose-ol:pl-6 prose-ul:mb-4 prose-ol:mb-4 prose-h1:mb-4 prose-h2:mb-3 prose-h3:mb-2 prose-h4:mb-2 prose-h5:mb-2 prose-h6:mb-2 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h6:text-base">
        {/* Responsive table wrapper for all tables */}
        <div className="prose-table:overflow-x-auto prose-table:block">
          {children}
        </div>
        </div>
      </div>
      <ToC />
      </main>
    </div>
  );
};

export default DocsLayout;
