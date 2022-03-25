import posts from "../../Assets/Posts.json";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { useMediaQuery } from "react-responsive";

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
      <NextSeo
        title={`Romain Le Gall - ${post.title}`}
        description={post.description}
        additionalMetaTags={[
          {
            name: "keywords",
            content: post.keywords,
          },
        ]}
        keywords={post.keywords}
        openGraph={
            {
                type: "website",
                locale: "en_US",
                url: `https://romain-legall.com/posts/${post.url}`,
                title: `Romain Le Gall - ${post.title}`,
                description: post.description,

                images: [
                    {
                        url: `${post.assets}/header_fill.png`,
                        width: 1025,
                        height: 569,
                        alt: `Romain Le Gall - ${post.title}`,
                    },
                ],
            }
        }
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
