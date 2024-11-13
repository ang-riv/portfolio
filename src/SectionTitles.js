import React, { useContext } from "react";
import { motion } from "framer-motion";
import TitleContext from "./TitleContext.js";

const SectionTitles = React.forwardRef((props) => {
  const ref = useContext(TitleContext);
  const styles = {
    textAlign: "center",
    width: "calc-size(fit-content, size + 50px)",
    height: "fit-content",
  };
  const divStyles = {
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div style={divStyles}>
      <motion.h2 ref={ref} style={styles}>
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
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ root: ref }}
        />
      </motion.h2>
    </div>
  );
});

export default SectionTitles;
