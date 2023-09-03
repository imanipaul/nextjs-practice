export async function getData() {
  const res = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 60 },
  });
  return res.json();
}
