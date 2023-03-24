import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";

const CategoryPost = ({ posts }) => {
  const [postCategory, setPostCategory] = useState("");
  useEffect(() => {
    if (posts[0].node.categories.length > 1) {
      setPostCategory(
        posts[0].node.categories[posts[0].node.categories.length - 1].name
      );
    } else {
      setPostCategory(posts[0].node.categories[0].name);
    }
  });
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4 mb-8">
      <Head>
        <title>Hengine-Blog</title>
        <meta name="description" content="A blog about my thoughts" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <div className="font-bold text-white mb-8">
            {postCategory.toUpperCase()} POSTS
          </div>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
