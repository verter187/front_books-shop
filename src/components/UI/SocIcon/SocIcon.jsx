import React from "react";
import s from "./SocIcon.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocIcon({ icon, size = "1x" }) {
  return (
    <div className={s.socicon}>
      <a href="#">
        <FontAwesomeIcon icon={icon} size={size} />
      </a>
    </div>
  );
}
