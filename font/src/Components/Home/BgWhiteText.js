import React from "react";
import "./CSS/Home.css";
import img2 from "../../Req img/landing-background-img-1.png";

export default function BgWhiteText() {
  return (
    <div>
      <p id="bg_whiteP"> hello </p>
      <p id="beauty_set"> Beautiful Set </p>
      <p id="enlighten">Enlighten your Future</p>
      <img src={img2} alt="" id="right_side_img" />
    </div>
  );
}
