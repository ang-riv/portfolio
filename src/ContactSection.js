import React from "react";
import { SocialLinks } from "./Icons";
const ContactSection = React.forwardRef((props, ref) => {
  const outline = {
    width: "100%",
    height: "100%",
    backgroundColor: "#9FD1FF",
  };
  const titleStyle = {
    textAlign: "left",
    padding: "2% 0 0 5%",
    fontSize: "2.7em",
  };
  return (
    <section
      ref={ref}
      style={{
        paddingTop: "3em",
        height: "40vh",
      }}
    >
      <div style={outline}>
        <h2 style={titleStyle}>Let's Connect</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "70%",
            width: "100%",
          }}
        >
          <div
            style={{
              marginTop: "1%",
              height: "80%",
              width: "70%",
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-around",
            }}
          >
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
