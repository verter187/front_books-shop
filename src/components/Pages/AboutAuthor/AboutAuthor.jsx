import React from "react";
import Infocard from "../../Infocard/Infocard";
import s from "./AboutAuthor.module.sass";
import author_img from "../../../img/author.png";
import Cutaway from "../../Cutaway/Cutaway";
import Title2 from "../../UI/Title2";

const infocards = [
  { title: "02", text: "Books Published" },
  { title: "4.5", text: "User Reviews" },
  { title: "04", text: "Best Seller Awards", borderColor: "#FFFFFF" },
];

export default function AboutAuthor() {
  return (
    <div className={s.about_author}>
      <div className={s.container}>
        <div className={s.about_author_photo}>
          <img src={author_img} alt="author" />
        </div>
        <div className={s.about_author_info}>
          <Title2>About the Author</Title2>
          <p className={s.about_author_info_text}>
            We believe that bookstores are essential to a healthy culture.
            They’re where authors can connect with readers, where we discover
            new writers, where children get hooked on the thrill of reading that
            can last a lifetime.
          </p>
          <div className={s.infocards}>
            {infocards.map((infocard, i) => (
              <Infocard key={i} {...infocard} />
            ))}
          </div>
          <Cutaway
            name="John Abraham , Ph.d"
            mail="johnabraham@gmail.com"
            phone="(+2) 123 545 9000"
            img_name="qrcode.png"
          />
        </div>
      </div>
    </div>
  );
}
