import styled from "styled-components";
import PoppinsB from "../../font/Poppins-Black.ttf";

export const Imagem = styled.image`
  color: white;

  width: 545px;
  @media screen and (max-width: 860px) {
    width: 100%;
  }
`;

export const Body = styled.div`
  font-family: "Poppins";
  height: 100%;
`;
export const Caixa = styled.div`
  display: flex;
  width: 60%;

  @media screen and (max-width: 860px) {
    width: 100%;
  }
`;

export const Coluna = styled.div`
  font-family: "Poppins";
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1428px) {
  }
  @media screen and (max-width: 860px) {
    width: 100%;
    flex-direction: column;
    margin: 80px;
  }
  @media screen and (max-width: 574px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Coluna2 = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 860px) {
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 0;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 574px) {
  }
  @media (max-width: 390px) {
  }
`;

export const DivGeral = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #0a0a30;
  height: 100vh;
  @media screen and (max-width: 860px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
  }
`;

export const Nome = styled.div`
  font-family: "Poppins";
  text-align: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 58px;
  background: transparent;
  border-radius: 20px;
  border: solid 2px white;
  color: white;
  gap: 30px;
  &:hover {
    background-color: #9998c5;
    color: white;
  }
  &:focus {
    background-color: #9998c5;
    color: white;
  }
  @media screen and (max-width: 1170px) {
    font-size: 14px;
    gap: 20px;
  }
  @media screen and (max-width: 910px) {
    font-size: 13px;
    gap: 15px;
  }
  @media screen and (max-width: 860px) {
    width: 100%;
    font-size: 20px;
    gap: 30px;
  }
  @media screen and (max-width: 522px) {
    width: 100%;
    font-size: 17px;
    gap: 20px;
  }
  @media screen and (max-width: 444px) {
    width: 100%;
    font-size: 14px;
    gap: 10px;
  }
  @media screen and (max-width: 342px) {
    width: 100%;
    font-size: 11px;
    gap: 10px;
  }
`;

export const Texto = styled.text`
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  font-family: "Poppins";
  height: 100%;
  background: transparent;
  border: solid 2px white;
  border-radius: 20px;
  color: white;
  font-size: 30px;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #9998c5;
    color: white;
  }

  @media screen and (max-width: 871px) {
    font-size: 29px;
  }
  @media screen and (max-width: 860px) {
    font-size: 30px;
  }
  @media screen and (max-width: 428px) {
    font-size: 26px;
  }
  @media screen and (max-width: 380px) {
    font-size: 21px;
  }
  @media screen and (max-width: 318px) {
    font-size: 18px;
  }
  @media screen and (max-width: 300px) {
    font-size: 17px;
  }
`;

export const Dados = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;

  width: 100%;
  gap: 20px;
  @media screen and (max-width: 860px) {
    display: flex;
    width: 150%;
  }
  @media screen and (max-width: 574) {
  }
`;
