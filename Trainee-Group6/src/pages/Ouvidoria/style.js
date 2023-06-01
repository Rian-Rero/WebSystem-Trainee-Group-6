import styled from "styled-components";
import PoppinsB from "../../font/Poppins-Black.ttf";

export const Imagem = styled.image`
  color: white;

  width: 545px;
  @media screen and (max-width: 860px) {
    width: 100%;
  }
`;

export const Imagem2 = styled.image`
  width: 100%;

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
  width: 60%;

  @media screen and (max-width: 838px) {
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
  @media screen and (max-width: 860) {
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 0;
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
export const Put = styled.input`
  font-family: "Poppins";
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
  height: 55px;
  background: transparent;
  border-radius: 20px;
  border: solid 2px white;
  color: white;
  color: white;
  &:hover {
    background-color: #9998c5;
    color: white;
  }
  &:focus {
    background-color: #9998c5;
    color: white;
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
  color: white;
  &:hover {
    background-color: #9998c5;
    color: white;
  }
  &:focus {
    background-color: #9998c5;
    color: white;
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
  font-size: 18px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #9998c5;
    color: white;
  }
  &:focus {
    background-color: #9998c5;
    color: white;
  }
`;
export const Linha2 = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #09082f;
  width: 100%;
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
export const Logo = styled.div`
  display: flex;
  text-align: end;
  justify-content: end;
  align-items: end;
  background-color: #2f2e6f;
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

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;
