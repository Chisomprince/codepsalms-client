import Layout from "components/Layout";
import MainPost from "components/MainPost";
import PostCard from "components/PostCard";
import type { NextPage } from "next";
import Head from "next/head";
import { BiChevronsRight } from "react-icons/bi";
import { getAllPosts } from "../lib/api";

const Home: NextPage = ({ posts = [] }: any) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1 className="pt-4 px-6">Get Latest News on Tech as they Come</h1>
          <section className=" dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
              <div className="relative bg-white dark:bg-zinc-900 border dark:border-zinc-700 p-6 grid grid-cols-1 gap-x-4 gap-y-4 lg:gap-y-8 md:grid-cols-2">
                <MainPost />
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 ">
                  <PostCard showTag={false} post={posts} />
                  <PostCard showTag={false} post={posts} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.slice(0, 8).map((post: any) => (
                  <PostCard post={post} />
                ))}
              </div>

              <div className="flex justify-center">
                <button className="border-none focus:outline-none bg-zinc-900 text-white text-xs px-12 py-2 flex items-center gap-2">
                  <span> Read More</span> <BiChevronsRight />
                </button>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const posts = await getAllPosts();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}

export default Home;
