import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";

const DocStyle = styled.div`
  margin: 50px;
`;

export default function Faq() {
  return (
    <>
      <Header />
      <DocStyle>
        1How does the book rental service work?
        <br />
        •We provide books on rent at just 5 rs per day on security of books we
        deposited 50% of MRP
        <br />
        2What is the rental duration, and are there any late fees
        <br />
        •We provide books for maximum 25 days <br />
        3 Can users purchase books instead of renting them?
        <br />
        •Yes purchase option is also available
        <br />
        4 How are books delivered and returned?
        <br />
        •Yes books deliver at your doorstep also pickup (charges applicable)
        <br />
        5 What genres or types of books are available for rental ?<br />
        •All types of novel available
        <br />
        6 Is there a subscription model or a pay-as-you-go option
        <br />
        •Yes both services available
        <br />
      </DocStyle>
      <Footer />
    </>
  );
}
