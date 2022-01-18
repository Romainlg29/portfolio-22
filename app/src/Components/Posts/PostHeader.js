import { motion } from "framer-motion";
const PostHeader = ({ title, date }) => {
  return (
    <div className="w-screen flex flex-col justify-center items-center p-2">
      <motion.div
        className="flex justify-center items-center px-2 py-1 rounded-3xl shadow shadow-blue-200 bg-blue-100  hover:shadow-blue-300 cursor-pointer transition-all"
        onClick={() => window.appHistory.push("/posts")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/Assets/Icons/left_arrow.svg`}
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
