import React from "react";
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //do not forget put blank space after "card "
  return <div className={classes}>{props.children}</div>;
}

export default Card;
