import React from "react";

const ContactSection = React.forwardRef((props, ref) => {
  const outline = {
    width: "45%",
    backgroundColor: "#9FD1FF",
  };
  const titleStyle = {
    textAlign: "left",
    padding: "0 0 0 5%",
  };
  const semiCircle = {
    width: "10rem",
    height: "5rem",
    backgroundColor: "#9FD1FF",
    borderRadius: "5rem 5rem 0 0",
    transform: "rotate(90deg)",
    position: "relative",
    bottom: "56%",
    left: "91%",
  };
  const semiCircle2 = {
    width: "10rem",
    height: "5rem",
    backgroundColor: "white",
    borderRadius: "5rem 5rem 0 0",
    transform: "rotate(90deg)",
    position: "relative",
    left: "-9%",
    top: "36%",
  };
  return (
    <section
      ref={ref}
      style={{
        paddingTop: "3em",
        height: "40vh",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={outline}>
        <h2 style={titleStyle}>Let's Connect</h2>
        <div style={{ outline: "1px dotted red", height: "60%" }}></div>
        <div style={semiCircle}></div>
      </div>
      <div style={outline}>
        <div style={semiCircle2}></div>
      </div>
    </section>
  );
});

export default ContactSection;
