import HomeScene from "../Scene/HomeScene";
import { motion } from "framer-motion";

const HomeLay = ({ isPhone }) => {
  return (
    <motion.div
      layout
      className="fixed inset-0"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", bounce: 0.8, duration: 4, velocity: 2 }}
    >
      <HomeScene isPhone={isPhone} />
    </motion.div>
  );
};
export default HomeLay;
