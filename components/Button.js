import styled, { css } from "styled-components";

export const ButtonStyle = css`
  align-items: center;
  border-radius: 7px;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-size: 16px;
  font-weight: 600;
  outline: 0;
  text-align: center;
  text-decoration: none;

  ${(props) =>
    props.secondary &&
    css`
      background-color: #ebebeb;
      border: none;
      padding: 8px 20px;
      transition: all 0.1s ease-in-out;
      font-family: "Poppins";
      font-weight: 500;

      &:hover {
        background-color: #fff;
        color: #000;
        border: 2px solid #000;
      }
    `}

  ${(props) =>
    props.primary &&
    css`
      background-color: red;
      color: white;
      font-family: Poppins;
      font-weight: 500;
      border: none;
      padding: 12px 24px;
      border-radius: 24px;
      transition: all 0.3s;

      &:hover {
        background-color: #da0000;
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
