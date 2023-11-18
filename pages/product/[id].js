import Header from "@/components/Header";
import { useContext } from "react";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import WhiteBox from "@/components/WhiteBox";
import styled from "styled-components";
import ProductImage from "@/components/ProductImages";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";

const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 0 200px;
  margin-top: 40px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 100px;

  h1 {
    font-family: "Poppins";
    font-size: 2rem;
  }

  h2 {
    font-family: "Poppins";
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: 30px;
    text-transform: capitalize;
    background: #e1eeff;
    padding: 4px 12px;
    border-radius: 8px;
  }

  p {
    font-family: "Poppins";
    font-size: 1rem;
  }
`;

const CategoryBox = styled.div`
  display: flex;
  gap: 10px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 20px 0;
`;

const Price = styled.p`
  font-size: 1rem;
  font-family: "Poppins";
  margin-bottom: 8px;
  margin-right: 4px;
  text-decoration: line-through;
`;

const DiscountedPrice = styled.h5`
  font-size: 2rem;
  font-family: "Poppins";
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);

  return (
    <>
      <Header />
      <ProductContainer>
        <ProductImage images={product.images} />
        <InfoContainer>
          <h1>{product.title}</h1>
          <CategoryBox>
            {product.category.map((el) => (
              <h2>{el}</h2>
            ))}
          </CategoryBox>
          <p>{product.summary}</p>
          <p>Language : {product.languages}</p>
          <div>{product.subCategory}</div>

          <PriceRow>
            <Price>₹ {product.price}</Price>
            <DiscountedPrice>
              ₹ {product.price - (product.price * product.discount) / 100}
            </DiscountedPrice>
          </PriceRow>
          <div>
            <Button primary={1} onClick={() => addProduct(product._id)}>
              Add to cart
            </Button>
          </div>
        </InfoContainer>
      </ProductContainer>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
