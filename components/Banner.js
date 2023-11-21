import styled from "styled-components";

export default function Banner() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <ContentBox>
        <h1>Unleash Your Imagination:</h1>
        <p>Discover, Delight, and Buy Books Online!</p>
      </ContentBox>
    </div>
  );
}

const HeroBanner = styled.div`
  background-image: url("/herobanner2.jpg");
  height: 700px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ContentBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);

  h1 {
    font-family: "Poppins";
    font-size: 3rem;
    color: #262d37;
  }

  p {
    font-family: "Poppins";
    font-size: 1.5rem;
    color: #262d37;
  }
`;
