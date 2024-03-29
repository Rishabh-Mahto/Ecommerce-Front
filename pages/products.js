import Header from "@/components/Header";
import styled from "styled-components";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

const Wrapper = styled.div`
  margin: 0 50px 50px;
  @media (max-width: 768px) {
    margin: 0px 3px 50px 3px;
  }
`;

const Title = styled.div`
  font-size: 2.2em;
  font-weight: 600;
  padding: 0.5em;
`;
const Center = styled.div`
  display: inline-block;
`;
const ProdutctCol = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0.5rem;
`;

export default function ProductsPage({ products }) {
  const { data, status } = useSession();
  const [books, setBooks] = useState(products);
  const router = useRouter();

  useEffect(() => {
    if (router.query.category) {
      const filteredProducts = products.filter((product) =>
        product.category.includes(router.query.category)
      );
      setBooks(filteredProducts);
    }
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <Center>
          <Title>Explore all the Books!</Title>
          <ProdutctCol>
            <ProductsGrid products={books} />
          </ProdutctCol>
        </Center>
      </Wrapper>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  const nonMembershipProducts = products.filter(
    (product) => !product.isMembership
  );
  return {
    props: {
      products: JSON.parse(JSON.stringify(nonMembershipProducts)),
    },
  };
}
