import "./carrousel.css"
import React, { useState, useEffect } from "react";
import image1 from "../../assets/maracuya.jpeg";
import image2 from "../../assets/Mora.jpeg";
import image3 from "../../assets/moraless.jpeg";

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
  ];

  const previous = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  const next = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === images.length ? 0 : newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex === images.length ? 0 : newIndex);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div className="container">
          <img
            className="imagestyle"
            src={images[currentIndex].src}
          />
            <button type="button" className="buttonPrevious" onClick={previous}></button>
            <button className="empty"></button>
            <button type="button" className="buttonNext" onClick={next}></button>
        </div>
  )
}

export default Carrousel