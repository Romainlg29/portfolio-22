import { useMediaQuery } from "react-responsive";
import PostsRoute from "../../components/Routes/Posts";

const Posts = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return <PostsRoute isPhone={isPhone} />;
};
export default Posts;