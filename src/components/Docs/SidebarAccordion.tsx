import React, { useState } from "react";
import Link from "next/link";
import { sidebarNav } from "./sidebarNav";
import { List, Map, Rocket, Zap, Upload, Scale, HelpCircle, Cpu, MessageCircle, Bug } from "lucide-react";

const iconMap: Record<string, any> = {
  list: List,
  map: Map,
  rocket: Rocket,
  zap: Zap,
  upload: Upload,
  scales: Scale,
  "help-circle": HelpCircle,
  cpu: Cpu,
  "message-circle": MessageCircle,
  bug: Bug,
};

// Flatten all sidebar links into a single array
const allLinks = sidebarNav.flatMap(section => section.items);

const SidebarAccordion: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="block md:hidden w-full mt-16 mb-4">
      <div className="rounded-xl bg-white/80 dark:bg-dark-2/80 shadow border border-gray-200 dark:border-dark-3/20">
        <button
          className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 focus:outline-none focus:bg-primary/10 dark:focus:bg-primary/20 transition"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="sidebar-links"
        >
          <span>Documentation Menu</span>
          <svg
            className={`w-4 h-4 ml-2 transform transition-transform ${open ? "rotate-180" : "rotate-0"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          id="sidebar-links"
          className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px]" : "max-h-0"}`}
        >
          <ul className="flex flex-col gap-1 px-4 pb-2">
            {allLinks.map((item) => {
              const Icon = iconMap[item.icon] || List;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="flex items-center gap-2 px-2 py-2 rounded text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-primary/10 dark:hover:bg-primary/20"
                  >
                    <Icon className="w-4 h-4 opacity-70" />
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SidebarAccordion;
