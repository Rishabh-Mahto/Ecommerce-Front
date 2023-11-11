import Header from "@/components/Header";
import styled from "styled-components";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import ProductBox from "@/components/ProductBox";
import ProductsGrid from "@/components/ProductsGrid";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";

const Wrapper = styled.div`
    padding: 20px 40px;
`;

const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        font-size: 1.5em;
    }
`;

const FiltersWrapper = styled.div`
    display: flex;
    gap: 15px;
`;

const Filters = styled.div`
    background-color: #ddd;
    padding: 5px 10px; 
    border-radius: 5px;
    display: flex;
    gap: 5px;
    color: #444;
    select{
        background-color: transparent;
        border: 0;
        font-size: inherit;
        color: #444;
    }
`;

export default function CategoryPage({category,subCategories, products: originalProducts}) {
    const defaultSort = '_id-desc';
    const defaultFilter = category.properties.map(p => ({name: p.name, value: 'all'}));
    const [products, setProdducts] = useState(originalProducts);
    const [filterValues, setFiltersValues] = useState(defaultFilter);
    const [sort, setSort] = useState(defaultSort);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [filterChanged, setFilterChanged] = useState(false);

    function handleFilterChange(filterName, filterValue) {
        setFiltersValues(prev => {
            return prev.map(p => ({
                name: p.name,
                value: p.name === filterName ? filterValue : p.value,
            }));
        });
        setFilterChanged(true);
    }
    useEffect(() => {
        if(!filterChanged) {
            return;
        }
        setLoadingProducts(true);
        const catIds = [category._id, ...(subCategories?.map(c => c._id) || []) ];
        const params = new URLSearchParams;
        params.set('categories', catIds.join(','));
        params.set('sort', sort);
        filterValues.forEach(f => {
            if(f.value !== 'all'){
                params.set(f.name, f.value); 
            }
        });
        const url = `/api/products?` + params.toString();
        axios.get(url).then(res => {
            setProdducts(res.data);
            setLoadingProducts(false);
        })
    }, [filterValues, sort, filterChanged]); 

    
    return (
        <>
            <Header />
            <Wrapper>
            <CategoryHeader>
                <h1>{category.name}</h1>
                <FiltersWrapper>
                    {category.properties.map(prop => (
                        <Filters key={prop.name}>
                            <span>{prop.name}:</span>
                            <select 
                                onChange={ev => handleFilterChange(prop.name, ev.target.value)}
                                value={filterValues.find(f => f.name === prop.name).value}>
                            <option value="all">All</option>
                                {prop.values.map(val => (
                                    <option key={val} value={val}>{val}</option>
                                ))}
                            </select>
                        </Filters> 
                    ))}
                    <Filters>
                        <span>Sort:</span>  
                        <select 
                            value={sort} 
                            onChange={ev => {
                                setSort(ev.target.value);
                                setFilterChanged(true);
                            }}>
                            <option value="price-asc">price, lowest first</option>
                            <option value="price-desc">price, highest first</option>
                            <option value="_id-desc">newest first</option>
                            <option value="_id-asc">oldest first</option>
                        </select>
                    </Filters>
                </FiltersWrapper>
            </CategoryHeader>
            {loadingProducts && (
                <Spinner fullWidth />
            )}
            {!loadingProducts && (
                <div>
                    {products.length  ===  0 && (
                        <div>
                            Sorry, no products found
                        </div>
                    )}
                    <ProductsGrid products={products} />
                </div>
            )}  
            </Wrapper>
        </>
    );
}

export async function getServerSideProps(context) {
    const category = await Category.findById(context.query.id);
    const subCategories = await Category.find({parent: category._id});
    const catIds = [category._id, ...subCategories.map(c => c._id)];
    const products = await Product.find({category: catIds}); 
    return {
        props: {
            category: JSON.parse(JSON.stringify(category)),
            subCategories: JSON.parse(JSON.stringify(subCategories)),
            products: JSON.parse(JSON.stringify(products)),
        },
    };
}