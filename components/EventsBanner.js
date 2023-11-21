import styled from "styled-components";
import ImgSlideShow from "./ImgSlideShow";
import { EventsImages } from "./data/EventsImages";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }
`;

const EventWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 500px;
  background-color: #e1eeff;
  margin-top: 40px;
  justify-content: flex-start;
  align-items: center;
  padding-left: 100px;
  transform: skew(-2.5deg);
  @media (max-width: 768px) {
    gap: 40px;
    height: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 700px;
  height: 380px;
  margin-right: 50px;
  @media (max-width: 768px) {
    padding-top: 40px;
  }
`;

const TextContainer = styled.div`
  width: 500px;
  height: 380px;
  color: #475569;

  h1 {
    font-family: "Poppins";
    font-size: 2.7rem;
    line-height: 2.8rem;
  }

  p {
    font-family: "Poppins";
    margin-top: 20px;
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
  }
`;

export default function EventsBanner() {
  return (
    <Box>
      <EventWrapper>
        <ImageContainer>
          <ImgSlideShow SlidesImgs={EventsImages} />
        </ImageContainer>
        <TextContainer>
          <h1>Know About Events conducted by us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            blanditiis, corporis soluta porro nam facere iusto ad molestiae,
            repellat qui, accusantium laboriosam odio consequuntur sit
            temporibus. Veniam architecto aut aperiam.
          </p>
        </TextContainer>
      </EventWrapper>
    </Box>
  );
}
