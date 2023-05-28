import Layout from "components/Layout";
import PostCard from "components/PostCard";
import type { NextPage } from "next";
import Head from "next/head";

const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <section className="py-6 sm:py-12  dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
              <div className="space-y-2 text-center">
                <PostCard />
                <PostCard />
              </div>
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                {posts.slice(0, 8).map((post) => (
                  <PostCard />
                ))}
              </div>

              <div className="flex justify-center">
                <button className="border-none focus:outline-none ">
                  Read More
                </button>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
