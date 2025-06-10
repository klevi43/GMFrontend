import React from "react";
import { motion } from "motion/react";

interface FadeInProps {
  children: React.ReactNode;
  duration: number;
  delay: number;
  from: number;
}

const FadeIn = ({ children, duration, delay, from }: FadeInProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: from },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: duration,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
