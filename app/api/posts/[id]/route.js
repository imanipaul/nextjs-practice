import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    next: { revalidate: 60 },
  });
  const post = await res.json();

  return NextResponse.json({ post });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    method: "DELETE",
  });
  const post = await res.json();

  return NextResponse.json({ post });
}

export async function PUT(request, { params }) {
  const { id } = params;

  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, body, userId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await res.json();

  return NextResponse.json(response);
}
