import styled from "styled-components";
import PoppinsB from "../../font/Poppins-Black.ttf";

export const Imagem = styled.image`
  font-size: 2200%;
  color: white;
  @media screen and (max-width: 342px) {
    font-size: 1500%;
  }
`;
export const Body = styled.div`
  background-color: #0a0a30;
  font-family: "Poppins";
  height: 100%;
`;
export const Size = styled.div`
  display: flex;
  width: 60%;
`;

export const Coluna = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  width: 100%;

  height: 92%;
  justify-content: end;
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
  width: 100%;
  height: 100%;
  justify-content: start;
  align-items: center;
  text-align: center;
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
  @media screen and (max-width: 574px) {
  }
  @media (max-width: 390px) {
  }
`;

export const Pagina = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: #09082f;
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
  width: 100%;
  height: 58px;
  background: #9998c5;
  border: 2px solid #09082f;

  color: black;
`;
export const Email = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 58px;
  background: #9998c5;
  border: 2px solid #09082f;
  color: black;
`;
export const Texto = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 100%;
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
  top: 600px;
  width: 30%;
  gap: 20px;
  @media screen and (max-width: 1304px) {
    width: 50%;
  }
  @media screen and (max-width: 820px) {
    width: 65%;
  }
  @media screen and (max-width: 344px) {
    width: 80%;
  }
`;
export const Logo = styled.div`
  display: flex;
  position: relative;
  text-align: end;
  justify-content: end;
  align-items: end;
  z-index: 10;
`;
export const Lateral = styled.div`
  position: fixed;
  z-index: 11;
`;
