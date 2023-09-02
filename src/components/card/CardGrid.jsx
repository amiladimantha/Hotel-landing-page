import React from "react";
import Card from "./Card";
import "./card.css";

const CardGrid = ({ cards }) => {
  return <div className="card-grid">{cards.map((card, index) => <Card key={index} {...card} />)}</div>;
};

export default CardGrid;
