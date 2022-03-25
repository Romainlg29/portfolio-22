import Seo from "../../components/Utils/Seo";
import Monitor from "../../components/Scene/Posts/MonitorContainers";
import { useMediaQuery } from "react-responsive";

const MonitorContainers = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <Seo
        title={`Romain Le Gall - DMonitor your server with Prometheus and Grafana!`}
        description={
          "Nowadays, to provide the best QOF (Quality of services) to our clients, we must take carof many data. A lot of data... So, this article will deal with Prometheus and Grafana. I'm going to show you the installation process with Docker!"
        }
        keywords={
          "Docker, Grafana, Prometheus, install, installation, qof, data, monitoring, monitor, stats, analytics, docker swarm, tutorial"
        }
      />
      <Monitor
        title={"Monitor your server with Prometheus and Grafana!"}
        date={"November 29th 2021"}
        id={5}
        isPhone={isPhone}
      />
    </>
  );
};
export default MonitorContainers;
