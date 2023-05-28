import clsx from "clsx";
import React from "react";

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
        border && "border dark:border-zinc-700 rounded-sm",
        `flex flex-col dark:bg-zinc-900 dark:text-zinc-100`
      )}
    >
      {children}
    </div>
  );
}
