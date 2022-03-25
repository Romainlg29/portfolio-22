import { useEffect, useState } from "react";
import PostsLay from "../Layout/PostsLay";
import Seo from "../Utils/Seo";

const Posts = ({ isPhone }) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  });

  return (
    render && (
      <div className="w-screen h-screen flex justify-center items-center">
        <Seo
          title={"Romain Le Gall - Posts"}
          description={"Here, you can find all the posts i've done!"}
          keywords={
            "docker, grafana, mysql, syncing, mariadb, docker swarm, traefik, prometheus, internship, cryptomator"
          }
        />
        <PostsLay isPhone={isPhone} />
      </div>
    )
  );
};
export default Posts;
