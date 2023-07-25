import React from "react";
import "./Card.css";
//Composition is used in modals and alerts!
const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
