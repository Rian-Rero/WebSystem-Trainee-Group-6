import styled from "styled-components";
import PoppinsB from "../../font/Poppins-Bold.ttf";

export const Body = styled.div`
  background-color: #0a0a30;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1330px) {
  }
  @media screen and (max-width: 1064) {
  }
  @media screen and (max-width: 600) {
  }
`;

export const Lista = styled.ul`
  height: 100%;
  list-style-type: none;
`;

export const Tabela = styled.table`
  width: 90%;
  margin-top: 100px;
  margin-left: 95px;
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
