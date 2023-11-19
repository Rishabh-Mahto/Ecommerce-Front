import Button from "@/components/Button";
import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [order, setOrder] = useState(null);
  const router = useRouter();
  const { orderId } = router.query;

  const fetchOrder = async () => {
    const _order = await axios.post("/api/orders", { id: orderId });
    setOrder(_order.data);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const handlePayment = async () => {
    const paymentPayload = {
      name: "Rishabh",
      number: "7987150636",
      amount: 1,
    };

    console.log(paymentPayload);

    await axios.post("/api/phonepay/payment", paymentPayload);
  };

  return (
    <>
      <Header />
      <h1>{orderId}</h1>
      <Button primary={1} onClick={handlePayment}>
        Payment Test
      </Button>
    </>
  );
}
