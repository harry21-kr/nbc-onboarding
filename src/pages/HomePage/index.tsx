import { useEffect } from "react";
import usePosts from "../../hooks/query/usePosts";

const HomePage = () => {
  const { data } = usePosts();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {data?.map((v) => (
        <div key={v.id}>{v.title}</div>
      ))}
    </div>
  );
};

export default HomePage;
