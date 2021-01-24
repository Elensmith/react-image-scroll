import React from "react";
import "./ScrollRight.css";

function ScrollRight(props) {
  return (
    <div className="scroll-right">
      <div className="scroll" >
        <img src={props.card1} alt="" className="scroll__image_right" />
        <img src={props.card2} alt="" className="scroll__image_right" />
        <img src={props.card3} alt="" className="scroll__image_right" />
        <img src={props.card4} alt="" className="scroll__image_right" />
        <img src={props.card5} alt="" className="scroll__image_right" />
        <img src={props.card6} alt="" className="scroll__image_right" />
        <img src={props.card7} alt="" className="scroll__image_right" />
        <img src={props.card8} alt="" className="scroll__image_right" />
        <span className="scroll__subtitle scroll__subtitle_right">{props.subtitle}</span>
        <h2 className="scroll__title scroll__title_right">{props.title}</h2>
      </div>
    </div>
  )
}

export default ScrollRight;