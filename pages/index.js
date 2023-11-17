import styled from "styled-components";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Categories from "@/components/Categories";
import EventsBanner from "@/components/EventsBanner";
import Feedback from "@/components/Feedback";
import Membership from "@/components/Membership";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

const OverlapContainer = styled.div`
  position: relative;
  margin-top: -100px;
  z-index: 1;
  display: flex;
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
      {/* <Feedback /> */}
      <Membership />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductIds = [
    "6550a2b1aca59a9178d58fb0",
    "6550a22daca59a9178d58faa",
    "6550a8380dbdbdd34ce640f6",
    "6550a188aca59a9178d58f92",
    "650b0ac560a575142105fd86",
    "65204ee9d4c06c4e54535265",
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
