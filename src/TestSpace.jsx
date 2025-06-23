import html from "./assets/new-desktop/top/html.png";
import css from "./assets/new-desktop/top/css.png";
import js from "./assets/new-desktop/top/js.png";
import react from "./assets/new-desktop/top/react.png";
import bootstrap from "./assets/new-desktop/bot/bootstrap.png";
import tailwind from "./assets/new-desktop/bot/tailwind.png";
import api from "./assets/new-desktop/bot/api.png";
import github from "./assets/new-desktop/bot/github.png";
import { useRef, useCallback, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
const TestSpace = () => {
  const controls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;
  const distance = 51;
  const variants = {
    outerFirstL: { x: distance * 2 },
    outerFirstR: { x: -distance * 2 },
    outerSecondL: { x: distance * 3 },
    innerSecondL: { x: distance },
    innerSecondR: { x: -distance },
    outerSecondR: { x: -distance * 3 },
    topRow: { y: -distance },
    bottomRow: { y: distance },
  };

  let testAnimations = true;
  const runAnimations = useCallback(async () => {
    // move outer pieces
    const firstPhase = async () => {
      let pieces = [];
      for (let i = 0; i < controls.length; i++) {
        const element = controls[i];
        if (i === 0 || i === 4) {
          pieces.push(element.start("outerFirstL"));
        } else if (i === 3 || i === 7) {
          pieces.push(element.start("outerFirstR"));
        }
      }
      await Promise.all(pieces);
    };

    // chain together in groups
    const secondPhase = async () => {
      let pieces = [];
      for (let i = 0; i < controls.length; i++) {
        const element = controls[i];
        switch (i) {
          case 0:
          case 4:
            pieces.push(element.start("outerSecondL"));
            break;
          case 1:
          case 5:
            pieces.push(element.start("innerSecondL"));
            break;
          case 3:
          case 7:
            pieces.push(element.start("outerSecondR"));
            break;
          case 2:
          case 6:
            pieces.push(element.start("innerSecondR"));
            break;
          default:
            console.log("Unknown number");
        }
      }
      await Promise.all(pieces);
    };

    // vertical join
    const thirdPhase = async () => {
      let pieces = [];

      for (let i = 0; i < controls.length; i++) {
        const element = controls[i];
        i < 4
          ? pieces.push(element.start("bottomRow"))
          : pieces.push(element.start("topRow"));
      }
      await Promise.all(pieces);
    };

    await firstPhase();
    await secondPhase();
    await thirdPhase();
    testAnimations = false;
  }, [controls]);

  useEffect(() => {
    if (testAnimations) {
      runAnimations();
    }
  }, [controls]);
  return (
    <div>
      <div style={{ backgroundColor: "lightBlue", display: "flex" }}>
        <motion.img
          src={html}
          alt=""
          animate={controls[0]}
          variants={variants}
        />
        <motion.img
          src={css}
          alt=""
          animate={controls[1]}
          variants={variants}
        />
        <motion.img src={js} alt="" animate={controls[2]} variants={variants} />
        <motion.img
          src={react}
          alt=""
          animate={controls[3]}
          variants={variants}
        />
      </div>
      <div style={{ backgroundColor: "plum", display: "flex" }}>
        <motion.img
          src={bootstrap}
          alt=""
          animate={controls[4]}
          variants={variants}
        />
        <motion.img
          src={tailwind}
          alt=""
          animate={controls[5]}
          variants={variants}
        />
        <motion.img
          src={api}
          alt=""
          animate={controls[6]}
          variants={variants}
        />
        <motion.img
          src={github}
          alt=""
          animate={controls[7]}
          variants={variants}
        />
      </div>
    </div>
  );
};

export default TestSpace;
