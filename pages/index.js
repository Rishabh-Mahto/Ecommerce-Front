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
  margin-top: -180px;
  z-index: 1;
  display: flex;
`;
const OverlapContainer2 = styled.div`
  position: relative;
  margin-bottom: -120px;
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
      <Feedback />
      <Membership />
      <OverlapContainer2>
        
      </OverlapContainer2>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductIds = [
    '64cec9997a0f9ddef932e811',
    '6480ced92c371383cd482ea6',
    '64862c0b8ead92ee0e0ecffa',
    '650b0aa460a575142105fd7e',
    '650b0ac560a575142105fd86',
    '65204ee9d4c06c4e54535265',
  ];

  await mongooseConnect();

  const products = await Product.find({
    _id: { $in: featuredProductIds }
  });

  const firstImages = products.map(product => {
    const firstImage = product.images[0]; 
    return {
      _id: product._id,
      firstImage: firstImage
    };
  });

  return {
    props: { firstImages: JSON.parse(JSON.stringify(firstImages)) },
  };
}

