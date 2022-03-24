import PostsLay from "../Layout/PostsLay";
import posts from "../../Assets/Posts.json";
import Seo from "../Utils/Seo";

import { Route, useLocation, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SuspenseScreen from "../Utils/SuspenseScreen";

const Posts = ({ isPhone }) => {
  const Posts = JSON.parse(JSON.stringify(posts));
  const location = useLocation();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Routes location={location} key={location.pathname}>
        {Posts &&
          Posts.map((p) => {
            const Component = lazy(() =>
              import(`../Scene/Posts/${p.component}`)
            );
            return (
              <Route
                path={`${p.url}`}
                key={`posts${p.url}`}
                exact
                element={
                  <>
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
                  </>
                }
              ></Route>
            );
          })}
        <Route
          path={"/"}
          element={
            <>
              <Seo
                title={"Romain Le Gall - Posts"}
                description={"Here, you can find all the posts i've done!"}
                keywords={
                  "docker, grafana, mysql, syncing, mariadb, docker swarm, traefik, prometheus, internship, cryptomator"
                }
              />
              <PostsLay isPhone={isPhone} />
            </>
          }
        ></Route>
        <Route
          element={
            <>
              <Seo
                title={"Romain Le Gall - Posts"}
                description={"Here, you can find all the posts i've done!"}
                keywords={
                  "docker, grafana, mysql, syncing, mariadb, docker swarm, traefik, prometheus, internship, cryptomator"
                }
              />
              <PostsLay isPhone={isPhone} />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};
export default Posts;
