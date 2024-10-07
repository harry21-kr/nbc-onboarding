import usePosts from "../../hooks/query/usePosts";
import PostList from "./components/Posts/PostList";

const HomePage = () => {
  const { data: postList } = usePosts();

  if (!postList) {
    return <div>Something was wrong.</div>;
  }

  return <PostList postList={postList} />;
};

export default HomePage;
