import React from "react";
import { tutorialsData } from "@/content/tutorialsData";
import TutorialList from "@/components/Tutorial/TutorialList";

export const metadata = {
  title: "Tutorials | Trio Agent",
  description: "Curated programming and web development tutorials."
};

export default function TutorialsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 mt-20 md:mt-28">
      <h1 className="text-3xl font-bold mb-6 text-primary-700 dark:text-primary-400">Tutorials</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-300 max-w-2xl">
        Explore our handpicked programming and web development tutorials. Each tutorial features a high-quality video and a concise description to help you learn efficiently.
      </p>
      <TutorialList tutorials={tutorialsData} />
    </main>
  );
}
