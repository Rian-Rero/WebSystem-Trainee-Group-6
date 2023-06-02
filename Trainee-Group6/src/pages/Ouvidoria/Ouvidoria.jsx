import {
  Body,
  Imagem,
  Coluna2,
  Texto,
  Nome,
  Coluna,
  DivGeral,
  Dados,
  Caixa,
} from "./style";
import LogoBranca from "../../Icons/LogoBranca.png";

import { useNavigate } from "react-router-dom";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import Carrossel from "../../Components/Carrosel";

function Ouvidoria() {
  const navigate = useNavigate();

  return (
    <Body>
      <DivGeral>
        <Coluna>
          <Imagem>
            <img src={LogoBranca} alt="Logo WebTech" />
          </Imagem>
        </Coluna>

        <Coluna2>
          <Caixa>
            <Texto>Fale Conosco:</Texto>
          </Caixa>
          <Dados>
            <Nome>Canais de Atendimento </Nome>
            <Nome>
              <BsFillTelephoneOutboundFill />
              Ponto RH: (31)XXXX-XXXX
            </Nome>

            <Nome>
              <BsFillTelephoneOutboundFill />
              Central: (31)XXXX-XXXX
            </Nome>

            <Nome>
              <BsFillTelephoneOutboundFill />
              0800: 0800-XXX-XXXX
            </Nome>
          </Dados>
        </Coluna2>
      </DivGeral>
    </Body>
  );
}

export default Ouvidoria;
