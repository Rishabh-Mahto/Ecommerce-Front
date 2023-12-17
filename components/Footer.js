import Link from "next/link";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #242526;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 400px;

  hr {
    width: 90%;
    border-top: 0.1px solid #eee;
    margin: 40px 0 20px 0;
  }

  p {
    font-family: "Poppins";
    font-size: 0.8rem;
    color: #eee;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    height: 100%;
  }
`;

const FooterPart = styled.div`
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 100px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
`;

const LeftFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
  @media (max-width: 768) {
    min-width: 300px;
  }
`;

const CenterFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 300px;

  font-size: 1rem;
  font-weight: 400;
  h5 {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 2rem;
  }
  hr {
    width: 100%;
    border-top: 0.1px solid #eee;
    margin: 20px 0px;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  font-family: "Poppins";
  font-size: 1rem;
  color: inherit;
`;

const RightFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;

  font-size: 1rem;
  font-weight: 400;
  h5 {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 2rem;
  }
  p {
    font-family: "Poppins";
  }
`;

const ImgLogo = styled.img`
  width: 100px;
  height: 50px;
`;
const About = styled.div`
  font-size: 1rem;
  font-weight: 400;
  h5 {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 2rem;
  }
  p {
    font-family: "Poppins";
  }
`;

const LogoDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialLogo = styled.div`
  display: flex;
  height: 25px;
  width: 25px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
`;

const LogoFooter = styled.a``;

const SocialImg = styled.img`
  height: 25px;
  width: 25px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterPart>
        <LeftFooter>
          <div>
            <ImgLogo src="/readonrentlogo.png" alt="" />
          </div>
          <About>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vel
              sint minus quasi placeat ipsam accusamus, quae quibusdam at
              laborum. Ipsam ab reiciendis officiis animi dolores minima iusto
              quam fugit veritatis, harum dolor maiores tempora incidunt libero
              odio molestias error.
            </p>
          </About>
        </LeftFooter>

        <CenterFooter>
          <h5>Follow us</h5>
          <LogoDiv>
            <SocialLogo>
              <LogoFooter href="facebook.com">
                <SocialImg src="/FacebookLogo.png" />
              </LogoFooter>
            </SocialLogo>
            <SocialLogo>
              <LogoFooter href="instagram.com">
                <SocialImg src="/InstagramLogo.png" />
              </LogoFooter>
            </SocialLogo>
            <SocialLogo>
              <LogoFooter href="twitter.com">
                <SocialImg src="/TwitterLogo.png" />
              </LogoFooter>
            </SocialLogo>
            <SocialLogo>
              <LogoFooter href="threads.com">
                <SocialImg src="/ThreadsLogo.png" />
              </LogoFooter>
            </SocialLogo>
          </LogoDiv>
          <hr />
          <FooterLink href={"/cancellation"}>
            Return and Cancellation
          </FooterLink>
          <FooterLink href={"/faq"}>FAQs</FooterLink>
          <FooterLink href={"/terms&conditions"}>
            Terms and Conditions
          </FooterLink>
          <FooterLink href={"/privacypolicy"}>Privacy Policy</FooterLink>
        </CenterFooter>

        <RightFooter>
          <FooterLink href={"#"}>Contact Us</FooterLink>
          <FooterLink href={"#"}>WhatsApp</FooterLink>
        </RightFooter>
      </FooterPart>
      <hr />
      <p>Copyright © 2023 by Read on Rent</p>
    </FooterContainer>
  );
}
