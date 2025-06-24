import { motion } from "framer-motion";
const SkillsRenderPieces = ({
  screen,
  pieceRef,
  pieces,
  controls,
  variants,
}) => {
  return (
    <>
      {screen === "desktop" ? (
        <div className="puzzle-row">
          {controls.map((_, index) => {
            if (index === 0) {
              return (
                <motion.img
                  src={pieces[index]}
                  ref={pieceRef}
                  animate={controls[index]}
                  variants={variants}
                  alt="puzzle piece"
                />
              );
            } else {
              return (
                <motion.img
                  src={pieces[index]}
                  animate={controls[index]}
                  variants={variants}
                  alt="puzzle piece"
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
                  alt="puzzle piece"
                />
              );
            } else {
              return (
                <motion.img
                  key={index}
                  src={pieces[index]}
                  animate={controls[index]}
                  variants={variants}
                  alt="puzzle piece"
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
