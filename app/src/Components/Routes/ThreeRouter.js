/*

FROM https://stackoverflow.com/questions/69871987/react-router-v6-navigate-outside-of-components

*/


import { useLayoutEffect, useState } from "react";
import { Router } from "react-router-dom";

const ThreeRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
export default ThreeRouter;
