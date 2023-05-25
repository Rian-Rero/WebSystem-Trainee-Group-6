import { useNavigate } from "react-router-dom";
import BotaoEntrar from "../../Components/BotaoLogin/BotaoEntrar";
import Sider from "../../Components/Sider/Sider";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import {
  Body,
  Imagem,
  Coluna2,
  Coluna,
  Senha,
  Email,
  Pagina,
  Tamanho,
  Logo,
  Size,
  Imagem2,
} from "./style";
import { CgProfile } from "react-icons/cg";
import LogoBranca from "../../Icons/LogoBranca.png";

function Login() {
  const navigate = useNavigate();
  return (
    <Body>
      <Logo>
        <LogoHeader onClick={() => navigate("/")} />
      </Logo>

      <Sider />

      <Pagina>
        <Coluna>
          <Imagem>
            <img src={LogoBranca} alt="Logo WebTech" />
          </Imagem>
        </Coluna>
        <Coluna2>
          <Imagem2>
            <CgProfile />
          </Imagem2>
          <Tamanho>
            <Email placeholder="lara@webtech.com.br"></Email>

            <Senha placeholder="lara123"></Senha>

            <BotaoEntrar />
          </Tamanho>
        </Coluna2>
      </Pagina>
    </Body>
  );
}

export default Login;
