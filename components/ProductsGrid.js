import styled from "styled-components"
import ProductBox from "./ProductBox"

const StyledProductsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 10px;
`

export default function ProductsGrid({ products}){
    return (
        <StyledProductsGrid>
            {products?.length > 0 && products.map(product => (
                <ProductBox key = {product._id} {...product} />
            ))}
        </StyledProductsGrid>
    )
}