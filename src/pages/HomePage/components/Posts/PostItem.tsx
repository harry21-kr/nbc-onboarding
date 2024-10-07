import { Post } from "../../../../types/post";

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { body, title, id } = post;
  return (
    <li className="py-4">
      <h3 className="text-lg font-bold">
        {id}. {title}
      </h3>
      <p>{body}</p>
    </li>
  );
};

export default PostItem;
