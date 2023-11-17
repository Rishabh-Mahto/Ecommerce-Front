import Link from "next/link";
import styled, { css } from "styled-components";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import Search from "./icons/Search";

const StyledHeader = styled.header`
  background-color: #f5f5f5;
  padding: 0 60px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  background-color: #f5f5f5;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: static;
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
`;

const Btn = styled.button`
  background-color: #f90716;
  border: none;
  outline: none;
  font-size: 15px;
  padding: 13px 17px;
  margin: 6px auto;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #da0037;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 27px;
  margin: 0;
  padding: 0px 30px;
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;

const NavBtn = styled.div`
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
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
`;

const CartStyle = styled.div``;

const CartCount = styled.span`
  color: #cd0404;
  font-weight: 700;
  font-size: 16px;
`;

const DropdownMenu = styled.div``;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [hidden, setHidden] = useState(false);

  const toggleVisibility = () => {
    setHidden(!hidden);
  };

  return (
    <>
      <StyledHeader>
        <Wrapper>
          <Left>
            <Logo href={"/"}>
              <h3>ReadOnRent</h3>
            </Logo>
          </Left>
          <NavBtn onClick={() => toggleVisibility()}>
            <BarsIcon />
          </NavBtn>
          <Center hidden={hidden}>
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
          <Right hidden={hidden}>
            <NavLink href={"/cart"}>
              <CartStyle>
                <FontAwesomeIcon
                  icon={faBagShopping}
                  style={{ color: "#101011" }}
                />
                <CartCount>{cartProducts.length}</CartCount>
              </CartStyle>
            </NavLink>
            <NavLink href={"/account"}>
              <FontAwesomeIcon icon={faUser} style={{ color: "#121212" }} />
            </NavLink>
          </Right>
        </Wrapper>
      </StyledHeader>
    </>
  );
}
