import {StyleBotaoLogin, Icon, TxtLink} from "./style";
import loginIcon from "../.././Icons/login.svg";
import {IoMdLogIn} from "react-icons/io"

function BotaoLogin(props) 
{
     
    return (
        <StyleBotaoLogin onClick={props.onClick}>
           <Icon> <IoMdLogIn/> </Icon>
           <TxtLink> Login </TxtLink> 
        </StyleBotaoLogin>
    )
}

export default BotaoLogin;

