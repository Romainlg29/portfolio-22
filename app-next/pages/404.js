import Router from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    Router.push("/");
  });

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <p>This page doesn't exists! Redirecting...</p>
    </div>
  );
};

export default NotFound;
