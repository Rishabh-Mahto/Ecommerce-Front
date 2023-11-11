import styled, {css} from "styled-components"


export const ButtonStyle = css`
  align-items: center;
  border-radius: 7px;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  outline: 0;
  text-align: center;
  text-decoration: none;

  ${props =>
    props.secondary &&
    css`
      background-color: #EBEBEB;
      border: none;
      padding: 10px 21px;
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: #fff; /* Change background on hover */
        color: #000; /* Change text color on hover */
      }
    `}
    
  ${props =>
    props.primary &&
    css`
      background-color: #fff;
      border: 2px solid #000;
      padding: 10px;
      transition: all 0.3s;

      &:hover {
        border-color: red;
        color: red;
        fill: red;
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`

export default function Button({children,...rest}) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    )
}
