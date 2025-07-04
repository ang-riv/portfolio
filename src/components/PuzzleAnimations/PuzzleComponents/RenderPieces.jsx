// puzzle piece images for the intro and skills puzzles
import { motion } from "framer-motion";
import { introPieces } from "../../../utils/imgData";
const RenderPieces = ({ directProps, specificProps }) => {
  const { imgArr, ascendingIndex, controls, specificRef } = specificProps;

  const puzzleImgs = [];
  const entries = Object.entries(imgArr);
  entries.forEach(([key, value], index) => {
    // alt text
    const text = "puzzle piece with the word " + key;
    // deciding the order of the index
    let i = 0;
    ascendingIndex ? (i = index) : (i = entries.length - 1 - index);

    const refs = () => {
      if (imgArr === introPieces && key === "pinkPiece") {
        return { ref: specificRef };
      }
    };
    puzzleImgs.push(
      <>
        <motion.img
          src={value}
          key={key}
          alt={text}
          {...directProps}
          {...refs()}
          animate={controls[i]}
        ></motion.img>
      </>
    );
  });

  return puzzleImgs;
};

export default RenderPieces;
