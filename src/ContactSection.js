import React from "react";
import { SocialLinks } from "./Icons";
const ContactSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      style={{
        paddingTop: "3em",
        height: "40vh",
      }}
    >
      <div className="contact-container">
        <h2>Let's Connect</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "60%",
            width: "100%",
          }}
        >
          <div className="social-links-container">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
