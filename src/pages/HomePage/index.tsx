import usePosts from "../../hooks/query/usePosts";
import useUsers from "../../hooks/query/useUsers";
import PostList from "./components/Posts/PostList";
import UserList from "./components/Users/UserList";

const HomePage = () => {
  const { data: postList } = usePosts();
  const { data: userList } = useUsers();

  if (!postList) {
    return <div>Something was wrong.</div>;
  }

  return (
    <>
      <section>
        <PostList postList={postList} />
      </section>
      <section>
        <UserList userList={userList ?? []} />
      </section>
    </>
  );
};

export default HomePage;
