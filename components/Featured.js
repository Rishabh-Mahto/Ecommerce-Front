import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { CartContext } from "./CartConetxt";

const FeaturedDiv = styled.div`
  max-width: 100%;
`;
const Slider = styled.div`
  margin: 0 auto;
  width: 50%;
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
  min-height: 20rem;
  min-width: 15rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const BtnDesign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center; 
  gap: 50px;
  padding: 8px 0;
`

const ItemsImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  pointer-events: none;
  background-color: white;
  box-shadow: 3px 2px 32px rgba(142, 137, 137, 0.28);
`;

export default function Featured({ firstImages }) {
  const {addProduct} = useContext(CartContext);

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <FeaturedDiv>
      <Slider>
        <Carousel ref={carousel}>
          <InnerCarousel
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {firstImages.map((image, index) => (
              <CarouselItems key={index} className="items">
                <ItemsImg src={image.firstImage} alt="" />
                <BtnDesign>
                <div>
                  <ButtonLink href={'/product/'+image._id} secondary={1} >Read More</ButtonLink>
                </div>
                <div>
                  <Button primary={1} onClick={() => addProduct(image._id)} ><FontAwesomeIcon icon={faCartShopping} /></Button> 
                </div>
                </BtnDesign>
              </CarouselItems>
            ))}
          </InnerCarousel>
        </Carousel>
      </Slider>
    </FeaturedDiv>
  );
}
