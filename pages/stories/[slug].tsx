import React from "react";
import ArticleBody from "components/ArticleBody";
import Card from "components/Card";
import FeaturedSection from "components/FeaturedSection";
import Layout from "components/Layout";
import PostCard from "components/PostCard";
import SocialsCard from "components/SocialCard";
import SocialShares from "components/SocialShares";
import TableOfContent from "components/TableOfContent";
import Tag from "components/Tag";

export default function Stories() {
  return (
    <div>
      <Layout>
        <div className="lg:grid grid-cols-12 mx-auto py-16">
          <article className="col-span-12 max-w-2xl lg:px-10 mx-auto mb-6 space-y-8  dark:text-gray-50">
            <div className="space-y-6">
              <h1 className="text-2xl font-bold md:tracking-tight md:text-4xl">
                Suspendisse ut magna et ipsum sodales accumsan.
              </h1>
              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                <div className="flex items-center md:space-x-2">
                  <img
                    src="https://source.unsplash.com/75x75/?portrait"
                    alt=""
                    className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                  />
                  <p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
                </div>
                <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                  4 min read • 1,570 views
                </p>
              </div>
            </div>
            <SocialShares />
          </article>

          <div className="col-span-3 px-">
            <TableOfContent />
          </div>
          <div className="col-span-6 max-w-2xl px-6  mx-auto space-y-12">
            <ArticleBody />
            <Tag />
          </div>
          <div className="col-span-3 space-y-6">
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
