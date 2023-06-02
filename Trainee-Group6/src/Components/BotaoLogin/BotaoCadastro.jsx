import { StyleBotaoCadastro, Icon, TxtLink } from "./style";
import { BiUserPlus } from "react-icons/bi";

function BotaoCadastro(props) {
  return (
    <StyleBotaoCadastro onClick={props.onClick}>
      <TxtLink>
        {" "}
        <BiUserPlus /> Cadastro{" "}
      </TxtLink>
    </StyleBotaoCadastro>
  );
}

export default BotaoCadastro;
