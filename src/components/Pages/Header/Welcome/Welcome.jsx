import React from "react";
import s from "./Welcome.module.sass";
import books_img from "../../../../img/dark_light.png";
import Button from "../../../UI/Button/Button";
import Block from "../../../UI/Block/Block";

export default function Welcome() {
  return (
    <div className={s.welcome}>
      <div className={s.container}>
        <div className={s.welcome_info}>
          <h3>Welcome To Pages!!!</h3>
          <h2>Your Books From</h2>
          <h2>The Best Writer.</h2>
          <p>
            We believe that reading books are essential to a healthy culture.
          </p>
          <p>
            We believe that reading books are essential to a healthy culture.
          </p>
          <div>
            <Button>Order Today</Button>
            <a href="#">Readv Free Demo</a>
          </div>
          <div className={s.blocks}>
            <Block title="Pages" text="250pages" />
            <Block title="Length" text="10 Hours" />
            <Block title="Rating" text="4.5/5 (305 rating)" />
          </div>
        </div>
        <div className={s.books_face}>
          <img src={books_img} alt="logo" />
        </div>
      </div>
    </div>
  );
}
