import Header from "@/components/Header";
import { useContext, useState } from "react";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import WhiteBox from "@/components/WhiteBox";
import styled from "styled-components";
import ProductImage from "@/components/ProductImages";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import { RENT_ORDER_STATUS } from "@/components/data/Constants";

const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 0 200px;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 100px;
  @media (max-width: 768px) {
    margin-left: 7px;
  }

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

const Box = styled.div`
  display: flex;
  gap: 10px;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  const [inquiry, setInquiry] = useState(false);

  const checkOrderForRent = async () => {
    const user = await axios.get("/api/session");
    await axios.post("/api/orders/add", {
      productId: product._id,
      isRentOrder: true,
      status: RENT_ORDER_STATUS.INQUIRY,
      userEmail: user.data.user.email,
    });
    setInquiry(true);
  };

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

          <PriceRow>
            <Price>₹ {product.price}</Price>
            <DiscountedPrice>
              ₹ {product.price - (product.price * product.discount) / 100}
            </DiscountedPrice>
          </PriceRow>
          <Box>
            <Button tertiary={1} onClick={() => addProduct(product._id)}>
              Add to cart
            </Button>
            {!inquiry && (
              <Button secondary={1} onClick={checkOrderForRent}>
                Check for Rent
              </Button>
            )}
          </Box>
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
