import styled from "styled-components";

const StyledTable = styled.table`
  background-color: #fff;
  margin-top: 20px;
  font-family: "Poppins";
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 350px;
    padding: 5px;
  }

  thead {
    color: #787474;
    display: flex;
    @media (max-width: 768px) {
    }
    th {
      text-align: left;
      font-family: "Poppins";
      padding: 12px 30px;
      flex-wrap: wrap;
      @media (max-width: 768px) {
        padding: 12px 15px;
      }
      &:first-child {
        width: 600px;
      }
    }
  }

  tbody {
    tr {
      display: flex;
      td {
        padding: 19px;
        color: #333;
        display: flex;
        align-items: center;
        @media (max-width: 768px) {
          padding: 15px;
        }
      }
    }
  }
`;

export default function Table({ ...props }) {
  return <StyledTable {...props} />;
}
