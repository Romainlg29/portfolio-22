import Seo from "../../components/Utils/Seo";
import DeployMaria from "../../components/Scene/Posts/DeploySecureMariaDB";
import { useMediaQuery } from "react-responsive";

const DeployMariaDB = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <Seo
        title={`Romain Le Gall - Deploy a secure MariaDB on Docker Swarm!`}
        description={
          "Docker brings great functionalities, however, with great functionalities comes great responsibility. Storing your data must be important at every step of a project. Moreover, GDRP must be respected to enter in the european market! Today, we're going to do a step by step install of a MariaDB on Docker Swarm!"
        }
        keywords={
          "Docker, docker stack, docker service, MySQL, MariaDB, docker swarm, secure, GDRP, european, docker secret, data, tutorial"
        }
      />
      <DeployMaria
        title={"Deploy a secure MariaDB on Docker Swarm!"}
        date={"February 09th 2022"}
        id={6}
        isPhone={isPhone}
      />
    </>
  );
};
export default DeployMariaDB;
