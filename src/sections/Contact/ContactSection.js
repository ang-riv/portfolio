import React from "react";
import { ContactLinks } from "./ContactLinks";
import SectionTitles from "../../components/SectionTitles";
const ContactSection = React.forwardRef((_, ref) => {
  return (
    <section className="contact-section" ref={ref}>
      <div className="contact-container">
        <SectionTitles title="Let's Connect" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "59%",
            width: "100%",
          }}
        >
          <div className="social-links-container">
            <ContactLinks />
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
