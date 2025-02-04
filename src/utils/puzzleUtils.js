export function directProps(className, variants) {
  return { className: className, variants: variants };
}

export const specificProps = (imgArr, index, controls, ref) => {
  return {
    imgArr: imgArr,
    ascendingIndex: index,
    controls: controls,
    specificRef: ref,
  };
};
