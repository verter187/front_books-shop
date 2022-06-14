import React from "react";
import Button from "../../UI/Button/Button";
import s from "./Header.module.sass";
import logo from "../../../img/bookmarks.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
                <div>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} size="1x" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <ul className={s.menu}>
                <li className={s.menu_item}>
                  <a href="#" className={s.menu_link}>
                    Home
                  </a>
                </li>
                <li className={s.menu_item}>
                  <a href="#" className={s.menu_link}>
                    About
                  </a>
                </li>
                <li className={s.menu_item}>
                  <a href="#" className={s.menu_link}>
                    Pages
                  </a>
                </li>
                <li className={s.menu_item}>
                  <a href="#" className={s.menu_link}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <Button>Order Today</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
