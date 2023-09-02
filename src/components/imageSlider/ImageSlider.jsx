import React, { useState, useEffect } from "react";
import "./imageSlider.css";
import image1 from "../../static/image1.jpg";
import image2 from "../../static/image2.jpg";
import image3 from "../../static/image3.jpg";
import image4 from "../../static/image4.jpg";
import image5 from "../../static/image5.jpg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ImageSlider() {
  const images = [image1, image2, image3, image4, image5];
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function plusSlides(n) {
    const newIndex = slideIndex + n;
    if (newIndex > images.length) {
      setSlideIndex(1); 
    } else if (newIndex < 1) {
      setSlideIndex(images.length); 
    } else {
      setSlideIndex(newIndex);
    }
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) setSlideIndex(1);
    if (n < 1) setSlideIndex(slides.length);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [code, setCode] = useState("");

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSearchClick = () => {
   
  };

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src={image1} alt="Nature" style={{ width: "100%" }} />
        </div>

        <div className="mySlides fade">
          <img src={image2} alt="Snow" style={{ width: "100%" }} />
        </div>

        <div className="mySlides fade">
          <img src={image3} alt="Snow" style={{ width: "100%" }} />
        </div>

        <div className="mySlides fade">
          <img src={image4} alt="Mountains" style={{ width: "100%" }} />
        </div>

        <div className="mySlides fade">
          <img src={image5} alt="Snow" style={{ width: "100%" }} />
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>

        <div style={{ textAlign: "center", paddingTop: "10px" }}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
          <span className="dot" onClick={() => currentSlide(4)}></span>
          <span className="dot" onClick={() => currentSlide(5)}></span>
        </div>

        <div className="search-container-holder">
          <div className="search-container">
            <div className="sc-date1">
              <DatePicker
                className="sc-dp1"
                selected={selectedDate1}
                onChange={handleDateChange1}
                placeholderText="Select a date"
              />
              </div>
              <div style={{display:'flex', alignItems:'center'}}>to</div>
              <div className="sc-date2">
              <DatePicker
                className="sc-dp2"
                selected={selectedDate2}
                onChange={handleDateChange2}
                placeholderText="Select a date"
              />
            </div>
            <div className="sc-room">
              <select
                className="sc-room-select"
                value={selectedRoom}
                onChange={handleRoomChange}
              >
                <option value="">Select a room</option>
                <option value="room1">type1</option>
                <option value="room2">type2</option>
                <option value="room3">type3</option>
              </select>
            </div>
            <div className="sc-code">
              <input
                className="sc-code-input"
                type="text"
                placeholder="Enter Promotion code"
                value={code}
                onChange={handleCodeChange}
              />
            </div>
            <div>
              <button className="sc-button" onClick={handleSearchClick}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
