import usePosts from "../../hooks/query/usePosts";
import PostList from "./components/Posts/PostList";

const HomePage = () => {
  const { data: postList } = usePosts();

  if (!postList) {
    return <div>Something was wrong.</div>;
  }

  return (
    <div>
      <PostList postList={postList} />
    </div>
  );
};

export default HomePage;
