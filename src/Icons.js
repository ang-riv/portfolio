import React, { useRef, useEffect, useState, useCallback } from "react";
import useWindowSize from "./useWindowSize";
import { useAnimation, motion, useInView } from "framer-motion";
// svgs for puzzle pieces
import {
  introPieces,
  desktopPieces,
  mobilePieces,
  globalColors,
} from "./Imports";

/**** INTRO SECTION ****/

// 2x2 puzzle in introSection
export function IntroPuzzle() {
  // container for puzzle
  const containerRef = useRef(null);
  const prevDistance = useRef(null);
  // make sure that the container is in the middle of the viewport
  const isInView = useInView(containerRef, { margin: "-50% -50% -50% -50%" });

  const controls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;
  // top puzzle piece
  const topRef = useRef(null);
  const [top, setTop] = useState(null);

  // amount needed for each piece to move vertically and join together
  const [distance, setDistance] = useState(0);
  const [puzzleGap, setPuzzleGap] = useState(0);

  // adds 50 due to original puzzle piece's jutted out piece is 50px
  const yMovement = Number(distance + puzzleGap);
  const xMovement = Number(puzzleGap);
  const variants = {
    even: { y: -yMovement, transition: { duration: 0.5 } },
    odd: { y: yMovement, transition: { duration: 0.5 } },
    left: { x: -xMovement, transition: { duration: 0.5 } },
    right: { x: xMovement, transition: { duration: 0.5 } },
    reset: { x: 0, y: 0 },
  };

  //** calculates distance/position pieces need to move and join
  const findDistance = useCallback(() => {
    if (topRef.current && containerRef.current) {
      const topPiece = topRef.current.getBoundingClientRect();
      const container = containerRef.current.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;

      // position of the container plus how far down the user has scrolled to get it's exact position
      const containerTop = container.top + scrollTop;
      const containerBottom = container.bottom + scrollTop;
      const midpoint = (containerTop + containerBottom) / 2;
      const piecePosition = topPiece.bottom + scrollTop;

      // figuring out the size of the piece of the puzzle that is sticking out using the original img sizes
      const multiplier = topPiece.width / 200;
      const gap = (50 * multiplier).toFixed(2);
      // bottom of first puzzle piece
      setTop(piecePosition.toFixed(2));
      setPuzzleGap(gap);

      // target place where pieces need to move to + distance needed
      //const newDistance = Math.round(midpoint - top);
      /*
      console.log("ran once");

      if (newDistance !== prevDistance.current) {
        setDistance(newDistance);
        prevDistance.current = newDistance;
        console.log("distance changed, ran logic");
      } else {
        console.log("distance is the same, skipped");
      }
        */
    }
  }, [top]);

  //*** puzzle animations
  //* joins pieces together
  const runAnimations = useCallback(async () => {
    // y movement
    for (let i = 0; i < controls.length; i++) {
      if (i === 0 || i === 1) await controls[i].start("odd");
      else await controls[i].start("even");
    }

    // x movement
    for (let i = 0; i < controls.length; i++) {
      if (i === 0 || i === 2) controls[i].start("right");
      else controls[i].start("left");
    }
  }, [controls]);

  //* return to original positions
  const resetAnimations = useCallback(async () => {
    for (let i = 0; i < controls.length; i++) {
      controls[i].start("reset");
    }
  }, [controls]);

  useEffect(() => {
    // puzzle animations on scroll
    if (isInView) {
      findDistance();
      // maybe get rid of this
      setTimeout(() => {
        runAnimations();
      }, 500);
    } else {
      resetAnimations();
    }
  }, [isInView, distance, top, findDistance, runAnimations, resetAnimations]);

  //** rendering puzzle pieces
  const puzzleImgs = [];
  // to account for 0 index
  let countUp = -1;

  for (const [key, value] of Object.entries(introPieces)) {
    const word = "puzzle piece";
    countUp++;

    // attaching ref to only the first piece for calculates
    const singlePieceRef = () => {
      if (key === "pinkPiece") return { ref: topRef };
    };

    puzzleImgs.push(
      <>
        <motion.img
          src={value}
          key={key}
          alt={word}
          className="intro-piece"
          variants={variants}
          {...singlePieceRef()}
          animate={controls[countUp]}
        ></motion.img>
      </>
    );
  }
  return (
    <figure className="intro-puzzle-container" ref={containerRef}>
      {puzzleImgs}
    </figure>
  );
}

