import React from "react";
import { notFound } from "next/navigation";
import { tutorialsData } from "@/content/tutorialsData";
import { TutorialPlayer } from "@/components/Tutorial/TutorialPlayer";



export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tutorial = tutorialsData.find((t) => t.id === slug);
  return {
    title: tutorial ? `${tutorial.title} | Tutorials` : "Tutorial Not Found",
    description: tutorial ? tutorial.description : undefined,
  };
}


export default async function TutorialSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tutorial = tutorialsData.find((t) => t.id === slug);
  if (!tutorial) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 mt-20 md:mt-28">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary-700 dark:text-primary-400">
        {tutorial.title}
      </h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300 text-base md:text-lg">
        {tutorial.description}
      </p>
      <TutorialPlayer videoId={tutorial.videoId} title={tutorial.title} />
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <a
          href={tutorial.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 rounded bg-primary-600 text-white font-semibold shadow hover:bg-primary-700 transition text-center"
        >
          Watch on YouTube
        </a>
        <a
          href="/tutorials"
          className="inline-block px-5 py-2 rounded border border-primary-600 text-primary-700 dark:text-primary-400 font-semibold shadow hover:bg-primary-50 dark:hover:bg-primary-900 transition text-center"
        >
          ← Back to Tutorials
        </a>
      </div>
    </main>
  );
}
