import { StyleBotaoCadastrar } from "./style";
import { AiFillPlusCircle } from "react-icons/ai";
function BotaoCadastrar(props) {
  return (
    <StyleBotaoCadastrar type="submit" onClick={props.onClick}>
      <AiFillPlusCircle />
      Cadastrar
    </StyleBotaoCadastrar>
  );
}

export default BotaoCadastrar;
