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

export const DivCarrossel = styled.div`
  margin-top: 2%;

  background: transparent;
  color: #2f2e6f;
`;

export const ImgCarrossel = styled.img`
  border-radius: 10px;
  /* width: 68%;
  height: 52%; */
  margin: 0 auto;
`;

export const Tabela = styled.table`
  width: 90%;
  margin-top: 100px;
  margin-left: 95px;
`;
