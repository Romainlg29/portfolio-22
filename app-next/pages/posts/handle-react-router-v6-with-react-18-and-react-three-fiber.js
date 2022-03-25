import Seo from "../../components/Utils/Seo";
import HandleReactRouter from "../../components/Scene/Posts/HandleReactRouter";
import { useMediaQuery } from "react-responsive";

const HandleReactRouterWithR3F = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <Seo
        title={`Romain Le Gall - Handle React Router V6 with React 18 and React Three Fiber.`}
        description={
          "React Router V6, breaks the React Three Fiber hacks to use the history. Today, you'll learn how to fix it!"
        }
        keywords={
          "react, react-router, react-router-v6, reactjs, react18, createroot, concurrent, react three fiber, r3f, threejs, drei, easy, fix"
        }
      />
      <HandleReactRouter
        title={"Handle React Router V6 with React 18 and React Three Fiber."}
        date={"March 24th 2022"}
        id={9}
        isPhone={isPhone}
      />
    </>
  );
};
export default HandleReactRouterWithR3F;
