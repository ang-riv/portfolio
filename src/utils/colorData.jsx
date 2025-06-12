import { addContent } from "./imgData";
/** GLOBAL COLORS **/
// colors in style props need to be in quotation marks
export function quotationColors(color) {
  return `${color}`;
}

export const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#f2e589", "#9fd1ff"];

// adding quotes + assigning names to colors
export const globalColors = {
  pink: quotationColors(colors[0]),
  green: quotationColors(colors[1]),
  purple: quotationColors(colors[2]),
  yellow: quotationColors(colors[3]),
  blue: quotationColors(colors[4]),
};

// adds colors to different sections
export function addColors(object) {
  addContent(object, "color", colors);
}
