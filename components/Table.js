import styled from "styled-components";

const StyledTable = styled.table`
  width: fit-content;
  width: 900px;
  background-color: #fff;
  margin-top: 20px;
  font-family: "Poppins";
  border: 1px solid #475569;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  thead {
    color: #787474;
    display: flex;
    justify-content: space-between;

    th {
      text-align: left;
      font-family: "Poppins";
      padding: 12px;

      &:first-child {
        width: 600px;
      }
    }
  }

  tbody {
    tr {
      display: flex;
      justify-content: space-between;
      td {
        padding: 19px;
        color: #333;
        display: flex;
        align-items: center;
      }
    }
  }
`;

export default function Table({ ...props }) {
  return <StyledTable {...props} />;
}
