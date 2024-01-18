import styled from "styled-components";
import Link from "next/link";
import Search from "./icons/Search";

export default function Banner() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <ContentBox>
        <h1>Book on Rent for ₹5 per day</h1>
        <p>
          <b>
            Order Fiction & Non-Fiction Books Online at Only ₹20 Delivery Fee in
            Jablapur
          </b>
        </p>
        <br />
        <div>
          <p>Explore Our Store</p>
          <NavLink href={"/search"}>
            <Search style={{ padding: "20px" }} />
          </NavLink>
        </div>
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
  opacity: 0.3;
  @media (max-width: 768px) {
    height: 500px;
  }
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
  @media (max-width: 768px) {
    width: 300px;
    top: 20%;
    h1 {
      transform: translateX(-6.5%);
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

const NavLink = styled(Link)`
  color: #0c0c0c;
  text-decoration: none;
`;
