import styled from "styled-components";
import PoppinsB from "../../font/Poppins-Black.ttf";

export const Imagem = styled.image`
  font-size: 1600%;
  color: white;
  @media screen and (max-width: 1144px) {
    display: none;
  }
`;
export const Imagem2 = styled.image`
  font-size: 1600%;
  color: white;
  @media screen and (max-width: 480px) {
    font-size: 1200%;
  }
`;
export const Body = styled.div`
  background-color: #0a0a30;
  font-family: "Poppins";
  height: 100vh;
`;

export const Coluna = styled.div`
  font-family: "Poppins";
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 92%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1428px) {
  }
  @media screen and (max-width: 860px) {
    width: 50%;
    flex-direction: column;
    margin: 80px;
  }
  @media screen and (max-width: 574px) {
    width: 50%;
    flex-direction: column;
  }
`;

export const Coluna2 = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  justify-content: start;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1144px) {
    margin-bottom: 100px;
  }

  @media screen and (max-width: 860) {
    display: flex;
    width: 50%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 0;
    margin-top: 60px;
  }

  @media (max-width: 390px) {
  }
`;

export const Pagina = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 1144px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Senha = styled.input`
  text-align: center;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 55%;
  font-family: "Poppins";
  height: 58px;
  border-radius: 20px;
  background: transparent;
  border: 2px solid white;
  font-size: 18px;
  color: white;
  padding: 10px;
  &:hover {
    background-color: #9998c5;
    color: white;
  }
  &:focus {
    background-color: #9998c5;
    color: white;
  }
  @media screen and (max-width: 860px) {
    font-size: 14px;
  }
`;
export const Email = styled.input`
  text-align: center;
  display: flex;
  box-sizing: border-box;
  width: 55%;
  font-family: "Poppins";
  height: 55px;
  border-radius: 20px;
  padding: 10px;
  background: transparent;
  border: 2px solid white;
  font-size: 18px;

  color: white;
  &:hover {
    background-color: #9998c5;
    color: white;
  }
  &:focus {
    background-color: #9998c5;
    color: white;
  }
  @media screen and (max-width: 860px) {
    font-size: 14px;
  }
`;

export const Tamanho = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  gap: 20px;
  @media screen and (max-width: 1144px) {
    width: 140%;
  }
  @media screen and (max-width: 858px) {
    width: 160%;
  }
  @media screen and (max-width: 716px) {
    width: 190%;
  }
  @media screen and (max-width: 562px) {
    width: 220%;
  }
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
export const Labell = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;
export const Div1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  align-items: center;
  gap: 5px;
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
