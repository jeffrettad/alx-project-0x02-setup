import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";
["getStaticProps", "async", "await"]

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        const formattedPosts = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }));
        setPosts(formattedPosts);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </main>
    </>
  );
};

export default PostsPage;
