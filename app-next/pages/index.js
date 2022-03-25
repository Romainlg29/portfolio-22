import Home from "../components/Routes/Home";
import Seo from "../components/Utils/Seo";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div>
      <Seo
        title="Romain Le Gall"
        description="Hi, I'm Romain 👋 I'm a french student interested in web development and data science. Take a look at my portfolio!"
        keywords="portfolio, docker, grafana, it, mysql, docker swarm, mariadb, internship, syncing, cryptomator, 3D, reactjs, python, react three fiber"
      />
      <Home isPhone={isPhone} />
    </div>
  );
};
export default App;
