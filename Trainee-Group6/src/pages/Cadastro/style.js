import styled from "styled-components";
import PoppinsB from "../../font/Poppins-Black.ttf";

export const Imagem = styled.image`
  font-size: 2200%;
  color: white;
  @media screen and (max-width: 342px) {
    font-size: 1500%;
    > img {
      width: 100%;
    }
  }
`;
export const Body = styled.div`
  font-family: "Poppins";
  height: 100%;
`;
export const Caixa = styled.div`
  display: flex;
  width: 50%;
  @media screen and (max-width: 838px) {
  }
`;

export const Coluna = styled.div`
  font-family: "Poppins";
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 92%;
  justify-content: start;
  align-items: center;

  @media screen and (max-width: 860px) {
    display: none;
    /* width: 100%;
    flex-direction: column;
    margin: 80px; */
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
  justify-content: start;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 860px) {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 0;
    margin-top: 60px;
  }
  @media screen and (max-width: 574px) {
    width: 50%;
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

export const Texto = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-family: "Poppins";
  height: 292px;
  background: #0a0a30;
  border: 2px solid #ffff;
  border-radius: 20px;
  color: black;
  font-size: 18px;
  color: #9998c5;
  text-align: center;
  padding-top: 100px;
  @media screen and (max-width: 1296px) {
    font-size: 15px;
  }
`;

export const Dados = styled.form`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 60%;
  gap: 20px;
  @media screen and (max-width: 860px) {
    display: flex;
    width: 150%;
  }
  @media screen and (max-width: 574) {
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Labell = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: white;
`;
export const Put = styled.input`
  text-align: center;
  font-family: "Poppins";
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 58px;
  background: #0a0a30;
  border-radius: 20px;
  border: 2px solid #ffff;
  font-size: 18px;
  color: #9998c5;
  &:hover {
    background-color: #9998c5;
    color: white;
  }
  &:focus {
    background-color: #9998c5;
    color: white;
  }
  @media screen and (max-width: 1296px) {
    font-size: 15px;
  }
`;
