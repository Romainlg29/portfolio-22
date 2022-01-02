import HomeScene from "../Scene/HomeScene";
import { motion } from "framer-motion";

const HomeLay = () => {
  return (
    <motion.div
      layout
      className="fixed inset-0"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.8, duration: 4, velocity: 2 }}
    >
      <HomeScene />
    </motion.div>
  );
};
export default HomeLay;
