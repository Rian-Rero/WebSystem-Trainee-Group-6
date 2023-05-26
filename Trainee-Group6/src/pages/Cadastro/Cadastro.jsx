import { useNavigate } from "react-router-dom";
import {
  Body,
  Imagem,
  Coluna2,
  Nome,
  Cargo,
  Senha,
  Email,
  Texto,
  Linha2,
  Coluna,
  DivGeral,
  Dados,
  Logo,
  Caixa,
} from "./style";
import { CgProfile } from "react-icons/cg";
import Sider from "../../Components/Sider/Sider";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import LogoBranca from "../../Icons/LogoBranca.png";

function Cadastro() {
  const navigate = useNavigate();
  return (
    <Body>
      <DivGeral>
        <Coluna>
          <Imagem>
            <img src={LogoBranca} alt="Logo WebTech" />
          </Imagem>
          <Caixa>
            <Texto placeholder="Vamos realizar o seu primeiro acesso, preencha seus dados e siga as instruçoes:"></Texto>
          </Caixa>
        </Coluna>

        <Coluna2>
          <Imagem>
            <CgProfile />
          </Imagem>
          <Dados>
            <Nome placeholder="Nome completo"></Nome>

            <Email placeholder="Email"></Email>

            <Senha placeholder="Insira uma senha de 5 digitos"></Senha>

            <Cargo placeholder="Cargo"></Cargo>
          </Dados>
        </Coluna2>
      </DivGeral>
    </Body>
  );
}

export default Cadastro;
