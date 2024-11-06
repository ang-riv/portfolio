import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const SectionTitles = (props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-15%",
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const styles = {
    textAlign: "center",
    width: "calc-size(fit-content, size + 50px)",
    height: "fit-content",
    outline: "1px solid pink",
  };
  return (
    <motion.h2 style={styles}>
      {props.title}
      <motion.div
        style={{
          height: "2px",
          width: "100%",
          backgroundColor: "cornflowerBlue",
          transformOrigin: "left",
        }}
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
      />
    </motion.h2>
  );
};

export default SectionTitles;
