"use client";

import { useState } from "react";

export default function newPost() {
  const [submittedPost, setSubmittedPost] = useState(null);

  const sendNewPost = async (formData) => {
    const rest = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: formData,
    });
    const data = await rest.json();
    setSubmittedPost(data.response);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    sendNewPost(formData);
  };

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleFormSubmit} method="post">
        <label>title</label>
        <input name="title" type="text" />
        <br />
        <label>body</label>
        <input name="body" type="textarea" />
        <br />
        <label>userId</label>
        <input name="userId" type="number" />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      {submittedPost && (
        <div>
          <h2>New Post Added:</h2>
          <p>title: {submittedPost.title}</p>
          <p>body: {submittedPost.body}</p>
        </div>
      )}
    </div>
  );
}
