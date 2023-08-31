import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(req) {
  console.log("🚀 ~ req:", req.json());
  return NextResponse.json({ message: "success" }, { status: 200 });
  // console.log("req", req);
  // const res = await fetch("https://dummyjson.com/posts/add", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: req.body,
  // });
  // const data = await res.json();
  // return NextResponse.json("success");
}
