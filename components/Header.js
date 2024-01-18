import Link from "next/link";
import styled, { css } from "styled-components";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import Search from "./icons/Search";

const StyledHeader = styled.header`
  background-color: #e8e8e6;
  padding: 0 60px;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  background-color: #e8e8e6;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #0c0c0c;
  text-decoration: none;
  padding: 0 20px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 15px;
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
  @media (max-width: 768px) {
    align-items: none;
    justify-content: none;
  }
`;

const Btn = styled.button`
  background-color: #ff4f5b;
  background-image: linear-gradient(to right, #ff4f5b, #f90716);
  border: none;
  outline: none;
  font-size: 16px;
  padding: 12px 20px;
  margin: 10px auto;
  border-radius: 30px;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out,
    box-shadow 0.3s ease-in-out;

  &:hover {
    background-color: #da0037;
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 16px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 27px;
  padding: 0px 30px;
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
  @media (max-width: 768px) {
    align-items: none;
    gap: 12px;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  color: #0c0c0c;
  text-decoration: none;
  ${(props) =>
    props.primary &&
    css`
      color: #fff;
    `}
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CartCount = styled.span`
  color: #cd0404;
  font-weight: 700;
  font-size: 16px;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);

  return (
    <>
      <StyledHeader>
        <Wrapper>
          <div>
            <Left>
              <Logo href={"/"}>
                <h3>ReadOnRent</h3>
              </Logo>
            </Left>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "70px",
            }}
          >
            <Center>
              <NavLink href={"/products"}>All Products</NavLink>
              <Btn>
                <NavLink primary={1} href={"/membership"}>
                  Membership
                </NavLink>
              </Btn>
              <NavLink href={"/search"}>
                <Search />
              </NavLink>
            </Center>

            <Right>
              <NavLink href={"/cart"}>
                <div>
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    style={{ color: "#101011" }}
                  />
                  <CartCount>{cartProducts.length}</CartCount>
                </div>
              </NavLink>
              <NavLink href={"/account"}>
                <FontAwesomeIcon icon={faUser} style={{ color: "#121212" }} />
              </NavLink>
            </Right>
          </div>
        </Wrapper>
      </StyledHeader>
    </>
  );
}
