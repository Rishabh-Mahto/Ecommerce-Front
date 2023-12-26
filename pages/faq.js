import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";

const DocStyle = styled.div`
  margin: 100px;
  font-size: 2rem;
`;

export default function Faq() {
  return (
    <>
      <Header />
      <DocStyle>
        <b>How does the book rental service work?</b>
        <br />
        •We provide books on rent at just 5 rs per day on security of books we
        deposited 50% of MRP
        <br />
        <b>What is the rental duration, and are there any late fees?</b>
        <br />
        •We provide books for maximum 25 days <br />
        <b>Can users purchase books instead of renting them?</b>
        <br />
        •Yes purchase option is also available
        <br />
        <b> How are books delivered and returned?</b>
        <br />
        •Yes books deliver at your doorstep also pickup (charges applicable)
        <br />
        <b>What genres or types of books are available for rental ?</b> <br />
        •All types of novel available
        <br />
        <b>Is there a subscription model or a pay-as-you-go option.</b>
        <br />
        •Yes both services available
        <br />
      </DocStyle>
      <Footer />
    </>
  );
}
