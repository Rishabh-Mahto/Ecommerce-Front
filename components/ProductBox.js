import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 210px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5; 
  }

  img {
    max-width: 100%;
    max-height: 200px;
  }
`;

const Title = styled(Link)`
  font-weight: bold; 
  font-size: 1rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px; 
  padding: 10px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export default function ProductBox({ _id, title, summary, price, images }) {
  const url = '/product/' + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>₹{price}</Price>
          <Button primary={1}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
