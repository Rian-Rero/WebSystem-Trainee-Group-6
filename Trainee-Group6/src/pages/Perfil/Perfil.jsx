import BotaoEditProfile from "../../Components/BotaoLogin/BotaoEditProfile";
import { useNavigate } from "react-router-dom";
import {
  Body,
  Imagem,
  Coluna2,
  Nome,
  Cargo,
  Numero,
  Email,
  Texto,
  Linha2,
  Coluna,
  Pagina,
  Tamanho,
  Logo,
  Size,
} from "./style";
import { CgProfile } from "react-icons/cg";
import "./script.js";
import Sider from "../../Components/Sider/Sider";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";

function Perfil() {
  const navigate = useNavigate();
  return (
    <Body>
      <Pagina>
        <Coluna>
          <Imagem>
            <CgProfile />
          </Imagem>
          <Size>
            <BotaoEditProfile
              onClick={() => navigate("/perfil")}
            ></BotaoEditProfile>
          </Size>
        </Coluna>

        <Coluna2>
          <Tamanho>
            <Nome placeholder="Lara Nascimento"></Nome>

            <Linha2>
              <Cargo placeholder="Diretora de Produtos"></Cargo>

              <Numero placeholder="3300"></Numero>
            </Linha2>

            <Email placeholder="lara@webtech.com.br"></Email>

            <Texto placeholder="Sobre mim:"></Texto>
          </Tamanho>
        </Coluna2>
      </Pagina>
    </Body>
  );
}

export default Perfil;
