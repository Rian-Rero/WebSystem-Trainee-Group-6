import {StyleBotaoLogin} from "./style";
import loginIcon from "../.././Icons/login.svg";

function BotaoLogin(props) 
{
     
    return (
        <StyleBotaoLogin onClick={props.onClick}>
           <img src= {loginIcon} alt="Ícone do Login" style={{width: 49,}} />Login
        </StyleBotaoLogin>
    )
}

export default BotaoLogin;

