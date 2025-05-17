"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <Link
        href="/posts/create"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        + New Post
      </Link>
      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
            <Link
              href={`/posts/${post.id}/edit`}
              className="text-blue-500 block mt-2"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
