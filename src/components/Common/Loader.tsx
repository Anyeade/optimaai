import React from "react";
import { Rocket } from "lucide-react";

const Loader: React.FC = () => {
  return (
    <span
      role="status"
      aria-label="Loading"
      className="relative inline-flex items-center justify-center w-10 h-10"
    >
      {/* Spinner Circle */}
      <span
        className="absolute inset-0 rounded-full border-4 border-gray-300 dark:border-gray-700 border-t-blue-500 animate-spin"
        style={{ borderTopColor: "#3b82f6" }}
      />
      {/* Animated Rocket */}
      <span
        className="relative z-10 flex items-center justify-center"
        style={{
          animation: "rocket-bounce 1s infinite cubic-bezier(.68,-0.55,.27,1.55)",
        }}
      >
        <Rocket
          size={20}
          className="text-blue-500 dark:text-blue-400"
          aria-hidden="true"
        />
      </span>
      {/* Custom keyframes for rocket bounce */}
      <style>
        {`
          @keyframes rocket-bounce {
            0%, 100% { transform: translateY(0) rotate(-15deg);}
            50% { transform: translateY(-6px) rotate(10deg);}
          }
        `}
      </style>
    </span>
  );
};

export default Loader;
