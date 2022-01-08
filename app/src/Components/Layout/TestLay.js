import { motion } from "framer-motion";
import TestScene from "../Scene/TestScene";

const TestLay = () => {
  return (
    <motion.div
      layout
      className="fixed inset-0"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.8, duration: 4, velocity: 2 }}
    >
      <TestScene />
    </motion.div>
  );
};
export default TestLay;
