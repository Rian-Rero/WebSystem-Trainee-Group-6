import styled from "styled-components";
import { Table } from "antd";

export const TabelaWrapper = styled.div`
  overflow-x: hidden;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 70px;
`;

export const TabelaContainer = styled.div`
  width: 80vw;
  margin: 0 auto;

  align-items: center;
  justify-content: center;
`;

export const StyledTable = styled(Table)`
  .custom-row {
    background-color: #0a0a30;
    color: white;
    font-family: "Poppins";
    max-width: 100%;
    text-align: center;
    &:hover {
      background-color: #9998c5;
    }
  }

  .ant-table-thead .ant-table-cell {
    background-color: #2f2e6f;
    color: white;
    text-align: center;
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    border: none;
    text-align: center;
    &:hover {
      background-color: #9998c5;
    }
  }

  &&& .ant-table-row:hover > td {
    background-color: inherit;
    text-align: center;
  }

  &&& {
    .ant-table-cell:last-child {
      border: none;
      text-align: center;
    }
  }
`;

export const Botao = styled.button`
  background-color: #2f2e6f;
  padding: 10px;
  width: 120px;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  border: solid 2px;

  &:hover {
    background-color: #0a0a30;
  }
`;

export const Div2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 400px;
  color: white;
  text-align: center;
  align-items: center;
  gap: 5px;
`;
export const Div3 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  color: white;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const Body = styled.div`
  width: 100%;
`;
