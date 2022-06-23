import React from "react";
import s from "./Articles.module.sass";
import Article from "../../Article/";
import Title from "../../UI/Title";

export default function Articles({ articles }) {
  return (
    <>
      <Title>Trusted By The Best</Title>
      <div className={s.articles}>
        <div className={s.container}>
          {articles.map((article, i) => (
            <Article key={i} {...article} />
          ))}
        </div>
      </div>
    </>
  );
}
