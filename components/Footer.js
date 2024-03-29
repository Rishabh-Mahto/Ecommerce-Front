import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

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
    margin: 20px 0 20px 0;
    /* padding: 20px; */
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
  padding: 0 60px;
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
  @media (max-width: 768px) {
    min-width: 250px;
    padding: 20px 0px;
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
  -webkit-filter: grayscale(100%);
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
              Welcome to our platform—a haven for lifelong learners! We get the
              thrill of exploring books beyond coursework but understand the
              financial constraints of being a student. That&apos;s why we offer
              a budget-friendly solution.
              <br />
              <b>Our mission:</b> an affordable, accessible reading experience.
              Dive into a diverse book collection for just Rs. 5 per day.
              Knowledge shouldn&apos;t be restricted by budgets; we&apos;re here
              to empower every learner. Whether you crave new horizons,
              subjects, or the joy of reading, our platform caters to your
              curiosity. Join us where the cost of knowledge is no barrier.
              Happy reading!
            </p>
          </About>
        </LeftFooter>

        <CenterFooter>
          <h5>Follow us</h5>
          <LogoDiv>
            <SocialLogo>
              <LogoFooter
                href="https://www.linkedin.com/company/read-on-rent/"
                target="_blank"
              >
                <SocialImg src="/LinkedinLogo.png" />
              </LogoFooter>
            </SocialLogo>
            <SocialLogo>
              <LogoFooter
                href="https://www.instagram.com/readonrent.in/"
                target="_blank"
              >
                <SocialImg src="/Instagramlogo.png" />
              </LogoFooter>
            </SocialLogo>
            <SocialLogo>
              <LogoFooter
                href="https://youtube.com/@readonrent?si=wzI86Bb7Re_-0vk8"
                target="_blank"
              >
                <SocialImg src="/youtubeLogo.png" />
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
          <h3>Visit Us</h3>
          <br />
          <p>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#d5d6d8" }}
            />
            &nbsp; 602, First floor, main road, above jinendra peda, near kartik
            hotel, Yadav Colony, Jabalpur, Madhya Pradesh 482002
          </p>
          <hr />
          <div>
            <FooterLink href={"#"} style={{ padding: "5px" }}>
              Contact Us
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#dbdbdc", marginRight: "8px" }}
                />
                <p> +919156480564 </p>
              </div>
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#e0e0e0", marginRight: "8px" }}
                />

                <p> readonrent.in@gmail.com</p>
              </div>
            </FooterLink>
            <FooterLink
              href={"https://chat.whatsapp.com/Kvh1fsDcL1GFCBrIveQ8q8"}
            >
              WhatsApp - Reader&apos;s Community
            </FooterLink>
          </div>
        </RightFooter>
      </FooterPart>
      <hr />
      <p>Copyright © 2023 by Read on Rent</p>
    </FooterContainer>
  );
}
