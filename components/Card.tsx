import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  p?: string | number;
  border?: boolean;
}

export default function Card({ children, p, border = true }: CardProps) {
  return (
    <div
      className={clsx(
        p && `p-${p}`,
        border && "border dark:border-gray-700 rounded-sm",
        `flex flex-col dark:bg-gray-900 dark:text-gray-100`
      )}
    >
      {children}
    </div>
  );
}
