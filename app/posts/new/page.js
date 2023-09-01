"use client";

export default function newPost() {
  const sendNewPost = async (formData) => {
    const rest = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title: formData.get("title"),
        body: formData.get("body"),
        userId: formData.get("userId"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await rest.json();
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
    </div>
  );
}
