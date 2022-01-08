import { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Components/Routes/Home"));
const Test = lazy(() => import("./Components/Routes/Test"));

const App = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path={"/"}>
            <Route index element={<Home isPhone={isPhone} />} />
            <Route path={"test"} element={<Test isPhone={isPhone} />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
