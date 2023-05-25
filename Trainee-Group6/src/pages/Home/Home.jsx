import { CgProfile } from "react-icons/cg";
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
  Pagina,
  Tamanho,
  Logo,
  Size,
  Lateral,
} from "./style";
import Sider from "../../Components/Sider/Sider";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import Carrossel from "../../Components/Carrosel/Carrossel";

function Home() {
  const navigate = useNavigate();
  return (
    <Body>
      <Logo>
        <LogoHeader onClick={() => navigate("/")} />
      </Logo>
      <Lateral>
        <Sider />
      </Lateral>

      <Pagina>
        <Coluna></Coluna>
      </Pagina>
    </Body>
  );
}

export default Home;
