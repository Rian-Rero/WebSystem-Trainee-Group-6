import styled from "styled-components";
import PoppinsB from "../../font/Poppins-Black.ttf";

export const Size = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 1828px) {
    width: 130%;
  }
  @media screen and (max-width: 1418px) {
    width: 160%;
  }
  @media screen and (max-width: 1136px) {
    width: 190%;
  }
  @media screen and (max-width: 956px) {
    width: 210%;
  }
`;

export const Imagem = styled.image`
  font-size: 2200%;
  color: white;

  @media screen and (max-width: 860px) {
    font-size: 2100%;
    margin-top: 170px;
  }
  @media screen and (max-width: 614px) {
    font-size: 1800%;
  }
  @media screen and (max-width: 614px) {
    font-size: 1500%;
  }
`;
export const Body = styled.div`
  background-color: #0a0a30;
  font-family: "Poppins";
  height: 100%;
  @media screen and (max-width: 1330px) {
  }
  @media screen and (max-width: 1064) {
  }
  @media screen and (max-width: 860) {
  }
`;
export const DivLogo = styled.div`
  background-color: #09082f;
  height: 129px;
  width: 100%;
`;

export const PageTitle = styled.image`
  position: absolute;
  top: 2px;
  right: 1170px;
  left: 270px;
`;
export const MenuLateral = styled.nav`
  position: fixed;
  top: 0;
  height: 1024px;
  background-color: #4f4e8c;
  width: 80px;
  border: none;
  padding: 40px 0 40px 0%;
  overflow: hidden;
  transition: 0.3s;
  &:hover {
    width: 245px;
  }
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
export const Coluna = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  width: 50%;
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
  width: 50%;
  height: 100%;
  justify-content: center;
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
    width: 50%;
  }
  @media (max-width: 390px) {
  }
`;
export const Pagina = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 860px) {
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
  border-radius: 20px;
`;
export const Cargo = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 67%;
  height: 58px;
  background: #9998c5;

  border: 2px solid #09082f;

  border-radius: 20px;
  color: black;
`;
export const Numero = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 33%;
  height: 58px;
  background: #9998c5;
  border: 2px solid #09082f;

  border-radius: 20px;
  color: black;
`;
export const Email = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 58px;
  background: #9998c5;
  border-radius: 20px;
  border: 2px solid #09082f;
  color: black;
`;
export const Texto = styled.input`
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 361px;
  background: #9998c5;
  border-radius: 20px;
  border: 2px solid #09082f;
  color: black;
`;
export const Linha2 = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;
export const Tamanho = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 60%;
  gap: 2px;
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
`;
