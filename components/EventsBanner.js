import styled from "styled-components";
import ImgSlideShow from "./ImgSlideShow";
import { EventsImages } from "./data/EventsImages";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EventWrapper = styled.div`
  display: flex;
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
    flex-direction: column;
    padding-left: 0px;
  }
`;

const ImageContainer = styled.div`
  width: 700px;
  height: 380px;
  margin-right: 50px;
  @media (max-width: 768px) {
    padding-top: 40px;
    width: 80%;
    margin-right: 10px;
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
    width: 80%;
    h1 {
      font-size: 2.1rem;
    }
    p {
      font-size: 1rem;
    }
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
            Step into our vibrant readers' community for engaging Sunday events
            that foster personal and social development. Enjoy thought-provoking
            reading sessions, insightful discussions, book swaps, content
            creator meets, and meticulously organized book fairs. Our open mic
            sessions provide a platform for expression. Join us for enriching
            experiences that go beyond the pages, where learning, sharing, and
            connecting thrive every week!
            <br /> You can join our community
          </p>
        </TextContainer>
      </EventWrapper>
    </Box>
  );
}
