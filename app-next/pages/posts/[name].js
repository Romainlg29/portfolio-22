import posts from "../../Assets/Posts.json";
import Seo from "../../components/Utils/Seo";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";

const Posts = JSON.parse(JSON.stringify(posts));

const Components = Posts.map((e) => {
  return {
    id: e.id,
    component: dynamic(() =>
      import(`../../components/Scene/Posts/${e.component}`)
    ),
  };
});

const Post = ({ post }) => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });
  const Component = Components.find((c) => c.id === post.id).component;
  return (
    <>
      <Seo
        title={`Romain Le Gall - ${post.title}`}
        description={post.description}
        keywords={post.keywords}
      />
      {post && (
        <Component
          title={post.title}
          date={post.date}
          id={post.id}
          isPhone={isPhone}
        />
      )}
    </>
  );
};
export default Post;

export async function getStaticPaths() {
  const paths = Posts.map((p) => ({
    params: { name: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { name } = params;
  const post = Posts.find((p) => p.url === name);
  return {
    props: { post },
  };
}
