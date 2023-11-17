import styled from "styled-components";
import ProductBox from "./ProductBox";

const StyledProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 27px;
  padding-top: 10px;
`;

export default function ProductsGrid({ products }) {
  const nonMembershipProducts = products.filter(
    (product) => !product.isMembership
  );
  return (
    <StyledProductsGrid>
      {nonMembershipProducts?.length > 0 &&
        nonMembershipProducts.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </StyledProductsGrid>
  );
}
