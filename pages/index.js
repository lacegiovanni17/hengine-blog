/* eslint-disable react/jsx-key */
import Head from "next/head";

const posts = [
  { title: "React Testing", excerpt: "Learn React Testing" },
  { title: "React with Tailwind", excerpt: "Learn React with Tailwind" }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 mb-8">
      <Head>
        <title>Hengine Blog</title>
        <meta name="description" content="A blog about my thoughts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">

          </div>
        </div>
      </div>
    </div>
  );
}

