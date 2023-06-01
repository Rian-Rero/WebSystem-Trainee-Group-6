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
  width: 100%;
`;
export const Size = styled.div`
  display: flex;
  background-color: #0a0a30;
  width: 100%;
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
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 100%;
  gap: 150px;
  background-color: #0a0a30;
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
export const Lista = styled.ul`
  height: 100%;
  list-style-type: none;
`;

export const ItemMenu = styled.li`
  padding: 20px 4%;
  display: flex;
  margin-bottom: 20px;
`;
export const Expandir = styled.div`
  width: 100%;
  padding-left: 10px;
  color: #ffffff;
  font-size: 32px;
  cursor: pointer;
  margin-left: -18px;
`;

export const DivCarrossel = styled.div`
  margin-left: 16%;
  margin-top: 2%;
  width: 70%;
  background: #09082f;
  color: #2f2e6f;
`;

export const ImgCarrossel = styled.img`
  border-radius: 10px;
  width: 68%;
  height: 52vh;
  margin: 0 auto;
`;

export const Tabela = styled.table`
  width: 90%;
  margin-top: 100px;
  margin-left: 95px;
  z-index: 100;
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
