import React from "react";

export default function SocialShares() {
  return (
    <div>
      <div className="flex flex-wrap space-x-2 dark:border-gray-400">
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-3 py-1 rounded-sm hover:underline dark:bg-blue-400 dark:text-gray-900"
        >
          #MambaUI
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-3 py-1 rounded-sm hover:underline dark:bg-blue-400 dark:text-gray-900"
        >
          #TailwindCSS
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-3 py-1 rounded-sm hover:underline dark:bg-blue-400 dark:text-gray-900"
        >
          #Angular
        </a>
      </div>
    </div>
  );
}
