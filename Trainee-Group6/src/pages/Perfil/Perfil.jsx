import BotaoEditProfile from "../../Components/BotaoLogin/BotaoEditProfile";
import { useNavigate } from "react-router-dom";
import { Body, Imagem, Coluna2, Coluna, Pagina, Size } from "./style";
import { CgProfile } from "react-icons/cg";
import "./script.js";
import Sider from "../../Components/Sider/Sider";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import useAuthStore from "../../stores/auth";
import Usuario from "../../Components/Usuario/Usuario";

function Perfil() {
  const navigate = useNavigate();
  const usuario = useAuthStore((state) => state.usuario);
  return (
    <Body>
      <Pagina>
        <Coluna>
          <Imagem>
            <CgProfile />
          </Imagem>
          <Size>
            <BotaoEditProfile
              onClick={() => navigate("/editperfil")}
            ></BotaoEditProfile>
          </Size>
        </Coluna>

        <Coluna2>
          <Usuario usuario={usuario} />
        </Coluna2>
      </Pagina>
    </Body>
  );
}

export default Perfil;
