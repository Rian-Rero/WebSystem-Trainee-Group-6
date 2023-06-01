import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  text-align: start;
  margin-left: 0%;
  margin: 0%;
  width: 100%;
  height: 129px;
  background-color: #2f2e6f;
  z-index: 0;
`;
export const DivLogo = styled.div`
  background-color: #2f2e6f;
  height: 129px;
  position: fixed;
  width: 100%;

  z-index: 3;
  position: fixed;
`;

export const PageTitle = styled.image`
  display: flex;

  align-items: start;
  justify-content: start;
  text-align: start;
  margin-left: 0%;
  margin: 0%;
  @media screen and (max-width: 614px) {
    display: none;
  }
`;

export const BotaoLogoEscrita = styled.button`
  display: flex;

  align-items: start;
  text-align: start;
  justify-content: start;
  margin-top: 15px;
  margin-left: 14%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 1790px) {
    margin-left: 20%;
  }
  @media screen and (max-width: 1270px) {
    margin-left: 25%;
  }
  @media screen and (max-width: 1000px) {
    margin-left: 30%;
  }
  @media screen and (max-width: 860px) {
    margin-left: 35%;
  }
  @media screen and (max-width: 710px) {
    margin-left: 42%;
  }
`;

export const DivLogo2 = styled.div`
  background-color: #2f2e6f;
  height: 129px;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 1;
  @media screen and (max-width: 614px) {
    display: flex;
  }
`;
export const Logo = styled.div`
  display: none;
`;
export const BotaoLogoEscrita2 = styled.button`
  display: flex;
  margin-top: 15px;
  margin-left: 150px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const PageTitle2 = styled.image`
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: start;
  margin-left: 0%;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 334px) {
    justify-content: start;
  }
`;
