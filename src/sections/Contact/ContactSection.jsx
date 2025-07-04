import React from "react";
import { ContactLinks } from "./ContactLinks";
import SectionTitles from "../../components/SectionTitles";
const ContactSection = React.forwardRef(({ id }, ref) => {
  return (
    <section className="contact-section" ref={ref} id={id}>
      <div className="contact-container">
        <SectionTitles title="Let's Connect" />
        <div className="contact-content-wrapper">
          <div className="links-container">
            <ContactLinks />
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
