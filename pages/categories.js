import Header from "@/components/Header"
import ProductBox from "@/components/ProductBox";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import axios from "axios";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Wrapper = styled.div`
    padding: 20px 80px;;
`;
const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

const CategoryTitle = styled.div`
    display: flex;  
    margin-top: 10px;
    margin-bottom:   0px;
    align-items: center;
    gap: 15px;
    h2{
        margin-bottom: 10px;
        margin-top: 10px; 
    }
    a{
        color: #555;
    }
`;
const ShowAllSquare = styled(Link)`
    background-color: #ddd;
    height: 160px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555;
    text-decoration: none;
`

const CategoryWrapper = styled.div`
    margin-bottom: 40px;
`


export default function CategoriesPage({ mainCategories, categoriesProducts }) {
    return (
        <>
            <Header />
            <Wrapper>
                <h1>All Categories</h1>
                {mainCategories.map(cat => (
                    <CategoryWrapper key={cat._id}>
                        <CategoryTitle>
                            <h2>{cat.name}</h2>
                            <div>
                                <Link href={'/category/'+cat._id}>Show All</Link>
                            </div>
                        </CategoryTitle>
                        <CategoryGrid>
                            {categoriesProducts[cat._id].map(p => (
                                <div key={p._id}><ProductBox {...p} /></div>
                            ))}
                            <ShowAllSquare href={'/category/'+cat._id}>
                                Show All &rarr;
                            </ShowAllSquare>
                        </CategoryGrid>
                    </CategoryWrapper>
                ))}
            </Wrapper>
        </>
    );
}


export async function getServerSideProps() {
    const categories = await Category.find();
    const mainCategories = categories.filter(c => !c.parent);
    const categoriesProducts = {}; 
    for (const mainCat of mainCategories) {
        const mainCatId = mainCat._id.toString();
        const childCatId = categories
            .filter(c => c?.parent?.toString() === mainCatId)
            .map(c => c._id.toString());
            const categoriesIds = [mainCatId, ...childCatId];
        const products = await Product.find({category: categoriesIds}, null,
            {limit:3, sort:{'_id':-1}});
            categoriesProducts[mainCat._id] = products;
    }
    return {
        props: {
            mainCategories: JSON.parse(
                JSON.stringify(mainCategories)
            ),
            categoriesProducts: JSON.parse(
                JSON.stringify(categoriesProducts)
            ),
        },
    };
}