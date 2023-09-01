// SERVER COMPONENT

import Link from "next/link";
import { getData } from "../getData";
import styles from "./styles.module.css";

export default async function PostsPage() {
  const { posts } = await getData();

  return (
    <div>
      <button>
        <Link href={"/posts/new"}>Add New Post</Link>
      </button>

      <h1 className={styles.postsHeader}>All Blog Posts</h1>

      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <article key={post.id} className={styles.singlePost}>
            <Link href={`posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
