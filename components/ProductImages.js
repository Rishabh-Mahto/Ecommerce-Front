import { useState } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  max-width: 250px;
  max-height: 500px;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active
      ? `
            border-color: #ccc;
        `
      : `
            border-color: Transparent;
            opacity: .7;
        `}
  height: 60px;
  padding: 3px;
  cursor: pointer;
  border-radius: 5px;
`;
const BigImageWrapper = styled.div`
  text-align: center;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <ImageContainer>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image, index) => (
          <ImageButton
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt={`Product Image ${index + 1}`} />
          </ImageButton>
        ))}
      </ImageButtons>
    </ImageContainer>
  );
}
