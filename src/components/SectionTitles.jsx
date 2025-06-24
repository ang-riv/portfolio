import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { globalColors } from "../utils/colorData";

const SectionTitles = (props) => {
  const reducedMotion = useReducedMotion();
  const ref = useRef(null);
  const styles = {
    textAlign: "center",
    width: "calc-size(fit-content, size + 50px)",
    height: "fit-content",
  };

  const position = () => {
    if (props.title === "Let's Connect") {
      return "flex-start";
    } else {
      return "center";
    }
  };

  const divStyles = {
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: position(),
  };

  const underlineColor = () => {
    if (props.title === "Skills" || props.title === "Let's Connect") {
      return "#FFFFFF";
    } else {
      return globalColors.blue;
    }
  };

  return (
    <div style={divStyles}>
      <motion.h2 ref={ref} style={styles}>
        {props.title}
        <motion.div
          style={{
            height: "3px",
            width: "100%",
            backgroundColor: underlineColor(),
            transformOrigin: "left",
          }}
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1 },
          }}
          initial={reducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ root: ref }}
        />
      </motion.h2>
    </div>
  );
};

export default SectionTitles;
