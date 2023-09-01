"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SinglePost({ params }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [deletedPost, setDeletedPost] = useState(null);

  const fetchPost = async (id) => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);

    const { post } = await res.json();

    post && setPost(post);
  };

  const deletePost = async (id) => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "DELETE",
    });

    const { post: deletedPost } = await res.json();

    deletedPost && setDeletedPost(deletedPost);
  };

  const fetchComments = async (id) => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}/comments`);
    const { postComments } = await res.json();

    postComments & setComments(postComments);
  };

  useEffect(() => {
    fetchPost(params.id);
    fetchComments(params.id);
  }, []);

  const displayComments = (comments) => {
    return (
      <ul>
        {comments?.map((comment) => (
          <li key={comment?.id}>
            {comment?.user?.username}: {comment?.body}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div style={{ paddingTop: "20px", paddingLeft: "20px" }}>
      <Link href={"/posts"}>Back to posts</Link>
      <section style={{ paddingTop: "50px" }}>
        <article>
          <h1 style={{ paddingBottom: "10px" }}>{post?.title}</h1>
          {post?.tags.map((tag, index) => (
            <Link
              style={{ fontWeight: "lighter" }}
              key={index}
              href={`/posts/search/${tag}`}
            >
              {tag} |{" "}
            </Link>
          ))}
          <br />
          <p style={{ paddingTop: "10px" }}>{post?.body}</p>
        </article>
      </section>
      <br />
      <section>
        <h2>Comments</h2>
        {comments?.total !== 0 ? (
          displayComments(comments?.comments)
        ) : (
          <p>No comments yet</p>
        )}
      </section>
      <br />
      <button
        onClick={() => {
          console.log("delete post");
          deletePost(params.id);
          console.log("deleted post", deletedPost);
        }}
      >
        Delete post
      </button>
      <br />
      {deletedPost && <div>Post has been deleted</div>}
    </div>
  );
}
