import Button from "@/components/Button";
import Header from "@/components/Header";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import { useEffect, useState } from "react";
import Input from "@/components/Input";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import dayjs from "dayjs";
import Footer from "@/components/Footer";

const StyleAcoount = styled.div`
  background-color: #f5f5f5;
`;
const Wrapper = styled.div`
  padding: 30px;
`;
const ColsWrapper = styled.div`
  display: flex;
  flex: 60%;
  align-items: flex-start;
  margin-top: 40px;
  padding: 60px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 40px;
    gap: 80px;
  }
`;
const WishWrapper = styled.div`
  flex: 80%;
  padding-right: 200px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const CityHolder = styled.div`
  display: flex;
  gap: 5px;
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
  const { data, status } = useSession();
  console.log({ data, status });

  const fetchUser = async () => {
    await axios
      .post("/api/user", { email: data?.user?.email })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
  };

  useEffect(() => {
    fetchUser();
  }, [status]);

  return (
    <StyleAcoount>
      <Header />
      <Wrapper>
        <ColsWrapper>
          <WishWrapper>
            <WhiteBox>
              {user && (
                <div>
                  <h2>Account Membership</h2>
                  <p>Membership: {user.isMembershipActive ? "Yes" : "No"}</p>
                  <p>
                    Active Until :
                    {dayjs(user.membershipEndsOn).format("D MMMM YYYY")}
                  </p>
                </div>
              )}
            </WhiteBox>
          </WishWrapper>
          <div>
            <WhiteBox>
              <h2>Account Details</h2>
              {loaded && (
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    name="name"
                    onChange={(ev) => setName(ev.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                  <CityHolder>
                    <Input
                      type="text"
                      placeholder="City"
                      value={city}
                      name="city"
                      onChange={(ev) => setCity(ev.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Postal code"
                      value={postalCode}
                      name="postalCode"
                      onChange={(ev) => setPostalCode(ev.target.value)}
                    />
                  </CityHolder>
                  <Input
                    type="text"
                    placeholder="street address"
                    value={streetAddress}
                    name="streetAddress"
                    onChange={(ev) => setStreetAddress(ev.target.value)}
                  />
                  <CityHolder>
                    <Input
                      type="text"
                      placeholder="State"
                      value={state}
                      name="state"
                      onChange={(ev) => setState(ev.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Country"
                      value={country}
                      name="country"
                      onChange={(ev) => setCountry(ev.target.value)}
                    />
                  </CityHolder>

                  <Button secondary={1} onClick={saveAddress}>
                    Save
                  </Button>
                  <hr />
                </div>
              )}

              {status === "authenticated" ? (
                <Button secondary={1} onClick={() => signOut()}>
                  Logout
                </Button>
              ) : (
                <Button secondary={1} onClick={() => signIn("google")}>
                  Login
                </Button>
              )}
            </WhiteBox>
          </div>
        </ColsWrapper>
      </Wrapper>
      <Footer />
    </StyleAcoount>
  );
}
