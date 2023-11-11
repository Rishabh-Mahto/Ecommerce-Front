import React, { useState, useEffect } from "react";
import styled from 'styled-components'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const SliderStyle = styled.div`
    height: 100%;
    position: relative;
`

const SlideStyle = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    background-image: url(${props => props.imageUrl});
    z-index: 1;
`

const DotsIndexStyle = styled.div`
    display: flex;
    justify-content: center;
`

const DotsStyle = styled.div`
    margin: 0 7px;
    cursor: pointer;
    font-size: 10px;
    padding: 10px 0;
`

const ImgSlideShow = ({ SlidesImgs }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 7000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % SlidesImgs.length;
        setCurrentIndex(nextIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <SliderStyle>
            <SlideStyle imageUrl={SlidesImgs[currentIndex].url}></SlideStyle>
            <DotsIndexStyle>
                {SlidesImgs.map((slide, slideIndex) => (
                    <DotsStyle key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                        <FontAwesomeIcon icon={faCircle} />
                    </DotsStyle>
                ))}
            </DotsIndexStyle>
        </SliderStyle>
    );
};

export default ImgSlideShow;
