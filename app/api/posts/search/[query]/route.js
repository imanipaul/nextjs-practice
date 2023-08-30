import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { query } = params;
  const res = await fetch(`https://dummyjson.com/posts/search?q=${query}`);

  const searchResults = await res.json();

  return NextResponse.json({ searchResults });
}
