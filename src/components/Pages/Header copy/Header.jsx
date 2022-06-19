import React from "react";
import Button from "../../../UI/Button/Button";
import s from "./Header.module.sass";
import logo from "../../../img/bookmarks.svg";
import SocIcon from "../../../UI/SocIcon/SocIcon";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Navbar from "../Header/Navbar";

const socials = [faFacebookF, faTwitter, faLinkedinIn];

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.nav}>
        <div className={s.container}>
          <div className={s.menu_container}>
            <div>
              <a href="#" className={s.menu_logo}>
                <img src={logo} alt="logo" />
                Pages
              </a>
              <div className={s.social_icons}>
                <SocIcon icon={faFacebookF} />
                <SocIcon icon={faTwitter} />
                <SocIcon icon={faLinkedinIn} />
              </div>
            </div>
            <Navbar />
            <Button>Order Today</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
