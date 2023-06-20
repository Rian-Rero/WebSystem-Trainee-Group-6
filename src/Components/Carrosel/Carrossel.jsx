import { Body, Prev, Next, Dimensao } from "./style";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "./imgs/1.png";
import img2 from "./imgs/2.png";
import img3 from "./imgs/3.png";
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
          dynamicHeight={false}
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
          className="carousel-wrapper"
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
