import { StyleBotaoSalvar } from "./style";
import { AiOutlineSave } from "react-icons/ai";
function BotaoSalvar(props) {
  return (
    <StyleBotaoSalvar type="submit" onClick={props.onClick}>
      <AiOutlineSave />
      Salvar
    </StyleBotaoSalvar>
  );
}

export default BotaoSalvar;
