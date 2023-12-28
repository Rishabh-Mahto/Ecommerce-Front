import styled from "styled-components";

const StyledTable = styled.table`
  background-color: #fff;
  margin-top: 20px;
  font-family: "Poppins";
  border: 1px solid #475569;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 340px;
    padding: 25px;
  }

  thead {
    color: #787474;
    display: flex;
    justify-content: space-between;
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
      justify-content: space-between;
      gap: 3px;
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
