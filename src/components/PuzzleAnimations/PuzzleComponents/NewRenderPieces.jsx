import { motion } from "framer-motion";
const NewRenderPieces = ({ pieceRef, pieces, controls, variants }) => {
  return (
    <div className="puzzle-row">
      {controls.map((_, index) => {
        if (index === 0) {
          return (
            <motion.img
              src={pieces[index]}
              ref={pieceRef}
              animate={controls[index]}
              variants={variants}
            />
          );
        } else {
          return (
            <motion.img
              src={pieces[index]}
              animate={controls[index]}
              variants={variants}
            />
          );
        }
      })}
    </div>
  );
};

export default NewRenderPieces;
