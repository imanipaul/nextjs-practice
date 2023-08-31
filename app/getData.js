export async function getData() {
  const res = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 60 },
  });
  // console.log("🚀 ~ res g:", res);
  return res.json();
}
