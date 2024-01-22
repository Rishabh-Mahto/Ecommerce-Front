import Button from "@/components/Button";
import Header from "@/components/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import dayjs from "dayjs";
import Footer from "@/components/Footer";

const StyleAcoount = styled.div`
  background-color: #f5f5f5;
`;

const ColsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
  gap: 40px;
  min-height: 400px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 40px;
    gap: 40px;
  }
`;

const MembershipContainer = styled.div`
  width: 60%;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;

const DetailsContainer = styled.div`
  width: 30%;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 12px 0px 12px 0;

  h3,
  h4,
  h5 {
    font-weight: 500;
  }
`;

export default function AccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState(null);
  const { data, status } = useSession();

  const fetchUser = async () => {
    const User = await axios.post("/api/user", { email: data?.user?.email });
    const Orders = await axios.get("/api/orders", {
      params: {
        email: User.data?.email,
      },
    });
    setUser(User.data);
    setOrders(Orders.data);
    setLoaded(true);
  };

  useEffect(() => {
    fetchUser();
  }, [status]);

  return (
    <StyleAcoount>
      <Header />
      <ColsWrapper>
        <MembershipContainer>
          {user && (
            <div>
              <h2>Account Membership</h2>
              <p>
                Membership:{" "}
                {dayjs(user.membershipEndsOn).isAfter(dayjs()) ? "Yes" : "No"}
              </p>
              <p>
                Latest Active Membership Date :
                {dayjs(user.membershipEndsOn).format("D MMMM YYYY")}
              </p>
              {/* Show current and previous orders here using status */}
            </div>
          )}
        </MembershipContainer>
        <DetailsContainer>
          <h2>Account Details</h2>
          {loaded ? (
            user ? (
              <UserDetails onClick={() => console.log(user)}>
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <h4>{user.phone}</h4>
              </UserDetails>
            ) : (
              <div>
                <p>Login Now!</p>
              </div>
            )
          ) : null}

          {status === "authenticated" ? (
            <Button secondary={1} onClick={() => signOut()}>
              Logout
            </Button>
          ) : (
            <Button secondary={1} onClick={() => signIn("google")}>
              Login
            </Button>
          )}
        </DetailsContainer>
      </ColsWrapper>
      <Footer />
    </StyleAcoount>
  );
}
