import { motion } from "framer-motion";
import { useEffect } from "react";
const InformationToast = ({ text, setText }) => {
  useEffect(() => {
    let v = true;
    v &&
      setTimeout(() => {
        setText("");
      }, 3000);
    return () => {
      v = false;
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0, y: 50 }}
      transition={{ duration: 0.7 }}
      className={"absolute bottom-2 left-2"}
    >
      <div className={"p-2 px-2 bg-blue-200 rounded-md"}>
        <p className={"text-lg"}>{text}</p>
      </div>
    </motion.div>
  );
};
export default InformationToast;
