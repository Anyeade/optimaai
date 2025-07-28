import React from "react";
import { Tutorial } from "@/types/tutorial";

interface TutorialCardProps {
  tutorial: Tutorial;
}

const TutorialCard: React.FC<TutorialCardProps> = ({ tutorial }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col">
      <a href={`/tutorials/${tutorial.id}`} className="block group">
        <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center">
          <img
            src={`https://img.youtube.com/vi/${tutorial.videoId}/hqdefault.jpg`}
            alt={tutorial.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {tutorial.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{tutorial.description}</p>
        </div>
      </a>
    </div>
  );
};

export default TutorialCard;
