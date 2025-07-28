import Link from "next/link";
import { sidebarNav } from "./sidebarNav";
import { useTheme } from "next-themes";
import { Sun, Moon, List, Map, Rocket, Zap, Upload, Scale, HelpCircle, Cpu, MessageCircle, Bug } from "lucide-react";

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

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="h-16" aria-hidden="true" />
      <aside className="hidden md:flex flex-col w-64 border-r border-gray-200 dark:border-dark-3/20 bg-white dark:bg-dark-2 sticky top-0 h-screen px-4 py-6">
       
        <div className="flex items-center gap-2 mb-6 px-2">
          <span className="ml-auto text-xs text-gray-400">---------</span>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-6">
            {sidebarNav.map((section) => (
              <li key={section.label}>
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase px-2 mb-2">{section.label}</div>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = iconMap[item.icon] || List;
                    return (
                      <li key={item.path}>
                        <Link href={item.path} className="flex items-center gap-2 px-2 py-2 rounded text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-primary/10 dark:hover:bg-primary/20">
                          <Icon className="w-4 h-4 opacity-70" />
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto flex items-center gap-2 px-2 pt-6 border-t border-gray-200 dark:border-dark-3/20">
          <button
            aria-label="theme toggler"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 items-center justify-center rounded hover:bg-primary/10 dark:hover:bg-primary/20"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <span className="text-xs text-gray-400 ml-2">Theme</span>
        </div>
      </aside>
    </>
  );
}
