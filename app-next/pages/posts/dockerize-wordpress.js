import Seo from "../../components/Utils/Seo";
import Dockerize from "../../components/Scene/Posts/DockerizeWordpress";
import { useMediaQuery } from "react-responsive";

const DockerizeWordpress = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <Seo
        title={`Romain Le Gall - Dockerize Wordpress!`}
        description={
          "Nowadays, more and more consumers are using Wordpress to develop their bussiness, especially in the cloud. So, this article will show you how to dockerize Wordpresss !"
        }
        keywords={
          "Docker, Wordpress, docker swarm, MySQL, MariaDB, Traefik, PHP, load balancing, data, websites, easy, fast"
        }
      />
      <Dockerize
        title={"Dockerize Wordpress!"}
        date={"October 26th 2021"}
        id={4}
        isPhone={isPhone}
      />
    </>
  );
};
export default DockerizeWordpress;
