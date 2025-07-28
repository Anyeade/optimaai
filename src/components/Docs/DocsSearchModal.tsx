import React, { useState } from "react";
import { OramaSearchBox } from "@orama/react-components";

const searchBoxConfig = {
  resultsMap: {
    path: "path",
    title: "title",
    description: "description",
  },
  colorScheme: "dark" as "system" | "light" | "dark",
  themeConfig: {
    light: {
      "--button-background-color-primary": "#000000ff",
    },
  },
};


interface DocsSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Optionally accept docsIndex or other props in the future
}

const DocsSearchModal: React.FC<DocsSearchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          aria-label="Close search modal"
        >
          &times;
        </button>
        <OramaSearchBox
          open={isOpen}
          index={{
            endpoint: "https://cloud.orama.run/v1/indexes/optimaai-cc-beqme9",
            api_key: "QIZjJKKJjflPzh3BxtyS3Niv5q2XhInh",
          }}
          {...searchBoxConfig}
        />
      </div>
    </div>
  );
};

export default DocsSearchModal;