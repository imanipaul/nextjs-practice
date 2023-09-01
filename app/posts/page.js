// SERVER COMPONENT

import Link from "next/link";
import { getData } from "../getData";

export default async function PostsPage() {
  const { posts } = await getData();

  return (
    <div>
      <h1>All Blog Posts</h1>
      <hr style={{ width: "200px" }} />
      <div style={{ paddingTop: "40px" }}>
        {posts.map((post) => (
          <article key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p style={{ paddingBottom: "30px" }}>{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
