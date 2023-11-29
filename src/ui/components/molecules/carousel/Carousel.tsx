"use client";
import React, { useEffect, useState } from "react";
import styles from './carousel.module.css'
import benedettiImage from "../../../../../public/benedetti.jpeg";
import pizarnikImage from "../../../../../public/alejandra_pizarnik.png";
import galeanoImage from "../../../../../public/galeano.jpg";
import Image from "next/image";

const carouselContent = [
  { url: benedettiImage, text: "benedetti papa" },
  { url: pizarnikImage, text: "alejandra pizarnik" },
  { url: galeanoImage, text: "galeano" },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const incrementIndex = () => {
    if (activeIndex === carouselContent.length - 1) {
      setActiveIndex(0);
  } else {
    setActiveIndex(activeIndex +1)
  }
  }

  const decrementIndex = () => {
    if (activeIndex === carouselContent.length - 1) {
      setActiveIndex(0);
  } else {
    setActiveIndex(activeIndex +1)
  }
  }

  useEffect(()=> console.log(activeIndex)),[activeIndex]

  return (
    <div className={styles.carousel}>
      <button onClick={() => decrementIndex()}>Prev</button>
      <button onClick={() => incrementIndex()}>Next</button>

      {/* {carouselContent.map(({ url, text }, i) => {
        return (
          <Image
            key={i}
            src={url}
            alt={text}
            className={i === activeIndex ? styles.slideActive : styles.slide}
            />
        );
      })} */}
    </div>
  );
};

export default Carousel;
