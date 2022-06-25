import React from "react";
import s from "./SocIconPanel.module.sass";
import SocIcon from "../../UI/SocIcon/SocIcon";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocIconPanel({
  footer = false,
  showInstagram = false,
}) {
  const arrIcons = [faFacebookF, faTwitter, faLinkedinIn];
  if (showInstagram) {
    console.log(showInstagram);
    arrIcons.push(faInstagram);
  }

  let iconSize = footer ? "55px" : "45px",
    styleIcon = {
      borderColor: footer ? "#FFCA42" : "",
      backgroundColor: footer ? "#1B3764" : "#FFFFFF",
      width: iconSize,
      height: iconSize,
    },
    styleRef = { color: footer ? "white" : "black" };

  return (
    <div className={s.social_icons}>
      {arrIcons.map((icon, i) => (
        <SocIcon
          key={i}
          icon={icon}
          styleIcon={styleIcon}
          styleRef={styleRef}
        />
      ))}
    </div>
  );
}
