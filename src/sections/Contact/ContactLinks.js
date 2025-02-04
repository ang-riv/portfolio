// contact icons, links, and personal information
import React, { useState } from "react";
import useWindowSize from "../../components/useWindowSize";
import { motion } from "framer-motion";
// svgs for puzzle pieces
import { globalColors } from "../../Imports";

/* sizes for icons based on screen size */
function SocialIconSize() {
  const size = useWindowSize();
  return size.width > 700 ? "3.8em" : "2.5em";
}

/* icons */
function GithubIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={SocialIconSize()}
      height={SocialIconSize()}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.color}
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      ></path>
    </svg>
  );
}

function EmailIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={SocialIconSize()}
      height={SocialIconSize()}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.color}
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
      ></path>
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={SocialIconSize()}
      height={SocialIconSize()}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.color}
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
      ></path>
    </svg>
  );
}

function FrontEndMentorIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={SocialIconSize()}
      height={SocialIconSize()}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={props.color}
        d="M12.17 1.272a.73.73 0 0 0-.718.732v13.914a.73.73 0 0 0 .732.732a.73.73 0 0 0 .732-.732V2.004a.73.73 0 0 0-.745-.732M23.246 5.44a.7.7 0 0 0-.277.063l-6.282 2.804a.733.733 0 0 0 0 1.336l6.282 2.814a.7.7 0 0 0 .3.064a.732.732 0 0 0 .297-1.4L18.78 8.976l4.786-2.137a.734.734 0 0 0 .37-.966a.73.73 0 0 0-.69-.433m-22.5 5.032a.732.732 0 0 0-.722.915c1.736 6.677 7.775 11.341 14.683 11.341a.732.732 0 0 0 0-1.464A13.706 13.706 0 0 1 1.44 11.02a.73.73 0 0 0-.694-.547"
      ></path>
    </svg>
  );
}

/* groups together the contact links + styles */
export function ContactLinks() {
  // hover styles
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // colors depending on which link is hovered over
  const getHoverColor = (index) => {
    switch (index) {
      case 0:
        return globalColors.pink;
      case 1:
        return globalColors.yellow;
      case 2:
        return globalColors.green;
      case 3:
        return globalColors.purple;
      default:
        return "black";
    }
  };

  // specific social link info
  const personalInfo = {
    Github: "https://github.com/ang-riv",
    Email: "mailto: a.riveraa99@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/ang-riv",
    FrontEndMentor: "https://www.frontendmentor.io/profile/ang-riv",
  };

  const size = Object.keys(personalInfo).length;
  const specificInfo = [];
  let titleStyle = "";
  for (let i = 0; i < size; i++) {
    const sites = Object.keys(personalInfo);
    const links = Object.values(personalInfo);
    i === size - 1
      ? (titleStyle = "link-title last-link-title")
      : (titleStyle = "link-title");
    specificInfo.push({ name: sites[i], link: links[i], class: titleStyle });
  }

  return (
    <>
      {specificInfo.map((item, index) => {
        const color = () => {
          return hoveredIndex === index
            ? getHoverColor(hoveredIndex)
            : getHoverColor();
        };

        const componentProps = {
          color: color(),
          marginLeft: "0.3em",
        };

        const iconComponents = [
          <GithubIcon {...componentProps} />,
          <EmailIcon {...componentProps} />,
          <LinkedInIcon {...componentProps} />,
          <FrontEndMentorIcon {...componentProps} />,
        ];
        return (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="link-style"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            style={{
              outline:
                hoveredIndex === index
                  ? `4px solid ${color()}`
                  : getHoverColor(),
            }}
          >
            {iconComponents[index]}
            <p
              className={item.class}
              style={{
                boxShadow:
                  hoveredIndex === index ? `0 4px 0 0 ${color()}` : "none",
              }}
            >
              {item.name}
            </p>
          </motion.a>
        );
      })}
    </>
  );
}
