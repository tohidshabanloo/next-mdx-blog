import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

export default function PostPage({
  frontmatter: { title, date, cover_image, athour, translator },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/">
        <a className="btn btn-back">بازگشت</a>
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <img className="image-in-post" src={cover_image} alt="" />
        <div className="info">
          {" "}
          <div className="post-date"> اثری از: {athour}</div>
          <div className="post-date">مترجم : {translator}</div>
        </div>

        {/* <div className="post-date">در تاریخ {date}</div> */}
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const NewFiles = fs.readdirSync(path.join("news"));

  const paths = NewFiles.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("news", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
