import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";

const DocStyle = styled.div`
  margin: 50px 0 100px 50px;
`;

export default function Privacy() {
  return (
    <>
      <Header />
      <DocStyle>
        <h1>Privacy Policy</h1> <br />
        When you sign up for a readonrent.in account and want to avail the
        products & services that are offered by our website, we safely store all
        the information that is provided by you. We make use of an order form
        whereby we provide the opportunity our customers to request for
        information, products & services. We also collect the contact
        information (email address & mobile number) of our visitors along with
        the financial information (credit card & debit card). We use contact
        information to send orders to the customers along with the information
        of our company. <br />
        The information can also be used to communicate with the customers, as
        and when the need arises. On the other hand, financial information is
        gathered to invoice customers for different kinds of products and
        services. The mailing and promotional calls can be stopped by the user
        if required by following the steps given in Choice/Opt-out below. The
        information of your browser along with your IP address is stored in the
        form of a “cookie”. This makes it easy for us to identify you and the
        shopping cart with added products & services. A cookie is a tiny data
        file that is stored on your hard drive. A cookie file is neither read
        stored in your hard drive nor read the other cookie file. You can reject
        the storage of the cookie in your hard drive by simply switching off
        this option in your browser. For purchasing, it’s not necessary to
        switch on the cookie in the browser option.
      </DocStyle>
      <Footer style={{ marginTop: "50px" }} />
    </>
  );
}
