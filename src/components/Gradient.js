import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { globalColors } from "../utils/colorData";

const darkerColors = ["#00D4FF", "#32CD32", "#BA55D3", "#FFCC00"];
// color changing gradient
const Gradient = ({ color1, color2 }) => {
  const value = useMotionValue(0);
  const colors = [color1, color2, color1];
  const stopColor = useTransform(value, [0, 0.5, 1], colors);
  // Manually updating the motion value on each frame
  useAnimationFrame((t) => {
    value.set((t / 13000) % 1); // Cycles every 13 seconds
  });
  return (
    <defs>
      <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <motion.stop offset="0%" stopColor={stopColor} />
        <motion.stop offset="100%" stopColor={stopColor} />
      </linearGradient>
    </defs>
  );
};

// generating multiple gradient components for each icon
export const gradientColors2 = Object.values(globalColors).map(
  (color, index) => {
    return <Gradient color1={color} color2={darkerColors[index]} />;
  }
);

// opaque circle behind the icon so that it you can't see the about photo border peeking through
const circle = (x, y, r) => {
  return <circle cx={x} cy={y} r={r} fill="white"></circle>;
};
