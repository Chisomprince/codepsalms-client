import FeaturedSection from "components/FeaturedSection";
import Layout from "components/Layout";
import PortableTextComp from "components/PortableTextComp";
import PostCard from "components/PostCard";
import SocialsCard from "components/SocialCard";
import Tag from "components/Tag";
import dayjs from "dayjs";
import { getAllPosts, getPost } from "lib/api";
export default function Stories({ post }: any) {
  const calculateReadTime = (post) => {
    const wordsPerMinute = 200;
    const words = post?.content.split(" ");
    const numWords = words.length;
    const readTimeMinutes = Math.ceil(numWords / wordsPerMinute);

    return readTimeMinutes;
  };

  return (
    <div>
      <Layout>
        <div className="lg:grid grid-cols-12 gap-6 space-y-4 lg:space-y-0 mx-auto py-16 px-4 ">
          <div className="col-span-9  p-6  lg:px-12 py-12 mx-auto space-y-12 border bg-white dark:bg-zinc-900 dark:border-zinc-700 w-full">
            <div className="space-y-6">
              <h1 className="text-2xl font-bold md:tracking-tight md:text-4xl">
                {post?.name}
              </h1>
              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                <div className="flex items-center md:space-x-2">
                  <img
                    src="https://source.unsplash.com/75x75/?portrait"
                    alt=""
                    className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                  />
                  <p className="text-sm">
                    {dayjs(post?._updatedAt).format("MMM DD, YYYY")} •{" "}
                    {/* {calculateReadTime(post)}{" "} */}
                    {/* {calculateReadTime(post) > 1 ? "mins" : "min"} */}
                  </p>
                </div>
                <p className="flex-shrink-0 my-3 text-sm md:mt-0">4 min read</p>
              </div>
              <Tag />
            </div>
            <PortableTextComp value={post?.content} />
            {/* <ArticleBody /> */}
          </div>

          <div className="col-span-3 space-y-6 ">
            <SocialsCard />
            <FeaturedSection />
          </div>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 pb-20">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPosts();

  return {
    paths: paths.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await getPost(slug);
  console.log({ post });
  return {
    props: {
      post,
    },
  };
}
