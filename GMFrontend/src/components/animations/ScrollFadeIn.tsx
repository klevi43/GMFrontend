import React from "react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
interface ScrollFadeInProps {
  children: React.ReactNode;
}
const ScrollFadeIn = ({ children }: ScrollFadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25, once: true });
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 75 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1.2,
          delay: 0.15,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default ScrollFadeIn;
