import { React } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutIcons } from "../../utils/aboutIconData";
const AboutIcon = ({ activeTab, yPlacement, xPlacement }) => {
  const tab = activeTab.toLowerCase();
  const sectionIcon = () => {
    // refactor eventually
    switch (tab) {
      case "intro":
        return aboutIcons.intro;
      case "backstory":
        return aboutIcons.backstory;
      case "values":
        return aboutIcons.values;
      case "hobbies":
        return aboutIcons.hobbies;
      default:
        console.log("Missing section.");
        break;
    }
  };
  const variants = {
    increase: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, scale: { type: "spring" } },
    },
    decrease: { opacity: 0, scale: 0 },
    spin: {
      rotate: 360,
      transition: { repeat: Infinity, duration: 8, ease: "linear" },
    },
  };
  // styles
  const iconStyle = {
    width: "fit-content",
    height: "fit-content",
    position: "absolute",
    borderRadius: "50%",
    top: yPlacement,
    left: xPlacement,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  };

  // figure out which tabs get the spin animation
  const spinSection = () => tab === "backstory" || tab === "hobbies";
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          style={iconStyle}
          variants={variants}
          initial="decrease"
          animate={spinSection() ? ["increase"] : ["increase", "spin"]}
          exit="decrease"
        >
          {sectionIcon()}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AboutIcon;
