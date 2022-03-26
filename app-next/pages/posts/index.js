import { useMediaQuery } from "react-responsive";
import { NextSeo } from "next-seo";
import PostsRoute from "../../components/Routes/Posts";

const Posts = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <NextSeo
        title={`Romain Le Gall - Posts`}
        description={"Here, you can find all the posts i've done!"}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "docker, grafana, mysql, syncing, mariadb, docker swarm, traefik, prometheus, internship, cryptomator, react, nextjs",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: `https://romain-legall.com/posts/`,
          title: `Romain Le Gall - Posts`,
          description: "Here, you can find all the posts i've done!",
        }}
      />

      <PostsRoute isPhone={isPhone} />
    </>
  );
};
export default Posts;
