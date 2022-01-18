import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const SuspenseScreen = () => {
  useEffect(() => {
    const to = setTimeout(() => {
      setLoading(true);
    }, 1000);

    return () => {
      clearTimeout(to);
    };
  });

  const [loading, setLoading] = useState(false);

  return (
    <motion.div
      className="w-screen h-screen flex items-center justify-center rounded-xl"
      style={{
        backgroundColor: "#F1F4F8",
        scale: 0.9,
      }}
      exit={{ opacity: 0 }}
    >
      {loading ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Loading...
        </motion.p>
      ) : null}
    </motion.div>
  );
};
export default SuspenseScreen;
