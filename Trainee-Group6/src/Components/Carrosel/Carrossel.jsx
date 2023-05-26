import { Body, Dimensao, Image, Prev, Next } from "./style";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WP1 from "./imgs/wallpaper.jpg";
import WP2 from "./imgs/wallpaper1.jpg";
import WP3 from "./imgs/wallpaper2.jpg";
import WP4 from "./imgs/wallpaper3.jpg";
import WP5 from "./imgs/wallpaper4.jpg";
import WP6 from "./imgs/wallpaper5.jpg";
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

const img = [img1, img2, img3];

function Carrossel() {
  return (
    <Body>
      <Dimensao>
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          stopOnHover={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <Prev onClick={onClickHandler} title={label} style={{ left: 0 }}>
                <BiLeftArrowCircle />
              </Prev>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <Next onClick={onClickHandler} title={label} style={{ right: 0 }}>
                <BiRightArrowCircle />
              </Next>
            )
          }
        >
          {img.map((imgs) => (
            <img src={imgs} key={imgs} />
          ))}
        </Carousel>
      </Dimensao>
    </Body>
  );
}

export default Carrossel;
