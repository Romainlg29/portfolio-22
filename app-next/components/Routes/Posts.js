import { useEffect, useState } from "react";
import PostsLay from "../Layout/PostsLay";

const Posts = ({ isPhone }) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  });

  return (
    render && (
      <div className="w-screen h-screen flex justify-center items-center">
        <PostsLay isPhone={isPhone} />
      </div>
    )
  );
};
export default Posts;
