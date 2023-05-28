import { createClient, groq } from "next-sanity";
import clientConfig from "./config";

export const getAllPosts = async () => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`
  );
};

export async function getPost(slug: string) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _updatedAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`,
    { slug }
  );
}
