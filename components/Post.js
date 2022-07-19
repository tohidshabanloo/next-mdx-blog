import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="card">
        <img src={post.frontmatter.cover_image} alt="" />
        <div className="post-date">در تاریخ: {post.frontmatter.date}</div>
        <div className="post-date">توسط: {post.frontmatter.athour}</div>
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.excerpt}</p>
      </div>
    </Link>
  );
}
