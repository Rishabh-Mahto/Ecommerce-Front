import { useState } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 400px;
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
  height: 80px;
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
        {images.map((image) => (
          <ImageButton
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} />
          </ImageButton>
        ))}
      </ImageButtons>
    </ImageContainer>
  );
}
