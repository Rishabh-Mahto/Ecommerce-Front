import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, useContext } from "react";
import ButtonLink from "./ButtonLink";

const Slider = styled.div`
  margin: 0 20%;
  width: 60%;
  @media (max-width: 768px) {
    margin: 0 15%;
    width: 65%;
  }
`;

const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  width: 100%;
`;

const InnerCarousel = styled(motion.div)`
  display: flex;
  width: 100%;
`;

const CarouselItems = styled(motion.div)`
  min-height: 280px;
  min-width: 250px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 220px;
    min-width: 60%;
    padding: 10px;
  }
`;

const BtnDesign = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const ItemsImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  pointer-events: none;
  background-color: white;
  box-shadow: 3px 2px 32px rgba(142, 137, 137, 0.28);
`;

export default function Featured({ firstImages }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <Slider>
        <Carousel ref={carousel}>
          <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
            {firstImages.map((image, index) => (
              <CarouselItems key={index} className="items">
                <ItemsImg src={image.firstImage} alt="" />
                <BtnDesign>
                  <ButtonLink href={"/product/" + image._id} secondary={1}>
                    Read More
                  </ButtonLink>
                </BtnDesign>
              </CarouselItems>
            ))}
          </InnerCarousel>
        </Carousel>
      </Slider>
    </div>
  );
}
