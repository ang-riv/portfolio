import { motion } from "framer-motion";
import { desktopPieces } from "../../../utils/imgData";
const SkillsRenderPieces = ({
  screen,
  pieceRef,
  pieces,
  controls,
  variants,
}) => {
  const pieceNames = Object.keys(desktopPieces);
  return (
    <>
      {screen === "desktop" ? (
        <div className="puzzle-row">
          {controls.map((_, index) => {
            if (index === 0) {
              return (
                <motion.img
                  key={index}
                  src={pieces[index]}
                  ref={pieceRef}
                  animate={controls[index]}
                  variants={variants}
                  alt={`${pieceNames[index]} puzzle piece`}
                />
              );
            } else {
              return (
                <motion.img
                  key={index}
                  src={pieces[index]}
                  animate={controls[index]}
                  variants={variants}
                  alt={`${pieceNames[index]} puzzle piece`}
                />
              );
            }
          })}
        </div>
      ) : (
        <div className="puzzle-column">
          {controls.map((_, index) => {
            if (index === 0 && pieceRef != null) {
              return (
                <motion.img
                  key={index}
                  src={pieces[index]}
                  ref={pieceRef}
                  animate={controls[index]}
                  variants={variants}
                  alt={`mobile ${pieceNames[index]} puzzle piece`}
                />
              );
            } else {
              return (
                <motion.img
                  key={index}
                  src={pieces[index]}
                  animate={controls[index]}
                  variants={variants}
                  alt={`mobile ${pieceNames[index]} puzzle piece`}
                />
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default SkillsRenderPieces;
