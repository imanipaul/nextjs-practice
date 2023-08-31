"use client";

export default function newPost() {
  const sendNewPost = async () => {
    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({ prompt: "Testing" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("data", data);
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
