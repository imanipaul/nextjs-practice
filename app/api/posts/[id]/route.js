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

  const updatedData = await request.json();

  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await res.json();

  return NextResponse.json(response);
}
