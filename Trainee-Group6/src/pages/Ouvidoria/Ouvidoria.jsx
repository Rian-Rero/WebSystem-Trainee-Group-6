import {
  Body,
  Imagem,
  Imagem2,
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
            <Texto>
              Para relatar problemas de acesso ou de funcionamento, entre em
              contato através de um de nossos canais de atendimento
            </Texto>
          </Caixa>
          <Dados>
            <Nome> Canais de Atendimento </Nome>
            <Nome>Ponto RH: (31)XXXX-XXXX</Nome>

            <Nome>Central: (31)XXXX-XXXX</Nome>

            <Nome>0800: 0800-XXX-XXXX</Nome>
          </Dados>
        </Coluna2>
      </DivGeral>
    </Body>
  );
}

export default Ouvidoria;
