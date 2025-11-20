import { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
["async", "await", "getStaticProps()"]

const UsersPage = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </main>
    </>
  );
};

export default UsersPage;
