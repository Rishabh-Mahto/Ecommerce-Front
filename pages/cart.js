import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import WhiteBox from "@/components/WhiteBox";
import Button from "@/components/Button";
import { useSession } from "next-auth/react";

const PageContainer = styled.div`
  background-color: #f5f5f5;
  /* padding: 0 50px 20px 50px; */
`;
const ColumnWrapper = styled.div`
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
    gap: 20px;
  }
`;
const CartWrapper = styled.div`
  flex: 80%;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
const ProductImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 80px;
  padding: 5px;
  background-color: #f0f0f0;
  img {
  }
`;

const QuantityLabel = styled.span`
  padding: 3px 7px;
  border: 1.5px solid #ccc;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;
const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const { data } = useSession();
  const [name, setName] = useState(data?.user.name || "");
  const [email, setEmail] = useState(data?.user.email || "");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }
  return (
    <PageContainer>
      <Header />
      <ColumnWrapper>
        <CartWrapper>
          <WhiteBox>
            <h2>Cart</h2>
            {!cartProducts?.length && <div>Your Cart is empty</div>}

            {products?.length > 0 && (
              <Table>
                <thead>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={product.images[0]} alt="" />
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>

                      <td>
                        <button onClick={() => lessOfThisProduct(product._id)}>
                          -
                        </button>
                        <QuantityLabel>
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>
                        <button onClick={() => moreOfThisProduct(product._id)}>
                          +
                        </button>
                      </td>
                      <td>
                        ₹
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </td>
                    </tr>
                  ))}
                  <hr />
                  <tr>
                    <td></td>
                    <td>Total to Pay</td>
                    <td>₹{total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </WhiteBox>
        </CartWrapper>

        {cartProducts?.length && (
          <WhiteBox>
            <h2>Order Information</h2>
            <form method="post" action="/api/checkout">
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

              <Button type="submit" secondary={1}>
                Continue to Payment
              </Button>
            </form>
          </WhiteBox>
        )}
      </ColumnWrapper>
    </PageContainer>
  );
}
