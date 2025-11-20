kimport { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4 bg-white">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <p className="text-sm text-gray-500">Posted by User {userId}</p>
    </div>
  );
};

export default PostCard;
