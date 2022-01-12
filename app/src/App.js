import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./Components/Routes/Home"));
const Posts = lazy(() => import("./Components/Routes/Posts"));

const App = () => {
  const location = useLocation();

  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div>
      <Suspense fallback={null}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path={["/"]} exact>
              <Home isPhone={isPhone} />
            </Route>
            <Route path={["/posts"]} exact>
              <Posts isPhone={isPhone} />
            </Route>
          </Switch>
        </AnimatePresence>
      </Suspense>
    </div>
  );
};

export default App;
