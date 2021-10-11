import React from "react";
import img1 from "../../Req img/landing-rev-img-1.jpg";
import "./CSS/Home.css";

export default function Header() {
  return (
    <div id="t_bale">
      <img src={img1} alt="" srcset="" id="landing_img" />
      <h1 id="make_the"> make the </h1>{" "}
      <p id="perfect_dance_move"> PERFECT DANCE MOVE </p>{" "}
      <div id="hr_line">
        <p id="h"> hello </p>{" "}
      </div>{" "}
      <div id="PURCHASE_div"> PURCHASE </div>{" "}
    </div>
  );
}
