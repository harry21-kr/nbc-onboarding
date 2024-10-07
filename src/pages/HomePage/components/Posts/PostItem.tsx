import { Post } from "../../../../types/post";

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { body, title, id } = post;
  return (
    <li className="py-4 break-words max-w-[600px] border-b border-b-gray-500">
      <h3 className="text-lg font-bold mb-2">
        {id}. {title}
      </h3>
      <p>{body}</p>
    </li>
  );
};

export default PostItem;
