import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";

const DocStyle = styled.div`
  margin: 100px;
`;

export default function Cancellation() {
  return (
    <>
      <Header />
      <DocStyle>
        <h1>Return and Cancelation</h1>
        <br />
        <h2>Cancellation policy</h2>
        <br />
        You can cancel your order anytime before dispatch, during transit we can
        not cancel your order. On receiving a cancellation request, the admin
        will allow it and process your refund within 24 hours. Average shipping
        time : 24 hours Orders can only be cancelled until 3 hours after placing
        the order. An order which is picked up by the courier, in transit or out
        for delivery, cannot be cancelled. Full refund will be processed for
        orders cancelled within the specified time frame. Orders cannot be
        altered after placing. Address and contact details cannot be changed
        after shipment.
        <br />
        <br />
        <h2>Return Policy </h2>
        <br />
        Our return/refund/replacement policy only applies if the books are
        damaged or wrong books are delivered. The policy lasts 3 days after
        delivery. If 7 days have passed since delivery, we can’t offer you any
        refund or exchange. To be eligible for a return, your item must be
        unused.
      </DocStyle>
      <Footer />
    </>
  );
}
