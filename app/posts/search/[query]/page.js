"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Search({ params }) {
  const [searchResults, setSearchResults] = useState(null);

  const fetchSearchResults = async (query) => {
    const res = await fetch(`http://localhost:3000/api/posts/search/${query}`);

    const { searchResults } = await res.json();

    searchResults && setSearchResults(searchResults);
  };

  useEffect(() => {
    fetchSearchResults(params.query);
  }, []);

  const displaySearchResults = (results) => {
    return (
      <ol>
        {results?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            Tags:{" "}
            {post?.tags?.map((tag) => (
              <Link href={`/posts/search/${tag}`} key={tag}>
                {tag}{" "}
              </Link>
            ))}
            <br />
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div style={{ paddingTop: "20px", paddingLeft: "40px" }}>
      <Link href={"/"}>Back to home</Link>
      <h1>Search page</h1>
      {searchResults?.total !== 0 ? (
        displaySearchResults(searchResults?.posts)
      ) : (
        <p>No posts matching the query {params.query}</p>
      )}
    </div>
  );
}
