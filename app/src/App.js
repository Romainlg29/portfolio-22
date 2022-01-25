import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, Switch, Route } from "react-router-dom";
import SuspenseScreen from "./Components/Utils/SuspenseScreen";

const Home = lazy(() => import("./Components/Routes/Home"));
const Posts = lazy(() => import("./Components/Routes/Posts"));

const lang = navigator.language || navigator.userLanguage;
const track = navigator.doNotTrack;
const uad = navigator.userAgentData;

const App = () => {
  useEffect(() => {
    const sendAnalytics = async () => {
      fetch("http://localhost:5000/analytics/overall", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lang: lang,
          mobile: uad.mobile,
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
