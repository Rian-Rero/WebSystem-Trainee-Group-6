import styled from "styled-components";

export const Espacamento = styled.div``;

export const EspacamentoInputs = styled.div`
  margin-top: 200px;

  display: flex;
  justify-content: center;
  gap: 50px;
  flex-direction: column;
  align-items: center;
`;

export const Fundo = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0a0a30;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const StyleMsg = styled.div`
  margin-bottom: 10%;
  font-family: "Poppins";
  background-color: transparent;
  color: #fff;
  display: flex;
  justify-content: center;
  width: 70%;
  height: 10%;
  //cima direita baixo esquerda
  border: 3px solid #fff;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  align-items: center;
  border-radius: 20px;
  @media screen and (max-width: 366px) {
    width: 95%;
  }
`;

export const StyleSpace = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 50px;
  flex-direction: column;
  height: 100%;

  width: 100%;
`;

export const StyleContatos = styled.div`
  font-family: "Poppins";
  background-color: #9998c5;
  color: BLACK;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 40px;
  border: 2px solid #fff;
  text-align: center;
  font-size: 18px;
  gap: 50px;
  align-items: center;
  border-radius: 15px;
  > svg {
    color: white;
    align-items: start;
    justify-content: start;
    text-align: start;
    @media screen and (max-width: 486px) {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 486px) {
    width: 100%;
  }
  @media screen and (max-width: 334px) {
    width: 80%;
    font-size: 15px;
    height: 60px;
  }
`;
export const Logo = styled.div`
  display: flex;
  text-align: end;
  justify-content: end;
  align-items: end;
`;
