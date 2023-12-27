import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { MembershipData } from "./data/MembershipData";
import Button from "./Button";
import Link from "next/link";

const MembershipContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
  width: 100%;
  margin: 40px 0;
  h1 {
    font-family: "Poppins";
    font-size: 3rem;
    color: #475569;
    padding-top: 50px;
    margin-bottom: 20px;
    text-transform: capitalize;
  }
`;

const MembershipCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const MembershipCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 360px;
  height: 480px;

  border: 2px solid #475569;

  h2 {
    font-family: "Poppins";
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  h1 {
    font-size: 2.4rem;
  }

  p {
    text-decoration: underline;
    font-family: "Poppins";
    margin-top: 20px;
    cursor: pointer;
    font-size: 0.9rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 20px;
  color: #475569;

  p {
    font-family: "Poppins";
    font-size: 1.2rem;
    text-decoration: line-through;
    margin: 0 12px 6px 0;
  }

  h5 {
    font-family: "Poppins";
    font-size: 2rem;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;

  h3 {
    font-family: "Poppins";
    font-weight: 500;
  }
`;

export default function Membership() {
  const { addProduct } = useContext(CartContext);

  return (
    <MembershipContainer>
      <h1>Get your Membership now</h1>
      <MembershipCardContainer>
        {MembershipData.map((data) => (
          <MembershipCard key={data.productId}>
            <h2>{data.name} Plan</h2>
            <h1>{data.numMonths} Months</h1>
            <PriceContainer>
              <p>₹ {data.price}</p>
              <h5>₹ {data.discountedPrice}</h5>
            </PriceContainer>
            <Box>
              <h3>Rent {data.maxBooks} Books</h3>
              <h3>Max {data.atATime} Books At A Time</h3>
              <h3>Free Home Delivery</h3>
            </Box>
            <Button onClick={() => addProduct(data.productId)} primary={1}>
              Add to Cart
            </Button>
            <p>Important Instructions</p>
          </MembershipCard>
        ))}
      </MembershipCardContainer>
    </MembershipContainer>
  );
}
