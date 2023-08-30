import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  });

  const postComments = await res.json();

  return NextResponse.json({ postComments });
}
