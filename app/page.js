import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the app</h1>
      <p>
        Click <Link href={"/posts"}>here</Link> to view all posts
      </p>
    </main>
  );
}
