import { StyleBotaoEntrar, Icon, TxtLink } from "./style";

import { IoMdLogIn } from "react-icons/io";

function BotaoEntrar(props) {
  return (
    <StyleBotaoEntrar onClick={props.onClick}>
      <IoMdLogIn />
      Login
    </StyleBotaoEntrar>
  );
}

export default BotaoEntrar;