/**** SKILLS SECTION ****/
// puzzle in skill section
export function SkillsPuzzle() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 1.0,
    margin: "-40% 0px",
  });

  const controls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;
  const centerRef = useRef(null);
  const [width, setWidth] = useState(null);

  // 125 is the originalwidth of the puzzle piece image and 25 is the original distance between them
  const originalWidth = 125;
  const originalDistance = 25;
  const divisor = (width / originalWidth).toFixed(5);
  const distance = (originalDistance * divisor).toFixed(5);

  // create a random direction to rotate the piece
  const randomNum = () => {
    return Math.floor(Math.random() * 361);
  };

  const variants = {
    start: { x: 0, rotate: 0, transition: { duration: 0.5 } },
    reset: { x: 0 },
  };

  useEffect(() => {
    // move the pieces
    const runAnimations = async (controlsArr) => {
      let rect = 0;
      // rotate to correct position first
      for (let i = 0; i < controlsArr.length; i++) {
        await controlsArr[i].start("start");
      }

      // calculate distance
      if (centerRef.current) {
        rect = centerRef.current.getBoundingClientRect();
        setWidth(rect.width.toFixed(2));
      }

      // then move
      for (let i = 1; i < controlsArr.length; i++) {
        await controlsArr[i].start({
          x: i * distance,
        });
      }

      // then move to the center
      for (let i = 0; i < controlsArr.length; i++) {
        let holder = 0;
        if (i > 0) {
          holder = i * distance - distance * 2;
        } else if (i === 0) {
          holder = -distance * 2;
        }
        controlsArr[i].start({
          x: holder,
          transition: { duration: 0.5 },
        });
      }
    };

    // reset pieces
    const resetAnimations = async (controlsArr) => {
      for (let i = 0; i < controlsArr.length; i++) {
        controlsArr[i].start("reset");
      }

      for (let i = 0; i < controlsArr.length; i++) {
        controlsArr[i].start({
          rotate: randomNum(),
          transition: { duration: 0.5 },
        });
      }
      setWidth(0);
    };
    if (isInView) {
      runAnimations(controls);
    } else {
      resetAnimations(controls);
    }
  }, [isInView, distance]); // eslint-disable-line react-hooks/exhaustive-deps

  // condensing imgs
  const imgArr = [];
  let counter = Object.keys(desktopPieces).length;

  for (const [key, value] of Object.entries(desktopPieces)) {
    const word = "puzzle piece with the word " + key;
    counter--;
    imgArr.push(
      <>
        <motion.img
          src={value}
          alt={word}
          initial={{ rotate: randomNum() }}
          variants={variants}
          viewport={{ root: ref }}
          ref={centerRef}
          animate={controls[counter]}
        ></motion.img>
      </>
    );
  }

  return (
    <div className="skill-desktop-div" ref={ref}>
      {imgArr}
    </div>
  );
}

export function MobileSkillsPuzzle() {
  // container for puzzle
  const prevDistance = useRef(null);
  const containerRef = useRef(null);
  // make sure that the container is in the middle of the viewport
  const isInView = useInView(containerRef, { margin: "-50% -50% -50% -50%" });
  const controls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;

  // top puzzle piece
  const [top, setTop] = useState(0);

  // amount needed for each piece to move vertically and join together
  const [distance, setDistance] = useState(0);

  const yMovement = distance;
  const xMovement = distance * 2;
  const topPiece = useRef(null);
  const botPiece = useRef(null);

  const variants = {
    down: { y: yMovement, transition: { duration: 0.5 } },
    up: { y: -yMovement, transition: { duration: 0.5 } },
    right: { x: -xMovement, transition: { duration: 0.5 } },
    left: { x: xMovement, transition: { duration: 0.5 } },
    reset: { x: 0, y: 0 },
  };
  //* joins pieces together
  const runAnimations = useCallback(async () => {
    // x movement
    // if it's the first piece, or the third piece, move right
    for (let i = 0; i < controls.length; i++) {
      if (i === 0 || i === 3) await controls[i].start("left");
      else if (i === 2 || i === 5) await controls[i].start("right");
    }

    // y movement
    for (let i = 0; i < controls.length; i++) {
      if (i === 0 || i === 1 || i === 2) controls[i].start("down");
      else controls[i].start("up");
    }
  }, [controls]);

  //* return to original positions
  const resetAnimations = useCallback(async () => {
    for (let i = 0; i < controls.length; i++) {
      controls[i].start("reset");
    }
  }, [controls]);

  const findDistance = useCallback(() => {
    if (topPiece.current && containerRef.current) {
      const rect = topPiece.current.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;

      // position of the container plus how far down the user has scrolled to get it's exact position
      const piecePosition = rect.bottom + scrollTop;

      // bottom of first puzzle piece
      setTop(piecePosition.toFixed(2));

      // calculating the distance needed
      const decrease = 150 - rect.width;
      const newDistance = Math.round(25 - 25 * (decrease / 150));

      if (newDistance !== prevDistance.current) {
        setDistance(newDistance);
        prevDistance.current = newDistance;
        //console.log("distance changed, ran logic");
      } else {
        //console.log("distance is the same, skipped");
      }
    }
  }, [top, distance]);

  useEffect(() => {
    //** calculates distance/position pieces need to move and join
    //*** puzzle animations
    // checks to see if the window has been resized, distance might change if it doe
    // puzzle animations on scroll

    if (isInView) {
      if (distance < 10 || distance >= 100) {
        findDistance();
      }
      setTimeout(() => {
        runAnimations();
      }, 500);
    } else {
      resetAnimations();
    }
  }, [isInView, distance, top, runAnimations, resetAnimations, findDistance]);

  //** rendering puzzle pieces
  const puzzleImgs = [];
  // to account for 0 index
  let countUp = -1;

  for (const [key, value] of Object.entries(mobilePieces)) {
    const word = "puzzle piece";
    countUp++;

    // attaching ref to only the first piece for calculates
    const singlePieceRef = () => {
      if (key === "css") return { ref: topPiece };
      else if (key === "react") return { ref: botPiece };
    };

    puzzleImgs.push(
      <motion.img
        src={value}
        alt={word}
        className="mobile-piece"
        variants={variants}
        {...singlePieceRef()}
        animate={controls[countUp]}
      ></motion.img>
    );
  }
  return (
    <>
      <motion.div className="skill-mobile-div" ref={containerRef}>
        {puzzleImgs}
      </motion.div>
    </>
  );
}

