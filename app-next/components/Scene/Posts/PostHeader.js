import { motion } from "framer-motion";
import { useEffect } from "react";
import Router from "next/router";

const PostHeader = ({ title, date, id }) => {
  useEffect(() => {
    const sendAnalytics = async () => {
      fetch("https://romain-legall.fr/api/analytics/post", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: id,
          from: document.referrer ?? null,
        }),
      });
    };
    sendAnalytics();
  });

  return (
    <div className="w-screen flex flex-col justify-center items-center p-2">
      <motion.div
        className="flex justify-center items-center px-2 py-1 rounded-3xl shadow shadow-blue-200 bg-blue-100  hover:shadow-blue-300 cursor-pointer transition-all"
        onClick={() => Router.push("/posts")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={`/Assets/Icons/left_arrow.svg`}
          alt="back button"
        />
        <p>Go back</p>
      </motion.div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg text-center font-semibold mt-8 underline underline-offset-2 decoration-blue-200 decoration-2">
          {title}
        </p>
        <p className="text-sm text-gray-800 mt-2 underline underline-offset-2 decoration-blue-100 decoration-2">
          {date}
        </p>
      </div>
    </div>
  );
};
export default PostHeader;