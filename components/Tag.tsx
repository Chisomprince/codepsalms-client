import React from "react";
import clsx from "clsx";

interface TagProps {
  size?: string;
}

export default function Tag({ size }: TagProps) {
  return (
    <span
      className={clsx(
        size === "small" ? "px-1 py-1 text-xs" : "px-3 py-1",
        " rounded-sm hover:underline dark:bg-blue-400 dark:text-gray-900"
      )}
    >
      Javascript
    </span>
  );
}
