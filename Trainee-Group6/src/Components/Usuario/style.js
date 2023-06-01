import styled from "styled-components";

export const Tamanho = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  width: 60%;
  gap: 5px;
  @media screen and (max-width: 860px) {
    display: flex;
    width: 150%;
  }
  @media screen and (max-width: 574) {
  }
`;
export const Campo = styled.div`
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
  height: 55px;
  background: transparent;
  border: solid 2px white;
  color: white;
  border-radius: 20px;
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

  width: 100%;
`;
export const Texto = styled.text`
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 361px;
  font-size: 18px;
  background: transparent;
  border-radius: 20px;
  border: solid 2px white;
  color: white;
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
export const Valor = styled.span``;
