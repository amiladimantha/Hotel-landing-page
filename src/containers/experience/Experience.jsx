import React from "react";
import "./experience.css";
import ex1 from "../../static/ex1.png";
import ex2 from "../../static/ex2.png";
import ex3 from "../../static/ex3.png";
import ex4 from "../../static/ex4.png";
import ex5 from "../../static/ex5.png";
import ex6 from "../../static/ex6.png";

const Experience = () => {
  const images = [ex1, ex2, ex3, ex4, ex5, ex6];
  
  const textArray = [
    "Multiply Your Points",
    "Experience More During Your Stay",
    "Park & Stay with Hilton",
    "Jumpstart Your Rewards With Up to 4,500 Points",
    "Free Bonus Points at New Hotels",
    "Experience More During Your Stay",
  ];

  return (
    <div className="ex-holder">
      <div className="ex-title">
        <h1
          style={{
            color: "#104C97",
            fontSize: "36px",
            fontWeight: "bold",
            fontFamily: "Calibri",
          }}
        >
          Make the most of summertime
        </h1>
        <br />
        <p
          style={{
            fontSize: "16px",
            fontFamily: "Calibri",
          }}
        >
          Summer is here - celebrate with one of our exclusive offers.
        </p>
      </div>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
            <div className="image-text">{textArray[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
