import PostsLay from "../Layout/PostsLay";
import posts from "../../Assets/Posts.json";
import Seo from "../Utils/Seo";

import { Switch, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import SuspenseScreen from "../Utils/SuspenseScreen";

const Posts = ({ isPhone }) => {
  const Posts = JSON.parse(JSON.stringify(posts));
  const location = useLocation();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Switch location={location} key={location.pathname}>
        {Posts &&
          Posts.map((p) => {
            const Component = lazy(() =>
              import(`../Scene/Posts/${p.component}`)
            );
            return (
              <Route path={`/posts${p.url}`} key={`posts${p.url}`} exact>
                <Seo
                  title={`Romain Le Gall - ${p.title}`}
                  description={p.description}
                  keywords={p.keywords}
                />
                <Suspense fallback={<SuspenseScreen />}>
                  <Component
                    title={p.title}
                    date={p.date}
                    id={p.id}
                    isPhone={isPhone}
                  />
                </Suspense>
              </Route>
            );
          })}
        <Route path={"/posts"}>
          <Seo
            title={"Romain Le Gall - Posts"}
            description={"Here, you can find all the posts i've done!"}
            keywords={
              "docker, grafana, mysql, syncing, mariadb, docker swarm, traefik, prometheus, internship, cryptomator"
            }
          />
          <PostsLay isPhone={isPhone} />
        </Route>
      </Switch>
    </div>
  );
};
export default Posts;
