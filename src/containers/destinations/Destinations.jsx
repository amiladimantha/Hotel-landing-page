import React,{useState}from "react";
import "./destinations.css";
import image from "../../static/lakeside.jpg";
import sl from "../../static/srilanka.png";

const Destinations = () => {
  const [selectedOption, setSelectedOption] = useState(""); 
  return (
    <>
    <div className="containerdw">
          <div>
            <h2 className="dw-heading">Our Destinations</h2>
          </div>
          <div className="drop-down">
          <select className="dw" id="dropdown" selectedOption="option1">
            <option value="option1">Cinnamon Lakeside Colombo</option>
            <option value="option2">Cinnamon Grand Colombo</option>
            <option value="option3">Cinnamon Life</option>
            <option value="option4">Cinnamon Red Colombo</option>
            <option value="option5">Cinnamon Bey Beruwala</option>
            <option value="option6">Cinnamon Benthota Beach</option>
          </select>
        </div>
        </div>
      <div className="container">
        <div className="left-image">
          <img src={sl} alt="SriLanka" className="sl_image" />
        </div>
        <div className="middle-image">
          <img src={image} alt="Cinnamon_Lakeside" className="image" />
        </div>
        <div className="overlay-box">
          <h3 className="overlay-box-title">Cinnamon Lake Colombo</h3>
          <p className="overlay-box-para">Spend time with those who matter by a calm, rippling lake at Cinnamon Lakeside, the plush oasis of peace and warmth, right in the middle of Colombo.</p>
          <button className="overlay-box-button">Discover More</button>
        </div>
      </div>
    </>
  );
};

export default Destinations;
