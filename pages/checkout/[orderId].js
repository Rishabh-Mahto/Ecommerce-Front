import Button from "@/components/Button";
import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [order, setOrder] = useState(null);
  const router = useRouter();
  const { orderId } = router.query;
  console.log(orderId);

  const fetchOrder = async () => {
    const _order = await axios.get(`/api/orders?id=${orderId}`);
    const user = await axios.post("/api/user", {
      email: _order.data?.userEmail,
    });
    setOrder({ ..._order.data, name: user.data.name });
  };

  useEffect(() => {
    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  const handlePayment = async () => {
    const paymentPayload = {
      name: order.name,
      amount: 1,
    };

    if (order) {
      const url = await axios.post("/api/phonepay/payment", paymentPayload);
      router.push(url.data);
    }
  };

  return (
    <>
      <Header />
      <p>{JSON.stringify(order)}</p>
      <Button primary={1} onClick={handlePayment}>
        Continue to payment
      </Button>
    </>
  );
}
