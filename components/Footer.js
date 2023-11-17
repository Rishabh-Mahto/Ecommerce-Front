import Link from "next/link";
import styled from "styled-components";

const FooterStyle = styled.div`
  position: absolute;
  /* padding-top: 40px; */
`;
const FooterPart = styled.div`
  background-color: #242526;
  color: white;
  /* background-size: cover; */
  padding: 75px 25px 50px 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 150px;
`;
const LeftFooter = styled.div`
  padding: 25px;
  /* height:150px;
    width:500px; */
  height: auto;
  width: 800px;
  /* background-color: red; */
`;
const Logo = styled.div``;
const ImgLogo = styled.img`
  width: 100px;
  height: 50px;
  border: 35px solid black;
  box-shadow: 1px 3px 15px #f3f2f2;
`;
const About = styled.div`
  padding: 20px 0px;
`;
const CenterFooter = styled.div`
  /* background-color: red; */
`;
const LogoDiv = styled.div`
  display: flex;
  gap: 20px;
`;
const SocialLogo = styled.div`
  display: flex;
  height: 25px;
  width: 25px;
  gap: 20px;
  padding: 10px 0px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
`;
const LogoFooter = styled.a`
  display: flex;
`;
const SocialImg = styled.img`
  height: 25px;
  width: 25px;
`;
const Connect = styled.div``;
const RightFooter = styled.div``;
const EndFooter = styled.div`
  background-color: black;
  padding: 1px 35px 35px 35px;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <FooterPart>
        <LeftFooter>
          <Logo>
            <ImgLogo src="/readonrentlogo.png" alt="" />
          </Logo>
          <About>
            <b>About Us</b>
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
          <Connect>
            <b>Follow us</b>
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
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              officia quo optio aspernatur, deleniti, odit neque reiciendis ipsa
              repellendus eius ab iste accusantium in maxime!
            </p>
          </Connect>
        </CenterFooter>

        <RightFooter>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            fugit, commodi eum enim optio molestiae nihil doloribus sint libero
            neque tempora pariatur reprehenderit. Molestias, illo?
          </p>
        </RightFooter>
      </FooterPart>

      <EndFooter>
        <hr />
      </EndFooter>
    </FooterStyle>
  );
}
