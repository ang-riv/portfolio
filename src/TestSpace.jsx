import html from "./assets/new-desktop/top/html.png";
import css from "./assets/new-desktop/top/css.png";
import js from "./assets/new-desktop/top/js.png";
import react from "./assets/new-desktop/top/react.png";
import bootstrap from "./assets/new-desktop/bot/bootstrap.png";
import tailwind from "./assets/new-desktop/bot/tailwind.png";
import api from "./assets/new-desktop/bot/api.png";
import github from "./assets/new-desktop/bot/github.png";

import { motion } from "framer-motion";
const TestSpace = () => {
  return (
    <div>
      <div style={{ backgroundColor: "lightBlue", display: "flex" }}>
        <motion.img src={html} alt="" animate={{ x: 153, y: 51 }} />
        <motion.img src={css} alt="" animate={{ x: 51, y: 51 }} />
        <motion.img src={js} alt="" animate={{ x: -51, y: 51 }} />
        <motion.img src={react} alt="" animate={{ x: -153, y: 51 }} />
      </div>
      <div style={{ backgroundColor: "plum", display: "flex" }}>
        <motion.img src={bootstrap} alt="" animate={{ x: 153, y: -51 }} />
        <motion.img src={tailwind} alt="" animate={{ x: 51, y: -51 }} />
        <motion.img src={api} alt="" animate={{ x: -51, y: -51 }} />
        <motion.img src={github} alt="" animate={{ x: -153, y: -51 }} />
      </div>
    </div>
  );
};

export default TestSpace;
