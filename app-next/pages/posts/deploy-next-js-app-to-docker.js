import Seo from "../../components/Utils/Seo";
import DeployNextJS from "../../components/Scene/Posts/DeployNextJS";
import { useMediaQuery } from "react-responsive";

const DeployNext = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <Seo
        title={`Romain Le Gall - Deploy your NextJS App to Docker within 5 minutes!`}
        description={
          "NextJS allow you to deploy React apps with improvements like SSR very easily. Today, we're going to deploy one within 5 minutes!"
        }
        keywords={
          "react, nextjs, docker, ssr, deploy, 5 minutes, app, docker-compose, dockerfile, nodejs"
        }
      />
      <DeployNextJS
        title={"Handle React Router V6 with React 18 and React Three Fiber."}
        date={"March 26th 2022"}
        id={10}
        isPhone={isPhone}
      />
    </>
  );
};
export default DeployNext;
