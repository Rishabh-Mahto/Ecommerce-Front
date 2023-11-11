import Header from "@/components/Header"
import styled from "styled-components"
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import axios from "axios";

const Wrapper = styled.div`
    margin: 0 20px;
    padding: 0 60px;
`;


const Title = styled.div`
    font-size: 2.5em;
    font-weight: 600;
    padding: 0.5em;
`
const Center = styled.div`
    display: inline-block;
`
const ProdutctCol = styled.div`
    display: flex;
    gap: 80px;
    padding: 0.5em;
`;



export default function ProductsPage({products}) {
    return (
        <>
            <Header />
            <Wrapper>
                <Center>
                    <Title>Explore all the Products!</Title>
                    <ProdutctCol>
                        <ProductsGrid  products = {products}/>
                    </ProdutctCol>
                </Center>
            </Wrapper>
        </>
    )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const products = await Product.find({}, null, {sort:{'_id': -1}});
    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        }
    }
};