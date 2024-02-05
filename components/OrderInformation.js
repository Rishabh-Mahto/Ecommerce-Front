import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { useRouter } from "next/router";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { ORDER_STATUS } from "./data/Constants";

const AddressInput = ({ email }) => {
  const [error, setError] = useState(null);
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleStreetAddressChange = (event) => {
    setStreetAddress(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const router = useRouter();

  const handleAddAddress = async () => {
    if (
      streetAddress === "" ||
      city === "" ||
      state === "" ||
      postalCode === ""
    ) {
      setError("Enter All Address Fields");
    } else {
      await axios
        .post("/api/user/address", {
          email: email,
          address: {
            streetAddress,
            city,
            state,
            postalCode,
          },
        })
        .then((response) => {
          router.reload();
        });
    }
  };

  return (
    <FlexBox>
      <Input
        type="text"
        value={streetAddress}
        onChange={handleStreetAddressChange}
        placeholder="Enter Address"
        style={{ width: "250px" }}
      />
      <Input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter City"
        style={{ width: "250px" }}
      />
      <Input
        type="text"
        value={state}
        onChange={handleStateChange}
        placeholder="Enter State"
        style={{ width: "250px" }}
      />
      <Input
        type="text"
        value={postalCode}
        onChange={handlePostalCodeChange}
        placeholder="Enter ZIP Code"
        style={{ width: "250px" }}
      />
      {error && <p>{error}</p>}
      <Button
        secondary={1}
        style={{ padding: "8px 8px", fontSize: "12px", width: "fit-content" }}
        onClick={handleAddAddress}
      >
        Add Address
      </Button>
    </FlexBox>
  );
};

function OrderInformation({ user, price, cart }) {
  const [error, setError] = useState(null);
  const [phone, setPhone] = useState(null);
  const [activeAddress, setActiveAddress] = useState(0);
  const [newAddress, setNewAddress] = useState(false);
  const { data, status } = useSession();

  useEffect(() => {
    const fetchUser = async () => {
      if (status === "authenticated") {
        try {
          const response = await axios.post("/api/user", {
            email: data?.user?.email,
          });
          const fetchedUser = response.data;
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUser();
  }, [status, data?.user]);

  const router = useRouter();

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddPhone = async () => {
    if (phone.toString().length === 10) {
      await axios
        .post("/api/user/phone", { email: user.email, phone: phone })
        .then((response) => {
          router.reload();
        });
    } else {
      setError("Enter 10 Digit Mobile Number");
    }
  };

  const handleCreateOrder = async () => {
    const createOrderPayload = {
      userEmail: user.email,
      status: ORDER_STATUS.INITIATED,
      isRentOrder: false,
      isDelivery: true,
      deliveryAddress: user.address[activeAddress],
      productId: cart,
      price: price > 499 ? price : price + 40,
    };

    try {
      const order = await axios.post("/api/orders/add", createOrderPayload);
      router.push(`/checkout/${order.data.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = async () => {
    const createOrderPayload = {
      userEmail: user.email,
      status: ORDER_STATUS.INITIATED,
      isRentOrder: false,
      isDelivery: true,
      deliveryAddress: user.address[activeAddress],
      productId: cart,
      price: price > 499 ? price : price + 40,
    };

    try {
      const order = await axios.post("/api/orders/add", createOrderPayload);
      // router.push(`/checkout/${order.data.data._id}`);
      const paymentPayload = {
        name: order.name,
        amount: 1,
      };

      if (order) {
        await axios.post("/api/phonepay/payment", paymentPayload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OrderContainer>
      <h1>Order Details : </h1>
      {status === "authenticated" && user ? (
        <UserBox>
          <UserInfo>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            {user.phone ? (
              <p>{user.phone}</p>
            ) : (
              <PhoneBox>
                <Input
                  type="number"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter 10 Digit Mobile Number"
                  style={{
                    WebkitAppearance: "textfield",
                    width: "250px",
                  }}
                />
                {error && <p>{error}</p>}
                <Button
                  tertiary={1}
                  style={{ padding: "8px 8px", fontSize: "13px" }}
                  onClick={handleAddPhone}
                >
                  Add Phone Number
                </Button>
              </PhoneBox>
            )}
            <h2>Total Price : {price > 499 ? price : price + 40}</h2>
          </UserInfo>
          {user.address.length === 0 ? (
            <AddressInput email={user.email} />
          ) : newAddress ? (
            <AddressInput email={user.email} />
          ) : (
            <AddressList>
              <h3>Select Address</h3>
              {user.address.map((el, index) => (
                <AddressOption
                  key={index}
                  onClick={() => setActiveAddress(index)}
                  selected={index === activeAddress}
                >{`${el.streetAddress}, ${el.city}, ${el.state}, ${el.postalCode}`}</AddressOption>
              ))}
              <Button
                secondary={1}
                style={{
                  padding: "8px 8px",
                  fontSize: "12px",
                  width: "fit-content",
                }}
                onClick={() => setNewAddress(true)}
              >
                Add New Address
              </Button>
            </AddressList>
          )}
          <Button
            onClick={handlePayment}
            tertiary={1}
            style={{ width: "fit-content", marginTop: "20px" }}
          >
            CONTINUE TO PAYMENT
          </Button>
        </UserBox>
      ) : (
        <Button
          secondary={1}
          style={{ width: "fit-content" }}
          onClick={() => signIn("google")}
        >
          Login
        </Button>
      )}
    </OrderContainer>
  );
}

const OrderContainer = styled.div`
  display: flex;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  padding: 50px;
  width: 450px;
  height: fit-content;
  min-height: 400px;
  margin: 95px 0 0 50px;
  border-radius: 8px;
  background-color: white;
  @media (max-width: 768px) {
    margin: 90px 0px 90px 0px;
    width: 340px;
  }
  h1 {
    font-family: "Poppins";
    font-size: 1.5rem;
    color: #475569;
  }
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;

  border: 1px solid #475569;
  padding: 10px;
  border-radius: 8px;

  h2 {
    font-size: 1.2rem;
    font-family: "Poppins";
    color: #475569;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    font-family: "Poppins";
    color: #475569;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
`;

const PhoneBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
`;

const AddressList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
  h3 {
    font-size: 1.2rem;
    font-family: "Poppins";
    color: #475569;
  }
`;

const AddressOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;

  border: 1px solid #475569;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    `
    background-color: #e1eeff;
  `}
`;

export default OrderInformation;
