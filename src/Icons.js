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

/**** MOBILE NAVIGATION SECTION ****/

export function QuestionMarkIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4em"
      height="4em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="black"
        d="M13.037 20.863c0 1.302 1.145 2.36 2.555 2.36s2.556-1.058 2.556-2.37V19.15c0-.111.073-.209.18-.242C21.676 17.85 24 14.919 24 11.562v-1.254c0-4.239-3.69-7.773-8.227-7.861c-2.28-.05-4.432.744-6.065 2.212c-1.622 1.469-2.523 3.447-2.523 5.552c0 1.311 1.155 2.369 2.566 2.369s2.555-1.058 2.555-2.36c0-.822.35-1.596.986-2.173a3.4 3.4 0 0 1 2.375-.872c1.78.04 3.223 1.45 3.223 3.143v1.244c0 1.468-1.124 2.731-2.683 2.996c-1.834.313-3.17 1.791-3.17 3.514zM15.5 30a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
      ></path>
    </svg>
  );
}

export function GearIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4em"
      height="4em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"
      ></path>
    </svg>
  );
}

export function CodeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4em"
      height="4em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="black"
          d="M14.62 2.662a1.5 1.5 0 0 1 1.04 1.85l-4.431 15.787a1.5 1.5 0 0 1-2.889-.81L12.771 3.7a1.5 1.5 0 0 1 1.85-1.039ZM7.56 6.697a1.5 1.5 0 0 1 0 2.12L4.38 12l3.182 3.182a1.5 1.5 0 1 1-2.122 2.121L1.197 13.06a1.5 1.5 0 0 1 0-2.12l4.242-4.243a1.5 1.5 0 0 1 2.122 0Zm8.88 2.12a1.5 1.5 0 1 1 2.12-2.12l4.243 4.242a1.5 1.5 0 0 1 0 2.121l-4.242 4.243a1.5 1.5 0 1 1-2.122-2.121L19.621 12z"
        ></path>
      </g>
    </svg>
  );
}

export function SpeechIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4em"
      height="4em"
      viewBox="0 0 26 26"
      {...props}
    >
      <path
        fill="black"
        d="M13 .188C5.924.188.187 5.252.187 11.5c0 3.177 1.488 6.039 3.876 8.094c-.521 3.009-3.887 4.234-3.657 5.062c3.01 1.245 8.971-1.645 9.875-2.093c.874.166 1.789.25 2.719.25c7.076 0 12.813-5.065 12.813-11.313S20.075.187 13 .187z"
      ></path>
    </svg>
  );
}

export const mobileNavIcons = [
  <QuestionMarkIcon />,
  <GearIcon />,
  <CodeIcon />,
  <SpeechIcon />,
];
