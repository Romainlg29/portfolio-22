import Home from "../components/Routes/Home";
import { NextSeo } from "next-seo";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div>
      <NextSeo
        title={`Romain Le Gall`}
        description={
          "Hi, I'm Romain 👋 I'm a french student interested in web development and data science. Take a look at my portfolio!"
        }
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "portfolio, docker, grafana, it, mysql, docker swarm, mariadb, internship, syncing, cryptomator, 3D, reactjs, python, react three fiber",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: `https://romain-legall.com/`,
          title: `Romain Le Gall`,
          description:
            "Hi, I'm Romain 👋 I'm a french student interested in web development and data science. Take a look at my portfolio!",
        }}
      />
      <Home isPhone={isPhone} />
    </div>
  );
};
export default App;
