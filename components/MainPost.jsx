import Link from "next/link";
import Card from "./Card";
import Tag from "./Tag";

export default function MainPost() {
  return (
    <div className="hover:scale-10 relative border min-h- dark:border-zinc-700 bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-all duration-200 ease-in-out ">
      <Card border={false}>
        <Link href={"/stories/posts"}>
          <a rel="noopener noreferrer" href="#" aria-label="">
            <img
              alt=""
              className="object-cover border-none w-full  h-full absolute dark:bg-zinc-500"
              src="https://source.unsplash.com/200x200/?fashion?1"
            />
          </a>
        </Link>

        <div className="lg:absolute bottom-0 flex flex-col justify-end   pt-3 p-4 z-10 text-white">
          <Link href={"/stories/posts"}>
            <a
              rel="noopener noreferrer"
              aria-label=""
              className="flex-1 pb-2 text-lg font-medium hover:underline"
            >
              Te nulla oportere reprimique his dolorum
            </a>
          </Link>
          <div>
            <Tag size="small" />
          </div>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
            <span>June 1, 2020 • 5 min Read</span>
            {/* <a href="#" className="dark:text-blue-500 hover:text-blue-600">
              5 min Read
            </a> */}
          </div>
        </div>
      </Card>
    </div>
  );
}
