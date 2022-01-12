import PostsLay from "../Layout/PostsLay";

const Posts = ({ isPhone }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <PostsLay isPhone={isPhone} />
    </div>
  );
};
export default Posts;
