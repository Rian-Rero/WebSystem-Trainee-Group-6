import styled from "styled-components";

export const StyleBotaoLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -6px;
  padding: 12px 24px;
  margin-right: 60px;
  gap: 50px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  width: 245px;
  background-color: #4f4e8c;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #09082f;
  }
`;

export const StyleBotaoHome = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -6px;
  padding: 12px 24px;
  gap: 50px;
  font-size: 32px;
  width: 245px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  background-color: #4f4e8c;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #09082f;
  }
`;
export const StyleBotaoCadastro = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
  padding: 12px 24px;
  width: 245px;
  gap: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  background-color: #4f4e8c;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transition: width 0.3s ease;

  &:hover {
    background-color: #09082f;
  }
`;
export const StyleBotaoPerfil = styled.button`
  display: flex;
  margin-left: -6px;
  padding: 12px 24px;
  width: 245px;
  gap: 50px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  background-color: #4f4e8c;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #09082f;
  }
`;

export const StyleBotaoDashBoard = styled.button`
  display: inline-block;
  padding: 12px 24px;
  gap: 0px;
  font-size: 32px;
  font-weight: bold;
  width: 245px;
  text-align: center;
  color: #ffffff;
  background-color: #4f4e8c;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #09082f;
  }
`;
export const StyleBotaoLogoEscrita = styled.button`
  display: inline-block;
  padding: 12px 24px;
  width: 245px;
  font-size: 27px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  background-color: #09082f;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #09082f;
  }
`;
export const StyleBotaoEditProfile = styled.button`
  display: flex;
  padding: 12px 24px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  width: 270px;
  gap: 8px;
  font-weight: bold;
  color: #ffffff;
  background-color: transparent;
  border-radius: 20px;
  border: solid 4px #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  @media screen and (max-width: 414px) {
    width: 200px;
    font-size: 18px;
  }

  &:hover {
    background-color: #9998c5;
  }
`;

export const Icon = styled.span`
  font-size: 32px;
`;

export const TxtLink = styled.span`
  margin-left: 0px;
`;

export const TextoDashBoard = styled.text``;
export const StyleIconHome = styled.img`
  width: 20px;
`;
export const StyleBotaoEntrar = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 55%;
  height: 60px;
  margin-top: 5px;
  background-color: #2f2e6f;
  border: 2px solid white;
  border-radius: 20px;
  font-size: 150%;
  color: white;
  cursor: pointer;
  gap: 10px;
  transition: background-color 0.3s ease;
  > svg {
    background-color: transparent;
  }

  &:hover {
    background-color: #09082f;
    color: white;
  }

  @media screen and (max-width: 414px) {
    font-size: 100%;
  }
`;
export const StyleBotaoSalvar = styled.button`
  display: flex;
  padding: 12px 24px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  width: 270px;
  gap: 8px;
  font-weight: bold;
  color: #ffffff;
  background-color: transparent;
  border-radius: 20px;
  border: solid 4px #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  @media screen and (max-width: 414px) {
    width: 200px;
    font-size: 18px;
  }

  &:hover {
    background-color: #9998c5;
  }
`;
export const StyleBotaoCadastrar = styled.button`
  display: flex;
  padding: 12px 24px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  width: 270px;
  gap: 8px;
  font-weight: bold;
  color: #ffffff;
  background-color: transparent;
  border-radius: 20px;
  border: solid 4px #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  @media screen and (max-width: 414px) {
    width: 200px;
    font-size: 18px;
  }

  &:hover {
    background-color: #9998c5;
  }
`;
