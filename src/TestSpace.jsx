import html from "./assets/skills-desktop-imgs/top/html.png";
import css from "./assets/skills-desktop-imgs/top/css.png";
import js from "./assets/skills-desktop-imgs/top/js.png";
import react from "./assets/skills-desktop-imgs/top/react.png";
import bootstrap from "./assets/skills-desktop-imgs/bot/bootstrap.png";
import tailwind from "./assets/skills-desktop-imgs/bot/tailwind.png";
import api from "./assets/skills-desktop-imgs/bot/api.png";
import github from "./assets/skills-desktop-imgs/bot/github.png";
import { useRef, useCallback, useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
const TestSpace = () => {
  const pieceRef = useRef(null);
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
  const [width, setWidth] = useState(null);
  const originalWidth = 300;
  const originalDistance = 51;
  const divisor = (width / originalWidth).toFixed(5);
  const distance = Number((originalDistance * divisor).toFixed(5));
  // const variants = {
  //   outerFirstL: { x: originalDistance * 2, transition: { delay: 0.5 } },
  //   outerFirstR: { x: -originalDistance * 2, transition: { delay: 0.5 } },
  //   outerSecondL: { x: originalDistance * 3, transition: { delay: 0.5 } },
  //   innerSecondL: { x: originalDistance, transition: { delay: 0.5 } },
  //   innerSecondR: { x: -originalDistance, transition: { delay: 0.5 } },
  //   outerSecondR: { x: -originalDistance * 3, transition: { delay: 0.5 } },
  //   topRow: { y: -originalDistance, transition: { delay: 0.5 } },
  //   bottomRow: { y: originalDistance, transition: { delay: 0.5 } },
  //   reset: { x: 0, y: 0, rotate: 0, transition: { delay: 0.3, duration: 0.5 } },
  // };

  let testAnimations = true;

  // find originalDistance based on current size

  const randomNum = () => {
    return Math.floor(Math.random() * 361);
  };

  const resetAnimations = async () => {
    let pieces = [];
    for (let i = 0; i < controls.length; i++) {
      const element = controls[i];
      pieces.push(element.start({ x: 0, rotate: 0, y: 0 }));
    }
    await Promise.all(pieces);
  };

  const runAnimations = async () => {
    const variants = {
      outerFirstL: { x: distance * 2, transition: { delay: 0.5 } },
      outerFirstR: { x: -distance * 2, transition: { delay: 0.5 } },
      outerSecondL: { x: distance * 3, transition: { delay: 0.5 } },
      innerSecondL: { x: distance, transition: { delay: 0.5 } },
      innerSecondR: { x: -distance, transition: { delay: 0.5 } },
      outerSecondR: { x: -distance * 3, transition: { delay: 0.5 } },
      topRow: { y: -distance, transition: { delay: 0.5 } },
      bottomRow: { y: distance, transition: { delay: 0.5 } },
      reset: {
        x: 0,
        y: 0,
        rotate: 0,
        transition: { delay: 0.3, duration: 0.5 },
      },
    };

    // move outer pieces
    const firstPhase = async () => {
      let pieces = [];
      for (let i = 0; i < controls.length; i++) {
        const element = controls[i];
        if (i === 0 || i === 4) {
          pieces.push(element.start(variants.outerFirstL));
        } else if (i === 3 || i === 7) {
          pieces.push(element.start(variants.outerFirstR));
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
            pieces.push(element.start(variants.outerSecondL));
            break;
          case 1:
          case 5:
            pieces.push(element.start(variants.innerSecondL));
            break;
          case 3:
          case 7:
            pieces.push(element.start(variants.outerSecondR));
            break;
          case 2:
          case 6:
            pieces.push(element.start(variants.innerSecondR));
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
          ? pieces.push(element.start(variants.bottomRow))
          : pieces.push(element.start(variants.topRow));
      }
      await Promise.all(pieces);
    };
    await resetAnimations();
    await firstPhase();
    await secondPhase();
    await thirdPhase();
    testAnimations = false;
  };

  useEffect(() => {
    if (pieceRef.current) {
      let piece = pieceRef.current.getBoundingClientRect();
      setWidth(piece.width.toFixed(2));
    }
    if (testAnimations && distance != 0) {
      runAnimations();
    }
  }, [controls, distance]);

  const styles = {
    width: "11em",
    height: "11em",
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid green",
      }}
    >
      <div
        style={{
          backgroundColor: "lightBlue",
          display: "flex",
          height: "fit",
          width: "80%",
        }}
      >
        <motion.img
          src={html}
          alt=""
          animate={controls[0]}
          ref={pieceRef}
          style={styles}
        />
        <motion.img
          src={css}
          alt=""
          animate={controls[1]}
          initial={{ rotate: randomNum() }}
          style={styles}
        />
        <motion.img
          src={js}
          alt=""
          animate={controls[2]}
          style={styles}
          initial={{ rotate: randomNum() }}
        />
        <motion.img src={react} alt="" animate={controls[3]} style={styles} />
      </div>
      <div
        style={{
          backgroundColor: "plum",
          display: "flex",
          height: "fit",
          width: "80%",
        }}
      >
        <motion.img
          src={bootstrap}
          alt=""
          animate={controls[4]}
          style={styles}
        />
        <motion.img
          src={tailwind}
          alt=""
          animate={controls[5]}
          style={styles}
        />
        <motion.img src={api} alt="" animate={controls[6]} style={styles} />
        <motion.img src={github} alt="" animate={controls[7]} style={styles} />
      </div>
    </div>
  );
};

export default TestSpace;
