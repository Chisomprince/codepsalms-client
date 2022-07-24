import Link from "next/link";
import React from "react";
import Card from "./Card";
import Tag from "./Tag";

export default function PostCard() {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <div className="hover:scale-105  ">
      <Card border={false}>
        <Link href={"/stories/posts"}>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <img
              alt=""
              className="object-cover border-none w-full h-52 dark:bg-gray-500"
              src="https://source.unsplash.com/200x200/?fashion?1"
            />

            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>

              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug hover:underline">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div>
                <Tag size="small" />
              </div>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2020</span>
                <a href="#" className="dark:text-blue-500 hover:text-blue-600">
                  Read
                </a>
              </div>
            </div>
          </a>
        </Link>
      </Card>
    </div>
  );
}
