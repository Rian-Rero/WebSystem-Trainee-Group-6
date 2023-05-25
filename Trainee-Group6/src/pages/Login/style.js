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
  @media screen and (max-width: 1144px) {
  }
`;
export const Body = styled.div`
  background-color: #0a0a30;
  font-family: "Poppins";
  height: 100vh;
`;
export const Size = styled.div`
  display: flex;
  width: 60%;
`;

export const Coluna = styled.div`
  font-family: "Poppins";
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
export const Nome = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 58px;
  background: #9998c5;
  border: solid 2px #09082f;
  color: black;
`;
export const Cargo = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 58px;
  background: #9998c5;
  border: 2px solid #09082f;
  color: black;
`;
export const Senha = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 55%;
  font-family: "Poppins";
  height: 58px;
  border-radius: 20px;
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
`;
export const Email = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 55%;
  font-family: "Poppins";
  height: 55px;
  border-radius: 20px;
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
`;
export const Texto = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 60%;
  height: 292px;
  background: #9998c5;
  border: 2px solid #09082f;
  color: black;
`;
export const Linha2 = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #09082f;
  width: 100%;
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
export const Logo = styled.div`
  display: flex;
  text-align: end;
  justify-content: end;
  align-items: end;
`;
