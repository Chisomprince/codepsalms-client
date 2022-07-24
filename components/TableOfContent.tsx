import React from "react";
import Card from "./Card";

export default function TableOfContent() {
  return (
    <div className="sticky top-4 mt-4 w-full">
      <Card p={4}>
        <div className="text-xl mb-2 dark:text-white">Table of Contents</div>
        <ul className="dark:text-blue-500 flex flex-col gap-2">
          <li>
            <a href="#">Introduction</a>
            <div className="pl-4 mt-1">
              <a href="#" className="text-sm">
                Getting Started
              </a>
            </div>
            <div className="pl-4 mt-1">
              <a href="#" className="text-sm">
                Setting up Started
              </a>
            </div>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">How to</a>
          </li>
          <li>
            <a href="#">Summary</a>
          </li>
        </ul>
      </Card>
    </div>
  );
}
