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
  let testAnimations = true;
  const runAnimations = useCallback(async () => {
    // move outer pieces

    // for (let i = 0; i < controls.length; i++) {
    //   // outer pieces - move all at once
    //   if (i === 0 || i === 4) await controls[i].start({ x: distance * 2 });
    //   if (i === 3 || i === 7) await controls[i].start({ x: -distance * 2 });
    // }

    const firstPhase = async () => {
      controls[0].start({ x: distance * 2 });
      controls[4].start({ x: distance * 2 });
      controls[3].start({ x: -distance * 2 });
      controls[7].start({ x: -distance * 2 });
    };

    // horizontal join - move all together, will need to go without i
    // use a case, could also do outside of a loop with specific nums

    // for (let i = 0; i < controls.length; i++) {
    //   // outer pieces
    //   if (i === 0 || i === 4) await controls[i].start({ x: distance * 3 });
    //   else if (i === 3 || i === 7)
    //     await controls[i].start({ x: -distance * 3 });

    //   // middle pieces
    //   if (i === 1 || i === 5) await controls[i].start({ x: distance });
    //   else if (i === 2 || i === 6) await controls[i].start({ x: -distance });
    // }

    // chaining together in groups
    const secondPhase = async () => {
      controls[0].start({ x: distance * 3, transition: { delay: 0.5 } });
      controls[1].start({ x: distance, transition: { delay: 0.5 } });
      controls[4].start({ x: distance * 3, transition: { delay: 0.5 } });
      controls[5].start({ x: distance, transition: { delay: 0.5 } });

      controls[3].start({ x: -distance * 3, transition: { delay: 0.5 } });
      controls[2].start({ x: -distance, transition: { delay: 0.5 } });
      controls[7].start({ x: -distance * 3, transition: { delay: 0.5 } });
      controls[6].start({ x: -distance, transition: { delay: 0.5 } });
    };

    await firstPhase();
    await secondPhase();
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
        <motion.img src={html} alt="" animate={controls[0]} />
        <motion.img src={css} alt="" animate={controls[1]} />
        <motion.img src={js} alt="" animate={controls[2]} />
        <motion.img src={react} alt="" animate={controls[3]} />
      </div>
      <div style={{ backgroundColor: "plum", display: "flex" }}>
        <motion.img src={bootstrap} alt="" animate={controls[4]} />
        <motion.img src={tailwind} alt="" animate={controls[5]} />
        <motion.img src={api} alt="" animate={controls[6]} />
        <motion.img src={github} alt="" animate={controls[7]} />
      </div>
    </div>
  );
};

export default TestSpace;
