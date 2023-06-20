import styled from "styled-components";

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

export const Put = styled.input`
  text-align: center;
  display: flex;
  box-sizing: border-box;
  width: 100%;
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
  @media screen and (max-width: 425px) {
    font-size: 15px;
  }
  @media screen and (max-width: 300px) {
    font-size: 13px;
  }
`;

export const Tamanho = styled.div`
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 80%;
  gap: 20px;
`;
export const Valor = styled.span``;
