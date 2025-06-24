import { useRef, useEffect, useState, useCallback } from "react";
import useWindowSize from "../useWindowSize";
import { useAnimation, useInView, useReducedMotion } from "framer-motion";
import { desktopPieces, rightPieces, leftPieces } from "../../utils/imgData";
import completedDesktop from "../../assets/completed-skills-imgs/completed-desktop.png";
import completedMobile from "../../assets/completed-skills-imgs/completed-mobile.png";
import SkillsRenderPieces from "./PuzzleComponents/SkillsRenderPieces";
// if user has the prefers-reduced-motion setting on

// desktop + tablet puzzle in skill section
const SkillsPuzzle = () => {
  const reducedMotion = useReducedMotion();
  const topPieces = [
    desktopPieces.html,
    desktopPieces.css,
    desktopPieces.javascript,
    desktopPieces.react,
  ];
  const botPieces = [
    desktopPieces.bootstrap,
    desktopPieces.tailwind,
    desktopPieces.api,
    desktopPieces.github,
  ];

  const topPiece = useRef(null);
  const botPiece = useRef(null);

  const topControls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;
  const botControls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;

  const [width, setWidth] = useState(null);
  const [verticalDistance, setVerticalDistance] = useState(null);

  const originalWidth = 300;
  const originalDistance = 51;
  const divisor = (width / originalWidth).toFixed(5);
  const distance = Number((originalDistance * divisor).toFixed(5));
  const vDistance = distance + Number(verticalDistance / 2);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-50% -50% -50% -50%" });

  const variants = {
    outerFirstL: { x: distance * 2, transition: { delay: 0.8 } },
    outerFirstR: { x: -distance * 2, transition: { delay: 0.8 } },
    outerSecondL: { x: distance * 3, transition: { delay: 0.5 } },
    innerSecondL: { x: distance, transition: { delay: 0.5 } },
    innerSecondR: { x: -distance, transition: { delay: 0.5 } },
    outerSecondR: { x: -distance * 3, transition: { delay: 0.5 } },
    topRow: { y: -vDistance, transition: { delay: 0.5 } },
    bottomRow: { y: vDistance, transition: { delay: 0.5 } },
    reset: {
      x: 0,
      y: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  const resetAnimations = async () => {
    let movements = [];
    for (let i = 0; i < topControls.length; i++) {
      const top = topControls[i];
      const bot = botControls[i];

      movements.push(top.start("reset"));
      movements.push(bot.start("reset"));
    }
    await Promise.all(movements);
  };

  const runAnimations = useCallback(async () => {
    const movementFiller = (arr, position, movement) => {
      arr.push(position[0].start(movement));
      arr.push(position[1].start(movement));
    };

    // move outer pieces
    const firstPhase = async () => {
      let movements = [];

      for (let i = 0; i < topControls.length; i++) {
        const top = topControls[i];
        const bot = botControls[i];
        const combinedPositions = [top, bot];
        if (i === 0) {
          movementFiller(movements, combinedPositions, "outerFirstL");
        } else if (i === 3) {
          movementFiller(movements, combinedPositions, "outerFirstR");
        }
      }
      await Promise.all(movements);
    };

    // chain together in groups
    const secondPhase = async () => {
      let movements = [];
      for (let i = 0; i < topControls.length; i++) {
        const top = topControls[i];
        const bot = botControls[i];
        const combinedPositions = [top, bot];

        switch (i) {
          case 0:
            movementFiller(movements, combinedPositions, "outerSecondL");
            break;
          case 1:
            movementFiller(movements, combinedPositions, "innerSecondL");
            break;
          case 3:
            movementFiller(movements, combinedPositions, "outerSecondR");
            break;
          case 2:
            movementFiller(movements, combinedPositions, "innerSecondR");
            break;
          default:
            console.log("Unknown number");
        }
      }
      await Promise.all(movements);
    };

    // vertical join
    const thirdPhase = async () => {
      let movements = [];

      for (let i = 0; i < topControls.length; i++) {
        const top = topControls[i];
        const bot = botControls[i];

        movements.push(top.start("bottomRow"));
        movements.push(bot.start("topRow"));
      }
      await Promise.all(movements);
    };

    await firstPhase();
    await secondPhase();
    await thirdPhase();
  }, [distance]);

  const findDistance = useCallback(() => {
    if (topPiece.current) {
      let top = topPiece.current.getBoundingClientRect();
      let bot = botPiece.current.getBoundingClientRect();
      setWidth(top.width.toFixed(2));
      if (botPiece.current) {
        const vDistance = bot.top.toFixed(2) - top.bottom.toFixed(2);
        if (vDistance > 0) setVerticalDistance(vDistance.toFixed(2));
      }
    }
  }, [distance]);

  useEffect(() => {
    if (isInView && !reducedMotion) {
      findDistance();
      runAnimations();
    } else {
      resetAnimations();
    }
  }, [topControls, botControls, distance, isInView]);
  return (
    <div ref={containerRef} className="skill-desktop-div">
      {reducedMotion ? (
        <img
          src={completedDesktop}
          alt="completed puzzle"
          style={{ width: "80%" }}
        />
      ) : (
        <>
          <SkillsRenderPieces
            screen="desktop"
            pieceRef={topPiece}
            pieces={topPieces}
            controls={topControls}
            variants={variants}
          />
          <SkillsRenderPieces
            screen="desktop"
            pieceRef={botPiece}
            pieces={botPieces}
            controls={botControls}
            variants={variants}
          />
        </>
      )}
    </div>
  );
};

const MobileSkillsPuzzle = () => {
  const reducedMotion = useReducedMotion();
  const topPiece = useRef(null);
  const containerRef = useRef(null);
  const leftControls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;
  const rightControls = useRef([
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

  const isInView = useInView(containerRef, { margin: "-50% -50% -50% -50%" });

  const variants = {
    moveRight: { x: distance, transition: { delay: 0.8 } },
    moveLeft: { x: -distance, transition: { delay: 0.8 } },
    topRowSecond: { y: distance * 2, transition: { delay: 0.5 } },
    botRowSecond: { y: -distance * 2, transition: { delay: 0.5 } },
    outerTopThird: { y: distance * 3, transition: { delay: 0.5 } },
    innerTopThird: { y: distance, transition: { delay: 0.5 } },
    innerBotThird: { y: -distance, transition: { delay: 0.5 } },
    outerBotThird: { y: -distance * 3, transition: { delay: 0.5 } },
    reset: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };
  const runAnimations = async () => {
    const movementFiller = (
      firstPhase,
      arr,
      position,
      firstMovement,
      secondMovement
    ) => {
      if (firstPhase === true) {
        arr.push(position[0].start(firstMovement));
        arr.push(position[1].start(secondMovement));
      } else {
        arr.push(position[0].start(firstMovement));
        arr.push(position[1].start(firstMovement));
      }
    };

    // connect horizontally in groups
    const firstPhase = async () => {
      let movements = [];

      for (let i = 0; i < leftControls.length; i++) {
        const left = leftControls[i];
        const right = rightControls[i];
        const combinedPositions = [left, right];
        movementFiller(
          true,
          movements,
          combinedPositions,
          "moveRight",
          "moveLeft"
        );
      }
      await Promise.all(movements);
    };

    // connect outer pieces
    const secondPhase = async () => {
      let movements = [];
      for (let i = 0; i < leftControls.length; i++) {
        const left = leftControls[i];
        const right = rightControls[i];
        const combinedPositions = [left, right];

        if (i === 0) {
          movementFiller(
            false,
            movements,
            combinedPositions,
            "topRowSecond",
            null
          );
        } else if (i === 3)
          movementFiller(
            false,
            movements,
            combinedPositions,
            "botRowSecond",
            null
          );
      }
      await Promise.all(movements);
    };

    // move all to center
    const thirdPhase = async () => {
      let movements = [];
      for (let i = 0; i < leftControls.length; i++) {
        const left = leftControls[i];
        const right = rightControls[i];
        const combinedPositions = [left, right];
        // could use an array and a loop
        switch (i) {
          case 0:
            movementFiller(
              false,
              movements,
              combinedPositions,
              "outerTopThird",
              null
            );
            break;
          case 1:
            movementFiller(
              false,
              movements,
              combinedPositions,
              "innerTopThird",
              null
            );
            break;
          case 2:
            movementFiller(
              false,
              movements,
              combinedPositions,
              "innerBotThird",
              null
            );
            break;
          case 3:
            movementFiller(
              false,
              movements,
              combinedPositions,
              "outerBotThird",
              null
            );
            break;
          default:
            console.log("Unknown number");

            break;
        }
      }
      await Promise.all(movements);
    };

    await firstPhase();
    await secondPhase();
    await thirdPhase();
  };
  const resetAnimations = async () => {
    let movements = [];
    for (let i = 0; i < leftControls.length; i++) {
      const left = leftControls[i];
      const right = rightControls[i];

      movements.push(left.start("reset"));
      movements.push(right.start("reset"));
    }
    await Promise.all(movements);
  };
  useEffect(() => {
    if (topPiece.current) {
      let top = topPiece.current.getBoundingClientRect();
      setWidth(top.width.toFixed(2));
    }
    if (isInView && distance != 0 && !reducedMotion) {
      runAnimations();
    } else {
      resetAnimations();
    }
  }, [distance, isInView]);
  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {reducedMotion ? (
        <img
          src={completedMobile}
          alt="completed puzzle"
          style={{ width: "80%" }}
        />
      ) : (
        <>
          <SkillsRenderPieces
            screen="mobile"
            pieceRef={topPiece}
            pieces={leftPieces}
            controls={leftControls}
            variants={variants}
          />
          <SkillsRenderPieces
            screen="mobile"
            pieceRef={null}
            pieces={rightPieces}
            controls={rightControls}
            variants={variants}
          />
        </>
      )}
    </div>
  );
};

/* will render one of two puzzles depending on the screen size */
const SkillsSectionPuzzle = () => {
  const size = useWindowSize();
  if (size.width <= 703) {
    // mobile size
    return (
      <>
        <MobileSkillsPuzzle />
      </>
    );
  } else {
    return (
      <>
        <SkillsPuzzle />
      </>
    );
  }
};

export default SkillsSectionPuzzle;
