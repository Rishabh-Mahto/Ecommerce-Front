import styled from "styled-components";
import { CategoryData } from "./data/CategoryData";
import Link from "next/link";

const CategoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding: 0 40px;
`;

const Title = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-size: 4rem;
  color: #35373b;
  font-family: "Poppins";
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const DifCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Category = styled(Link)`
  text-decoration: none;
  padding: 8px 16px;
  border: 2px solid #475569;
  border-radius: 8px;
  font-family: "Poppins";
  font-size: 1.4rem;
  color: inherit;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #e1eeff;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 5px 10px;
  }
`;

export default function Categories() {
  return (
    <CategoryDiv>
      <Title>Category</Title>
      <DifCategory>
        {CategoryData.map((category) => (
          <Category key={category} href={`/products?category=${category}`}>
            {category}
          </Category>
        ))}
      </DifCategory>
    </CategoryDiv>
  );
}
