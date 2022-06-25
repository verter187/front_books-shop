import React from "react";
import s from "./Welcome.module.sass";
import books_img from "../../../../img/dark_light.png";
import Button from "../../../UI/Button/Button";
import Block from "../../../UI/Block/Block";

export default function Welcome() {
  const blockItems = [
    {
      title: "Pages:",
      text: "250 pages",
    },
    {
      title: "Length:",
      text: "10 Hours",
    },
    {
      title: "Rating:",
      text: "4.5/5 (305 rating)",
    },
  ];

  return (
    <div className={s.welcome}>
      <div className={s.container}>
        <div className={s.welcome_info}>
          <p className={s.welcome_title}>Welcome To Pages!!!</p>
          <h2>Your Books From</h2>
          <h2>The Best Writer.</h2>
          <div className={s.welcome_text}>
            <p>
              We believe that reading books are essential to a healthy culture.
            </p>
            <p>They’re where authors can connect with readers.</p>
          </div>
          <div className={s.welcome_button}>
            <Button>Order Today</Button>
            <a href="#">Ready Free Demo</a>
          </div>
          <div className={s.blocks}>
            {blockItems.map((blockItem, i) => (
              <Block key={i} {...blockItem} />
            ))}
          </div>
        </div>
        <div className={s.books_face}>
          <img src={books_img} alt="logo" />
        </div>
      </div>
    </div>
  );
}
