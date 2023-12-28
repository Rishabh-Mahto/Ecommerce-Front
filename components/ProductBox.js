import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";

const ProductWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 320px;
  width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  padding: 2.1rem;
  @media (max-width: 768px) {
    margin: 0px;
    height: 300px;
    width: 175px;
    padding: 1.1rem;
  }
`;

const Title = styled(Link)`
  font-size: 1rem;
  color: #475569;
  text-decoration: none;
  font-weight: 600;
  margin: 5px 0;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Category = styled.p`
  font-weight: 500;
`;

const CategoryStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-transform: capitalize;
  font-size: 0.9rem;
  gap: 0.5rem;
  color: #94a3b8;
  @media (max-width: 768px) {
    font-size: 0.7rem;
    gap: 0.4rem;
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;

const AddToCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #475569;
  border: 1px solid #475569;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: red;
    border: 1px solid red;
  }
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #94a3b8;
  text-decoration: line-through;
  margin-right: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Discount = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #475569;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export default function ProductBox({
  _id,
  title,
  summary,
  price,
  images,
  category,
  subCategory,
  languages,
  discount,
  count,
}) {
  const url = "/product/" + _id;
  const { addProduct } = useContext(CartContext);

  return (
    <ProductWrapper>
      <ProductInfoBox>
        <Image
          src={images[0][0]}
          width={130}
          height={180}
          alt="Image Loading"
        />
        <Title href={url}>{title}</Title>
      </ProductInfoBox>

      <CategoryStyle>
        {category.map((categ, index) => (
          <div key={index}>
            <Category>
              {category.length === index + 1 ? `${categ}` : `${categ} |`}
            </Category>
          </div>
        ))}
      </CategoryStyle>
      <PriceRow>
        <div>
          <Price>₹ {price}</Price>
          <Discount>₹ {parseInt(price - (price * discount) / 100)} /-</Discount>
        </div>
        <AddToCart>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{
              cursor: "pointer",
              padding: "8px",
            }}
            onClick={() => {
              addProduct(_id);
            }}
          />
        </AddToCart>
      </PriceRow>
    </ProductWrapper>
  );
}
