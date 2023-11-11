import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-family: Arial, sans-serif;
  border: none; /* Added to remove border lines */

  thead {
    /* background-color: #4b4b4b; */
    color: #787474;
    font-weight: bold;

    th {
      text-align: left;
      padding: 12px;
    }
  }

  tbody {
    tr {
      td {
        padding: 19px;
        color: #333;

        &:first-child {
          display: flex;
          align-items: center;
          gap: 5px;

          img {
            max-width: 70px;
            max-height: 75px;
            border: none; 
            border-radius: 0; 
          }
        }

        &:last-child {
          font-weight: bold; /* Make the last td (price) bold */
        }

        @media (max-width: 768px) {
          &:nth-child(2) {
            font-size: 14px;
            padding: 10px;
          }
        }

        button {
          background: #fff;
          color: #f00;
          border: none;
          cursor: pointer;
          font-size: 24px;
        }
      }
    }
  }
`;

export default function Table({ ...props }) {
  return <StyledTable {...props} />;
}
