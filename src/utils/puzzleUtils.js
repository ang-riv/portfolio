// creates props objects for RenderPieces to avoid creating a new object in each puzzle every time
export const directProps = (className, variants) => {
  return { className: className, variants: variants };
};

export const specificProps = (imgArr, index, controls, ref) => {
  return {
    imgArr: imgArr,
    ascendingIndex: index,
    controls: controls,
    specificRef: ref,
  };
};
