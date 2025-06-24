// creates props objects for RenderPieces - avoids creating a new object in each puzzle every time

// for props to be put directly into the JSX code
export const directProps = (className, variants) => {
  return { className: className, variants: variants };
};

// for props to be used individually through RenderPieces
export const specificProps = (imgArr, index, controls, ref) => {
  return {
    imgArr: imgArr,
    ascendingIndex: index,
    controls: controls,
    specificRef: ref,
  };
};
