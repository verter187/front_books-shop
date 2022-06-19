import React from "react";
import s from "./SocIcon.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocIcon({ icon, styleIcon, styleRef, size = "1x" }) {
  return (
    <div style={{ ...styleIcon }} className={s.socicon}>
      <a href="#" style={{ ...styleRef }}>
        <FontAwesomeIcon icon={icon} size={size} />
      </a>
    </div>
  );
}
