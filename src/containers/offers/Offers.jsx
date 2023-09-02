import React from "react";
import { Card } from "../../components";
import card1 from "../../static/card1.png";
import card2 from "../../static/card2.png";
import card3 from "../../static/card3.png";

const Offers = () => {
  const images = [card1, card2, card3];
  return (
    <>
    <div>
        <h1 style={{textAlign:"center", marginTop:"80px"}}>Offers</h1>
      <div className="card-container">
        <Card
          image={card1}
          details="Rooms & Suites"
          title="Shangri–La Circle Exclusive Member Rate with Breakfast"
          subTitle="Exclusive Member Rate with Breakfast for Shangri-La Circle member."
          price="From SGD 243.22 Average Per Night"
        />
        <Card
        image={card2}
        details="Rooms & Suites"
          title="Shangri–La Circle Exclusive Member Rate"
          subTitle="Exclusive Member Rate for Shangri-La Circle member."
          price="From SGD 216.19 Average Per Night"
        />
        <Card
        image={card3}
        details="Rooms & Suites"
          title="Weekend Getaway in the Heart of Colombo"
          subTitle="Relax in the heart of Colombo, with access to Horizon Club"
          price="From SGD 385.09 Average Per Night"
        />
      </div>
    </div>
    </>
  );
};

export default Offers;
