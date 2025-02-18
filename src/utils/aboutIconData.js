import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { globalColors } from "./colorData";

const darkerColors = ["#00D4FF", "#32CD32", "#BA55D3", "#FFCC00"];
// to assign the gradient to fill/stroke
const gradientName = "url(#animatedGradient)";

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
const gradientColors = Object.values(globalColors).map((color, index) => {
  return <Gradient color1={color} color2={darkerColors[index]} />;
});

// opaque circle behind the icon so that it you can't see the about photo border peeking through
const circle = (x, y, r) => {
  return <circle cx={x} cy={y} r={r} fill="white"></circle>;
};

function Snowflake(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 48 48"
      {...props}
    >
      {props.gradient}
      <path
        fill="none"
        stroke={gradientName}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 4v40M6.725 14l34.64 20M6.72 33.977l34.56-19.954M12 10l3 9l-9 2m0 6l9 2l-3 9m24-28l-3 9l9 2m0 6l-9 2l3 9M18 7l6 6l6-6M18 41l6-6l6 6"
      ></path>
    </svg>
  );
}

function Flower(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 24 24"
      {...props}
    >
      {props.gradient}
      {props.circle}
      <path
        fill={gradientName}
        d="M12 1a4 4 0 0 1 4 4l-.002.055l.03-.018a3.97 3.97 0 0 1 2.79-.455l.237.056a3.97 3.97 0 0 1 2.412 1.865a4.01 4.01 0 0 1-1.455 5.461l-.068.036l.071.039a4.01 4.01 0 0 1 1.555 5.27l-.101.186a3.97 3.97 0 0 1-5.441 1.468l-.03-.02L16 19a4 4 0 0 1-3.8 3.995L12 23a4 4 0 0 1-4-4l.001-.056l-.029.019a3.97 3.97 0 0 1-2.79.456l-.236-.056a3.97 3.97 0 0 1-2.413-1.865a4.01 4.01 0 0 1 1.453-5.46l.07-.038l-.071-.038a4.01 4.01 0 0 1-1.555-5.27l.1-.187a3.97 3.97 0 0 1 5.444-1.468L8 5.055V5a4 4 0 0 1 3.8-3.995zm0 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
      ></path>
    </svg>
  );
}

function Smile(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 20 20"
      {...props}
    >
      {props.gradient}
      {props.circle}
      <path
        fill={gradientName}
        d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0M7.086 11.399l-.1.004a.68.68 0 0 0-.596.759a3.637 3.637 0 0 0 7.217.024a.682.682 0 0 0-1.352-.172A2.273 2.273 0 0 1 7.744 12a.68.68 0 0 0-.759-.596Zm-1.272-5.12a1.395 1.395 0 1 0 0 2.79a1.395 1.395 0 0 0 0-2.79m8.372 0a1.395 1.395 0 1 0 0 2.79a1.395 1.395 0 0 0 0-2.79"
      ></path>
    </svg>
  );
}

function Code(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 26 26"
      {...props}
    >
      {props.gradient}
      <g fill="none">
        <defs>
          <mask id="pepiconsPopCodeCircleFilled0">
            <path fill="#fff" d="M0 0h26v26H0z"></path>
            <g fill="#000" fillRule="evenodd" clipRule="evenodd">
              <path d="M4.59 12.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412"></path>
              <path d="M9.41 9.331a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074m12 3a1 1 0 0 1-.074 1.412l-3.334 3a1 1 0 1 1-1.338-1.486l3.334-3a1 1 0 0 1 1.412.074"></path>
              <path d="M16.59 9.331a1 1 0 0 1 1.412-.074l3.334 3a1 1 0 0 1-1.338 1.486l-3.334-3a1 1 0 0 1-.074-1.412m-1.827-2.796a1 1 0 0 1 .702 1.228l-3 11a1 1 0 0 1-1.93-.526l3-11a1 1 0 0 1 1.228-.702"></path>
            </g>
          </mask>
        </defs>
        {props.circle}
        <circle
          cx={13}
          cy={13}
          r={13}
          fill={gradientName}
          mask="url(#pepiconsPopCodeCircleFilled0)"
        ></circle>
      </g>
    </svg>
  );
}

export const aboutIcon = [<Snowflake />, <Code />, <Flower />, <Smile />];

export const aboutIcons = {
  intro: <Snowflake gradient={gradientColors[0]} />,
  backstory: <Code gradient={gradientColors[1]} circle={circle(13, 13, 12)} />,
  values: <Flower gradient={gradientColors[2]} circle={circle(13, 13, 5)} />,
  hobbies: <Smile gradient={gradientColors[3]} circle={circle(10, 10, 8)} />,
};
