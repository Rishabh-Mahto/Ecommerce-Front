import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Table from "@/components/Table";
import { useSession } from "next-auth/react";
import Image from "next/image";
import OrderInformation from "@/components/OrderInformation";

const PageContainer = styled.div`
  background-color: #f5f5f5;
`;

const ColumnWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 8px;
  }
`;

const CartWrapper = styled.div`
  h2 {
    font-family: "Poppins";
    font-size: 3rem;
  }
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 600px;
  @media (max-width: 786px) {
    width: 150px;
  }
`;

const ProductImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 80px;
  margin-right: 12px;
`;

const TextBox = styled.div`
  h1 {
    font-family: "Poppins";
    font-size: 1.5rem;
  }
`;

const QuantityLabel = styled.span`
  padding: 4px 8px;
  margin: 0 10px;
  font-family: "Poppins";
  font-size: 1.5rem;
`;

const ChangeButton = styled.button`
  width: 24px;
  height: 24px;
  font-size: 1rem;
  font-family: "Poppins";
  font-weight: 400;
  background-color: white;
  border-radius: 4px;
  border: 0.1px solid #98aac4;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CategoryBox = styled.div`
  display: flex;
  gap: 4px;

  h2 {
    font-family: "Poppins";
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: capitalize;
    background: #e1eeff;
    padding: 4px 8px;
    border-radius: 8px;
  }
`;

const Price = styled.p`
  font-family: "Poppins";
  font-size: 1.5rem;
  font-weight: 500;
  color: #475569;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const { data } = useSession();

  const fetchUser = async () => {
    const _user = await axios.post("/api/user", { email: data?.user?.email });
    setUser(_user.data);
  };

  useEffect(() => {
    data && fetchUser();
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts, data]);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  let total = 0;
  for (const productId of cartProducts) {
    const product = products.find((p) => p._id === productId);
    if (product) {
      const discountedPrice =
        product.price - (product.price * product.discount) / 100;
      total +=
        discountedPrice * cartProducts.filter((id) => id === productId).length;
    }
  }

  return (
    <PageContainer>
      <Header />
      <ColumnWrapper>
        <CartWrapper>
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
                  <tr key={product._id}>
                    <ProductInfoCell>
                      <ProductImageBox>
                        <Image
                          src={product.images[0][0]}
                          width={80}
                          height={75}
                          alt=""
                        />
                      </ProductImageBox>
                      <TextBox>
                        <h1>{product.title}</h1>
                        <CategoryBox>
                          {product.category.map((el) => (
                            <h2>{el}</h2>
                          ))}
                        </CategoryBox>
                      </TextBox>
                    </ProductInfoCell>

                    <td>
                      <ChangeButton
                        onClick={() => lessOfThisProduct(product._id)}
                      >
                        -
                      </ChangeButton>
                      <QuantityLabel>
                        {cartProducts.filter((id) => id === product._id).length}
                      </QuantityLabel>
                      <ChangeButton
                        onClick={() => moreOfThisProduct(product._id)}
                      >
                        +
                      </ChangeButton>
                    </td>
                    <td>
                      <Price>
                        ₹
                        {cartProducts.filter((id) => id === product._id)
                          .length *
                          (product.price -
                            (product.price * product.discount) / 100)}
                      </Price>
                    </td>
                  </tr>
                ))}
                <hr />
                <tr>
                  <td />
                  <td>
                    <Price>₹{total}</Price>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <p>
                      <b>₹ 40</b> will be charged as <b>delivery</b> for cart
                      value <b>less than ₹500</b>
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          )}
        </CartWrapper>
        <div>
          {products?.length > 0 && (
            <OrderInformation user={user} price={total} cart={cartProducts} />
          )}
        </div>
      </ColumnWrapper>
      <Footer />
    </PageContainer>
  );
}
