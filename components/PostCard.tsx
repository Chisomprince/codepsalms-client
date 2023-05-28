import Link from "next/link";
import Card from "./Card";
import Tag from "./Tag";

interface PostCardProps {
  title?: String;
  showTag?: Boolean;
  post: any;
}

export default function PostCard({
  post,
  title,
  showTag = true,
}: PostCardProps) {
  return (
    <div className="hover:scale-10 border h-full flex-1 dark:border-zinc-700 bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-all duration-200 ease-in-out ">
      <Card border={false}>
        <Link href={"/stories/posts"}>
          <a rel="noopener noreferrer" href="#" aria-label="">
            <img
              alt=""
              className="object-cover border-none w-full h-52 dark:bg-zinc-500"
              src={post?.image ?? ""}
            />
          </a>
        </Link>

        <div className="flex flex-col flex-1 pt-3 p-4 h-full">
          <Link href={`/stories/${post?.slug}`}>
            <a
              rel="noopener noreferrer"
              aria-label=""
              className="flex-1 pb-2 text-lg font-medium hover:underline"
            >
              {post?.name}
            </a>
          </Link>

          {showTag && (
            <div>
              <Tag size="small" />
            </div>
          )}

          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
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
