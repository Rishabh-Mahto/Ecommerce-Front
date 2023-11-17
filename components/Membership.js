import styled from "styled-components";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext";

const MembershipWrap = styled.div`
  padding: 40px 0 200px;
`;

const Cards = styled.div`
  width: 75%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const Card = styled.div`
  width: 350px;
  border: 1px rgba(128, 128, 128, 0.281) solid;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.4s, box-shadow 0.4s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

const PlanInfo = styled.div`
  text-align: center;
  border-bottom: 2px solid rgba(207, 221, 228, 0.87);
  padding-bottom: 14px;
`;

const PlanName = styled.h3`
  font-size: 24px;
  color: #333333;
  margin-bottom: 8px;
`;

const PlanFor = styled.div`
  font-size: 14px;
  color: #555555;
  margin-bottom: 20px;
`;

const PlanPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  margin: 20px 0;
`;

const PlanPriceDiscount = styled.div`
  padding: 6px 15px;
  text-transform: uppercase;
  font-weight: 600;
  color: #5025d1;
`;

const PriceStrike = styled.span`
  text-decoration: line-through;
  color: #727586;
`;

const SavePercent = styled.span`
  padding: 8px 12px;
  background-color: #dddddd;
  border-radius: 20px;
  text-transform: uppercase;
  color: #df2b2b;
`;

const Price = styled.span`
  color: #2f1c6a;

  span {
    font-size: 24px;
    font-weight: 600;
  }

  span:nth-child(2) {
    font-size: 36px;
  }

  span:nth-child(3) {
    font-weight: normal;
  }
`;

const BtnCart = styled.div`
  text-align: center;
`;

const Btn = styled.button`
  background-color: #5025d1;
  color: #fff;
  padding: 12px 16px;
  width: 80%;
  margin: 0 auto 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: none;
`;

const RenewPrice = styled.div`
  font-size: 14px;
  color: #727586;
`;

const PlanFeatures = styled.div`
  padding-top: 12px;
  color: #2f1c6a;
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  color: #2f1c6a;
  padding: 5px 0;
`;

const FeatureContainerLi = styled.li`
  margin-top: 7px;
  display: flex;
  align-items: center;

  div {
    color: #1ab731;
    margin-right: 10px;
  }

  span {
    font-weight: bold;
  }
`;

const ImpInstructions = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`;

export default function Membership() {
  const { addProduct } = useContext(CartContext);

  return (
    <MembershipWrap>
      <h1 style={{ fontSize: "24px", textAlign: "center", padding: "40px 0" }}>
        Get your Membership now!
      </h1>
      <Cards>
        <Card>
          <PlanInfo>
            <PlanName>1 Month Plan</PlanName>
            <PlanFor>Basic Plan</PlanFor>

            <PlanPrice>
              <PlanPriceDiscount>
                <PriceStrike>₹180</PriceStrike>
                <SavePercent>Save 16.67%</SavePercent>
              </PlanPriceDiscount>
              <Price>
                <span>₹</span>
                <span>150.00</span>
                <span>/mo</span>
              </Price>
            </PlanPrice>

            <BtnCart>
              <Btn onClick={() => addProduct("65551393e4f91fcfcd3eed54")}>
                Add to cart
              </Btn>
              <RenewPrice>₹150.00/mo when you renew</RenewPrice>
            </BtnCart>
          </PlanInfo>

          <PlanFeatures>
            <FeatureTitle>What You Get</FeatureTitle>

            <FeatureContainerLi>
              <div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <span>Maximum 4 Books</span>
            </FeatureContainerLi>
            <FeatureContainerLi>
              <div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <span>1 Book at a time</span>
            </FeatureContainerLi>
            <FeatureContainerLi>
              <div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <span>Free Home Delivery</span>
            </FeatureContainerLi>

            <ImpInstructions>
              <a href="#">Important Instructions</a>
            </ImpInstructions>
          </PlanFeatures>
        </Card>

        <Card>
          <PlanInfo>
            <PlanName>3 Month Plan</PlanName>
            <PlanFor>Best Buy Plan</PlanFor>

            <PlanPrice>
              <PlanPriceDiscount>
                <PriceStrike>₹540</PriceStrike>
                <SavePercent>Save 25.93%</SavePercent>
              </PlanPriceDiscount>
              <Price>
                <span>₹</span>
                <span>400.00</span>
                <span>/mo</span>
              </Price>
            </PlanPrice>

            <BtnCart>
              <Btn onClick={() => addProduct("65551406e4f91fcfcd3eed55")}>
                Add to cart
              </Btn>
              <RenewPrice>₹150.00/mo when you renew</RenewPrice>
            </BtnCart>
          </PlanInfo>

          <PlanFeatures>
            <FeatureTitle>What You Get</FeatureTitle>

            <FeatureContainerLi>
              <div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <span>Maximum 15 Books</span>
            </FeatureContainerLi>
            <FeatureContainerLi>
              <div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <span>2 Books at a time</span>
            </FeatureContainerLi>
            <FeatureContainerLi>
              <div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <span>Free Home Delivery</span>
            </FeatureContainerLi>

            <ImpInstructions>
              <a href="#">Important Instructions</a>
            </ImpInstructions>
          </PlanFeatures>
        </Card>

        <Card>
          <PlanInfo>
            <PlanName>6 Month Plan</PlanName>
            <PlanFor>Premium Plan</PlanFor>

            <PlanPrice>
              <PlanPriceDiscount>
                <PriceStrike>₹1080</PriceStrike>
                <SavePercent>Save 44.44%</SavePercent>
              </PlanPriceDiscount>
              <Price>
                <span>₹</span>
                <span>600.00</span>
                <span>/mo</span>
              </Price>
            </PlanPrice>

            <BtnCart>
              <Btn onClick={() => addProduct("65551419e4f91fcfcd3eed56")}>
                Add to cart
              </Btn>
              <RenewPrice>₹150.00/mo when you renew</RenewPrice>
            </BtnCart>
          </PlanInfo>

          <PlanFeatures>
            <FeatureTitle>What You Get</FeatureTitle>

            <FeatureContainerLi>
              <div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <span>Maximum 40 Books</span>
            </FeatureContainerLi>
            <FeatureContainerLi>
              <div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <span>3 Books at a time</span>
            </FeatureContainerLi>
            <FeatureContainerLi>
              <div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <span>Free Home Delivery</span>
            </FeatureContainerLi>

            <ImpInstructions>
              <a href="#">Important Instructions</a>
            </ImpInstructions>
          </PlanFeatures>
        </Card>
      </Cards>
    </MembershipWrap>
  );
}
