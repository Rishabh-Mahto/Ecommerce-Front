import { useState } from "react";
import styled from 'styled-components'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


const SliderStyle = styled.div`
        height: 100%;
        position: relative;
    `
    const LeftArrowStyle = styled.div`
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 32px;
        font-size: 55px;
        color: white;
        z-index: 2;
        cursor: pointer;
        /* background-color: red; */
    `
    const RightArrowStyle = styled.div`
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 32px;
        font-size: 55px;
        color: white;
        z-index: 2;
        cursor: pointer;
        /* background-color: red; */
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
    /* background-color: red; */
`


const ImgSlider = ({ SlidesImgs }) => {
    const [currentIndex, setCurrentIndex ] = useState(0);

    
const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? SlidesImgs.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
}

const goToNext = () => {
    const isLastSlide = currentIndex === SlidesImgs.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
}
const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
}

    return (
        <SliderStyle>
            <LeftArrowStyle onClick={goToPrev}><FontAwesomeIcon icon={faChevronLeft} /></LeftArrowStyle>
            <RightArrowStyle onClick={goToNext}><FontAwesomeIcon icon={faChevronRight} /></RightArrowStyle>
            <SlideStyle imageUrl={SlidesImgs[currentIndex].url}></SlideStyle>
            <DotsIndexStyle>
                {SlidesImgs.map((slide, slideIndex) => (
                    <DotsStyle key={slideIndex} onClick={() => goToSlide(slideIndex)}><FontAwesomeIcon icon={faCircle} /></DotsStyle>
                ))}
            </DotsIndexStyle>
        </SliderStyle>
    );
};

export default ImgSlider;
 