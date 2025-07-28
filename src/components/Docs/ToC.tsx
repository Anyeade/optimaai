import React, { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

function getHeadings(): Heading[] {
  if (typeof window === "undefined") return [];
  const headings = Array.from(document.querySelectorAll(".prose h1, .prose h2, .prose h3"));
  return headings.map((el) => ({
    id: el.id,
    text: el.textContent || "",
    level: parseInt(el.tagName[1]),
  }));
}

const ToC: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  useEffect(() => {
    setHeadings(getHeadings());
    const onScroll = () => setHeadings(getHeadings());
    window.addEventListener("resize", onScroll);
    return () => window.removeEventListener("resize", onScroll);
  }, []);
  if (!headings.length) return null;
  return (
    <nav className="hidden lg:block sticky top-24 max-h-[80vh] overflow-y-auto w-64 ml-8 text-sm text-gray-500 dark:text-gray-400">
      <div className="font-semibold mb-2">On this page</div>
      <ul className="space-y-1">
        {headings.map((h, i) => {
          // Use id if present, otherwise fallback to text+index for uniqueness
          const key = h.id && h.id.length > 0 ? h.id : `${h.text}-${i}`;
          return (
            <li key={key} className={h.level === 1 ? "font-bold mt-2" : h.level === 2 ? "ml-2" : "ml-4 text-xs"}>
              <a href={`#${h.id}`} className="hover:text-primary transition-colors">
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ToC;