/* will render one of the puzzles depending on the screen size */
export function SkillsSectionPuzzle() {
  const size = useWindowSize();
  if (size.width < 700) {
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
}

/**** CONTACT SECTION ****/

/* sizes for icons based on screen size */
function SocialIconSize() {
  const size = useWindowSize();
  return size.width > 700 ? "3.8em" : "2.5em";
}

export function GithubIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={SocialIconSize()}
      height={SocialIconSize()}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.color}
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      ></path>
    </svg>
  );
}

export function EmailIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={SocialIconSize()}
      height={SocialIconSize()}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.color}
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
      ></path>
    </svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={SocialIconSize()}
      height={SocialIconSize()}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.color}
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
      ></path>
    </svg>
  );
}

export function FrontEndMentorIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={SocialIconSize()}
      height={SocialIconSize()}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.color}
        d="M12.17 1.272a.73.73 0 0 0-.718.732v13.914a.73.73 0 0 0 .732.732a.73.73 0 0 0 .732-.732V2.004a.73.73 0 0 0-.745-.732M23.246 5.44a.7.7 0 0 0-.277.063l-6.282 2.804a.733.733 0 0 0 0 1.336l6.282 2.814a.7.7 0 0 0 .3.064a.732.732 0 0 0 .297-1.4L18.78 8.976l4.786-2.137a.734.734 0 0 0 .37-.966a.73.73 0 0 0-.69-.433m-22.5 5.032a.732.732 0 0 0-.722.915c1.736 6.677 7.775 11.341 14.683 11.341a.732.732 0 0 0 0-1.464A13.706 13.706 0 0 1 1.44 11.02a.73.73 0 0 0-.694-.547"
      ></path>
    </svg>
  );
}

/* groups together the social links + styles */
export function SocialLinks() {
  // hover styles
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // colors depending on which link is hovered over
  const getHoverColor = (index) => {
    switch (index) {
      case 0:
        return globalColors.pink;
      case 1:
        return globalColors.yellow;
      case 2:
        return globalColors.green;
      case 3:
        return globalColors.purple;
      default:
        return "black";
    }
  };

  // specific social link info
  const specificInfo = [
    {
      name: "Github",
      link: "https://github.com/ang-riv",
      class: "link-title",
    },
    {
      name: "Email",
      link: "mailto: a.riveraa99@gmail.com",
      class: "link-title",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ang-riv",
      class: "link-title",
    },
    {
      name: "FrontEndMentor",
      link: "https://www.frontendmentor.io/profile/ang-riv",
      class: "link-title last-link-title",
    },
  ];
  return (
    <>
      {specificInfo.map((item, index) => {
        const color = () => {
          return hoveredIndex === index
            ? getHoverColor(hoveredIndex)
            : getHoverColor();
        };

        const componentProps = {
          color: color(),
          marginLeft: "0.3em",
        };

        const iconComponents = [
          <GithubIcon {...componentProps} />,
          <EmailIcon {...componentProps} />,
          <LinkedInIcon {...componentProps} />,
          <FrontEndMentorIcon {...componentProps} />,
        ];
        return (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="link-style"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            style={{
              outline:
                hoveredIndex === index
                  ? `4px solid ${color()}`
                  : getHoverColor(),
            }}
          >
            {iconComponents[index]}
            <p
              className={item.class}
              style={{
                boxShadow:
                  hoveredIndex === index ? `0 4px 0 0 ${color()}` : "none",
              }}
            >
              {item.name}
            </p>
          </motion.a>
        );
      })}
    </>
  );
}
