import { motion } from "framer-motion";
import { useState } from "react";
import PostScene from "../Scene/PostScene";

const PostLay = ({ isPhone }) => {
  const [title, setTitle] = useState("Monitoring with Prometheus and Grafana");
  return (
    <motion.div
      layout
      className="fixed inset-0"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.8, duration: 4, velocity: 2 }}
    >
      <PostScene />
      <div className="absolute top-0 left-0 w-screen h-screen z-50 flex justify-center">
        <div className="w-full m-2 md:w-2/3 shadow-sm bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 border border-gray-100 rounded-lg">
          <div className="w-full flex items-center justify-center px-2 py-4">
            <p className="text-lg">{title}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default PostLay;
