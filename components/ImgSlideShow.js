import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SlideStyle = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.imageUrl});
  z-index: 1;
`;

const ImgSlideShow = ({ SlidesImgs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % SlidesImgs.length;
    setCurrentIndex(nextIndex);
  };

  return <SlideStyle imageUrl={SlidesImgs[currentIndex]}></SlideStyle>;
};

export default ImgSlideShow;
