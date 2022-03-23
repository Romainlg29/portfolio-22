import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, Switch, Route } from "react-router-dom";
import Seo from "./Components/Utils/Seo";
import SuspenseScreen from "./Components/Utils/SuspenseScreen";

const Home = lazy(() => import("./Components/Routes/Home"));
const Posts = lazy(() => import("./Components/Routes/Posts"));

const lang = navigator.language || navigator.userLanguage;
const track = navigator.doNotTrack;
const uad = navigator.userAgentData;

const App = () => {
  useEffect(() => {
    const sendAnalytics = async () => {
      fetch("http://localhost:5000/api/analytics/overall", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lang: lang ?? "bot",
          mobile: uad.mobile ?? false,
          from: document.referrer ?? null,
        }),
      });
    };
    if (track === "yes" || track === "1" || track === null) sendAnalytics();
  });

  const location = useLocation();

  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Suspense fallback={<SuspenseScreen />}>
          <Switch location={location} key={location.pathname}>
            <Route path={["/"]} exact>
              <Seo
                title="Romain Le Gall"
                description="Hi, I'm Romain 👋 I'm a french student interested in web development and data science. Take a look at my portfolio!"
                keywords="portfolio, docker, grafana, it, mysql, docker swarm, mariadb, internship, syncing, cryptomator, 3D, reactjs, python, react three fiber"
              />
              <Home isPhone={isPhone} />
            </Route>
            <Route path={["/posts"]}>
              <Posts isPhone={isPhone} />
            </Route>
            <Route>
              <Home isPhone={isPhone} />
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </div>
  );
};

export default App;
