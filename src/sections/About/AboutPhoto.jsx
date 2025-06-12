import { React, useEffect, useRef, useState } from "react";
import avatar from "../../assets/avatar.png";
import AboutIcon from "./AboutIcon";

const AboutPhoto = ({ activeTab }) => {
  const containerRef = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  let halfTop = containerTop / 2 + 15;
  const numOfIcons = 4;
  let positions = [];

  // icon placements
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const height = container.height / numOfIcons;
      setContainerWidth(container.width);
      setContainerTop(height);
    }
  }, [containerRef, containerTop]);

  // find coordinates
  for (let i = 0; i < numOfIcons; i++) {
    // minus halfTop to center the icon in each section
    positions.push(containerTop + i * containerTop - halfTop);
  }

  // icons with correct coordinates
  const iconComponents = positions.map((yPlacement, index) => {
    // center icon on the edge of the container + alternate sides
    let side = 0;
    index % 2 === 0 ? (side = -25) : (side = containerWidth - 25);
    return (
      <AboutIcon
        key={index}
        activeTab={activeTab}
        yPlacement={yPlacement}
        xPlacement={side}
      />
    );
  });
  return (
    <div className="about-photo center-flex" ref={containerRef}>
      {iconComponents}
      <img
        src={avatar}
        alt="profile avatar"
        style={{
          height: "80%",
          width: "90%",
        }}
      />
    </div>
  );
};

export default AboutPhoto;
