async function getDataPosts() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts').then((post) => {post.json()}).then((d) => console.log(d))

  if (!res.ok) {
    throw new Error(`Error! status: ${res.status}`);
  }

  return res
}

export default async function PostPage() {
  const posts = await getDataPosts();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>This is Fetching Get Page</h1>
        {posts.map((data) => {
          return <p>{data.title}</p>;
        })}
      </main>
    </>
  );
}
