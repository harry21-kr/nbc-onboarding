import { Post } from "../../../../types/post";
import PostItem from "./PostItem";

interface PostListProps {
  postList: Post[];
}

const PostList = ({ postList }: PostListProps) => {
  return (
    <ul>
      {postList.map((postItem) => (
        <PostItem key={postItem.id} post={postItem} />
      ))}
    </ul>
  );
};

export default PostList;
