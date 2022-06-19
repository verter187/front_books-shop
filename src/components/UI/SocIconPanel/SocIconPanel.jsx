import React from "react";
import s from "./SocIconPanel.module.sass";
import SocIcon from "../../UI/SocIcon/SocIcon";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocIconPanel({ footer = false, showInsta = false }) {
  let iconSize = footer ? "55px" : "45px",
    styleIcon = {
      borderColor: footer ? "#FFCA42" : "",
      width: iconSize,
      height: iconSize,
    },
    styleRef = { color: footer ? "white" : "black" };

  return (
    <div className={s.social_icons}>
      <SocIcon icon={faFacebookF} styleIcon={styleIcon} styleRef={styleRef} />
      <SocIcon icon={faTwitter} styleIcon={styleIcon} styleRef={styleRef} />
      <SocIcon icon={faLinkedinIn} styleIcon={styleIcon} styleRef={styleRef} />
      {showInsta ? (
        <SocIcon icon={faInstagram} styleIcon={styleIcon} styleRef={styleRef} />
      ) : (
        ""
      )}
    </div>
  );
}
