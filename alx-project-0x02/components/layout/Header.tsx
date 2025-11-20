import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-100 py-4 px-6 shadow-md">
      <nav className="flex gap-6 text-lg font-medium">
        <Link href="/home" className="hover:text-blue-600">Home</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/posts" className="hover:text-blue-600">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
