import { React } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutIcons } from "../../utils/aboutIconData";
const AboutIcon = ({ activeTab, yPlacement, xPlacement }) => {
  const tab = activeTab.toLowerCase();
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

  // which tabs get the spin animation
  const spinSection = () => tab === "backstory" || tab === "hobbies";

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="about-icon center-flex"
          style={{ top: yPlacement, left: xPlacement }}
          variants={variants}
          initial="decrease"
          animate={spinSection() ? ["increase"] : ["increase", "spin"]}
          exit="decrease"
        >
          {aboutIcons[tab]}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AboutIcon;
