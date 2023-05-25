import {
  Fundo,
  Espacamento,
  StyleMsg,
  StyleSpace,
  StyleContatos,
  EspacamentoInputs,
  Logo,
} from "./style";
import Sider from "../../Components/Sider/Sider";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import { useNavigate } from "react-router-dom";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

function Ouvidoria() {
  const navigate = useNavigate();

  return (
    <div>
      <Fundo>
        <Logo>
          <LogoHeader onClick={() => navigate("/")} />
        </Logo>
        <div>
          <Sider></Sider>
        </div>
        <Espacamento>
          <StyleSpace>
            <StyleMsg>Canais de atendimento</StyleMsg>
          </StyleSpace>
        </Espacamento>
        <StyleSpace>
          <EspacamentoInputs>
            <img src="" /> {/*Colocar o ícone do telegone*/}
            <StyleContatos>
              <BsFillTelephoneOutboundFill /> Ponto RH: (31)XXXX-XXXX
            </StyleContatos>
            <StyleContatos>
              <BsFillTelephoneOutboundFill /> Central: (31)XXXX-XXXX
            </StyleContatos>
            <StyleContatos>
              <BsFillTelephoneOutboundFill /> Nosso 0800: 0800-XXX-XXXX
            </StyleContatos>
          </EspacamentoInputs>
        </StyleSpace>
      </Fundo>
    </div>
  );
}

export default Ouvidoria;
