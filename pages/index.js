import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import New from "../components/New";
import Slider from "../components/Slider";
import { sortByDate } from "../utils";
import NewSlider from "../components/NewSlider";

// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home({ posts, news }) {
  // console.log(posts);
  return (
    <div>
      <Head>
        <title>Podcaster</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="slider">
        <Slider news={news} posts={posts} />
      </div>
      <div className="slider">
        <NewSlider news={news} posts={posts} />
      </div>

      {/* <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <div className="posts">
        {news.map((post, index) => (
          <New key={index} new={post} />
        ))}
      </div> */}
    </div>
  );
}

export async function getStaticProps() {
  //Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));
  const newFiles = fs.readdirSync(path.join("news"));

  //Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");
    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  const news = newFiles.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");
    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("news", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts: posts.sort(sortByDate),
      news: news.sort(sortByDate),
    },
  };
}
