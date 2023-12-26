import styled from "styled-components";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Categories from "@/components/Categories";
import EventsBanner from "@/components/EventsBanner";
import Membership from "@/components/Membership";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

const OverlapContainer = styled.div`
  position: relative;
  margin-top: -100px;
  z-index: 1;
`;

export default function HomePage({ firstImages }) {
  return (
    <div>
      <Header />
      <Banner />
      <OverlapContainer>
        <Featured firstImages={firstImages} />
      </OverlapContainer>
      <Categories />
      <EventsBanner />
      <Membership />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductIds = [
    "658ae6da0d120cd80f4b3471",
    "658aec6b0d120cd80f4b349d",
    "658aea290d120cd80f4b348c",
    "658ae53a0d120cd80f4b3469",
    "658aeb690d120cd80f4b3491",
    "658ae7c60d120cd80f4b3479",
  ];

  await mongooseConnect();

  const products = await Product.find({
    _id: { $in: featuredProductIds },
  });

  const firstImages = products.map((product) => {
    const firstImage = product.images[0];
    return {
      _id: product._id,
      firstImage: firstImage,
    };
  });

  return {
    props: { firstImages: JSON.parse(JSON.stringify(firstImages)) },
  };
}
