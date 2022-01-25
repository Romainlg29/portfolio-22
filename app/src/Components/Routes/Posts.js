import PostsLay from "../Layout/PostsLay";
import posts from "../../Assets/Posts.json";

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
            const Component = lazy(() => import(`../Posts/${p.component}`));
            return (
              <Route path={`/posts${p.url}`} key={`posts${p.url}`} exact>
                <Suspense fallback={<SuspenseScreen />}>
                  <Component title={p.title} date={p.date} id={p.id}/>
                </Suspense>
              </Route>
            );
          })}
        <Route path={"/posts"}>
          <PostsLay isPhone={isPhone} />
        </Route>
      </Switch>
    </div>
  );
};
export default Posts;
