import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const newData = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    body: JSON.stringify({ title, body, userId }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await newData.json();

  return NextResponse.json({
    message: "success!",
    response,
  });
}
