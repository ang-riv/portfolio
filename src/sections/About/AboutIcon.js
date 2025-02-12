import { React, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutIcons, aboutIcon } from "../../utils/aboutIconData";
const AboutIcon = ({ activeTab, yPlacement, xPlacement }) => {
  const prevNumberRef = useRef(null);
  const tab = activeTab.toLowerCase();
  const test = `aboutIcons.${tab}`;
  console.log(tab);
  const variants = {
    increase: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, scale: { type: "spring" } },
      decrease: { opacity: 0, scale: 0 },
      spin: {
        rotate: 360,
        transition: { repeat: Infinity, duration: 8, ease: "linear" },
      },
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
    backgroundColor: "green",
  };
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div style={iconStyle}>{aboutIcon[3]}</motion.div>
      </AnimatePresence>
    </>
  );
};

export default AboutIcon;
