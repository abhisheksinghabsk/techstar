import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/png-1.jpg";
import img2 from "../Assets/png-4.avif";
import img3 from "../Assets/png5.jpg";

export const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        interval={2000}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="img" />
          <h2>Full Stack</h2>
        </div>
        <div>
          <img src={img2} alt="img" />
          <h2>peer-to-peer Support</h2>
        </div>
        <div>
          <img src={img3} alt="img" />
          <h2>Mearn Stack</h2>
        </div>
      </Carousel>
    </div>
  );
};
