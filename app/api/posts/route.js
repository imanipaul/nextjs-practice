import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const req = await request.json();

  const newData = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });

  const finalData = await newData.json();

  return NextResponse.json(finalData);
}
