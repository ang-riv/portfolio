import React from "react";
import { Icon } from "@iconify/react";
export function PuzzlePiece() {
  return (
    <>
      <Icon
        icon="ooui:puzzle-rtl"
        style={{
          color: "#f2e589",
          height: "13em",
          width: "13em",
          transform: "rotate(180deg)",
          marginLeft: "1.3em",
        }}
      />

      <Icon
        icon="ooui:puzzle-rtl"
        style={{
          color: "#f2e589",
          height: "13em",
          width: "13em",
          transform: "rotate(-90deg)",
          marginBottom: "-1.3em",
        }}
      />
      <Icon
        icon="ooui:puzzle-rtl"
        style={{
          color: "#f2e589",
          height: "13em",
          width: "13em",
          transform: "rotate(90deg)",
          marginBottom: "1.3em",
        }}
      />
      <Icon
        icon="ooui:puzzle-rtl"
        style={{ color: "#f2e589", height: "13em", width: "13em" }}
      />
    </>
  );
}
