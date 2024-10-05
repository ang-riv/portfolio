import React from "react";
import { SocialLinks } from "./Icons";
const ContactSection = React.forwardRef((props, ref) => {
  return (
    <section className="contact-section" ref={ref}>
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
