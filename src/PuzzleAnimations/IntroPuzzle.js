// 2x2 puzzle in introSection
import React, { useRef, useEffect, useState, useCallback } from "react";
import { useAnimation, useInView } from "framer-motion";
// svgs for puzzle pieces
import { introPieces } from "../Imports";
import RenderPieces from "../RenderPieces";

const IntroPuzzle = () => {
  // container for puzzle
  const containerRef = useRef(null);
  const prevDistance = useRef(null);
  // top puzzle piece
  const topRef = useRef(null);
  const [top, setTop] = useState(null);
  // separate controls for each piece
  const controls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;

  // amount needed for each piece to move vertically and join together
  const [distance, setDistance] = useState(0);
  const [puzzleGap, setPuzzleGap] = useState(0);

  // make sure that the container is in the middle of the viewport
  const isInView = useInView(containerRef, { margin: "-50% -50% -50% -50%" });

  //** animations
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

      // find the midpoint of the container, pieces will move vertically to meet it
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
      const newDistance = Math.round(midpoint - top);

      // only reset the distance if it's different
      if (newDistance !== prevDistance.current) {
        setDistance(newDistance);
        prevDistance.current = newDistance;
      }
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
    let timeoutId;
    if (isInView) {
      findDistance();
      timeoutId = setTimeout(() => {
        runAnimations();
      }, 500);
    } else {
      resetAnimations();
    }

    return () => clearTimeout(timeoutId);
  }, [isInView, distance, top, findDistance, runAnimations, resetAnimations]);

  //** rendering puzzle pieces props
  // to be placed directly in the JSX
  const directProps = {
    className: "intro-piece",
    variants: variants,
  };
  // to be used in specific places in the rendering component
  const specificProps = {
    imgArr: introPieces,
    ascendingIndex: true,
    controls: controls,
    specificRef: topRef,
  };

  return (
    <figure className="intro-puzzle-container" ref={containerRef}>
      <RenderPieces directProps={directProps} specificProps={specificProps} />
    </figure>
  );
};

export default IntroPuzzle;
