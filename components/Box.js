import Link from "next/link";

export default function Box({ post }) {
  return (
    <Link href={`/blog/posts/${post.slug}`}>
      <div className="boxes">
        {/* <div className="image-container">
          <img className="img" src={post.frontmatter.cover_image} alt="" />
        </div> */}
        <div>
          <h3>{post.frontmatter.title}</h3>
          <h5>اثر : {post.frontmatter.athour} </h5>
        </div>
        <p>{post.frontmatter.excerpt}</p>
        {/* <div className="post-date">
          <div>سال انتشار: {post.frontmatter.date}</div>
        </div> */}
      </div>
    </Link>
  );
}
