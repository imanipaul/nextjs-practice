"use client";

import { fetchPost } from "@/app/getData";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function editPage({ params }) {
  const [updatedPost, setUpdatedPost] = useState(null);
  const [post, setPost] = useState(null);

  const fetchPost = async (id) => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);

    const { post } = await res.json();

    post && setPost(post);
  };

  useEffect(() => {
    fetchPost(params.id);
  }, []);

  const sendUpdatedPost = async (formData) => {
    console.log("sending update");

    const rest = await fetch(`http://localhost:3000/api/posts/${params.id}`, {
      method: "PUT",
      body: formData,
    });
    const data = await rest.json();
    console.log("🚀 ~ data:", data);
    setUpdatedPost(data);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handling form submit");
    const form = e.target;
    const formData = new FormData(form);

    sendUpdatedPost(formData);
  };

  return (
    <div>
      editPage for post {params.id}
      <div>
        <Link href={"/posts"}>Back to posts</Link>
        <h1>Edit Post</h1>
        <form method="put" onSubmit={handleFormSubmit}>
          <label>title:</label>
          <input
            style={{ width: "300px" }}
            name="title"
            type="text"
            defaultValue={post?.title}
          />
          <br />
          <label>body:</label>
          <input
            style={{ width: "450px" }}
            name="body"
            type="textarea"
            defaultValue={post?.body}
          />
          <br />
          <label>userId:</label>
          <input name="userId" type="number" defaultValue={post?.userId} />
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        {updatedPost && <p>Updated post to the following: </p>}
      </div>
    </div>
  );
}
