import { motion } from "framer-motion";
const NewRenderPieces = ({ screen, pieceRef, pieces, controls, variants }) => {
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
      ) : (
        <></>
      )}
    </>
  );
};

export default NewRenderPieces;
