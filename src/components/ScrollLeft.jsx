import React from "react";
import "./ScrollLeft.css";

function ScrollLeft(props) {
  return (
    <div className="scroll-left">
      <div className="scroll" >
        <img src={props.card1} alt="" className="scroll__image" />
        <img src={props.card2} alt="" className="scroll__image" />
        <img src={props.card3} alt="" className="scroll__image" />
        <img src={props.card4 ? props.card4 : props.card1} alt="" className="scroll__image" />
        <img src={props.card5 ? props.card5 : props.card2} alt="" className="scroll__image" />
        <img src={props.card6 ? props.card6 : props.card3} alt="" className="scroll__image" />
        <span className="scroll__subtitle" >{props.subtitle}</span>
        <h2 className="scroll__title">{props.title}</h2>
      </div>
    </div>
  )
}

export default ScrollLeft;