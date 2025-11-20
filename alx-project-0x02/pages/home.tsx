import Card from "@/components/common/Card";
import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";


interface Post {
  title: string;
  content: string;
}

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([{ title, content }, ...posts]);
  };

  return (
    <>
    <Header/>
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>

      <button
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setIsModalOpen(true)}
      >
        + Add Post
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="grid gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </main>
    </>
  );
};





export default Home;

