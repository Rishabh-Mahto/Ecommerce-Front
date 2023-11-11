import Header from "@/components/Header"
import { useContext } from "react";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import WhiteBox from "@/components/WhiteBox";
import styled from "styled-components";
import ProductImage from "@/components/ProductImages";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartConetxt";

const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 35px;
    margin-top: 35px;
`
const PriceRow = styled.div`
    display: flex;
    gap: 20px;
`;

const Price = styled.span`
    font-size: 2rem;
    font-weight: bold;
`

export default function ProductPage({product}) {
    const {addProduct} = useContext(CartContext);
    return (
        <>
            <Header />
            <div>
                <ColWrapper>
                    <WhiteBox>
                        <ProductImage images={product.images}/>
                    </WhiteBox>
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.summary}</p>
                        <PriceRow>
                            <div>
                                <Price>₹{product.price}</Price>
                            </div>
                            <div>
                                <Button primary ={1} 
                                    onClick = {() => addProduct(product._id)}>
                                    Add to cart
                                </Button>
                            </div>
                            
                        </PriceRow>
                    </div>
                </ColWrapper>
                
            </div>
        </>
    )
}

export async function getServerSideProps(context){
    await mongooseConnect();
    const {id} = context.query;
    const product = await Product.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }
}
