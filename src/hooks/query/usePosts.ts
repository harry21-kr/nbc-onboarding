import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import { getPosts } from "../../api/getPosts";
import { Post } from "../../types/post";

const usePosts = () => {
  const { postList: initialPostData } = useLoaderData() as { postList: Post[] };

  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData: initialPostData,
  });
};

export default usePosts;
