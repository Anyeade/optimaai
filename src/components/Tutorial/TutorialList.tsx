import React from "react";
import { Tutorial } from "@/types/tutorial";
import TutorialCard from "./TutorialCard";

interface TutorialListProps {
  tutorials: Tutorial[];
}

const TutorialList: React.FC<TutorialListProps> = ({ tutorials }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {tutorials.map((tutorial) => (
        <TutorialCard key={tutorial.id} tutorial={tutorial} />
      ))}
    </div>
  );
};

export default TutorialList;
