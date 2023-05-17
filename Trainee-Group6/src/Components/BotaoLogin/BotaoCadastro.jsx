import {StyleBotaoCadastro, Icon, TxtLink} from "./style";
import {BiUserPlus} from "react-icons/bi"

function BotaoCadastro(props) 
{
     
    return (
        <StyleBotaoCadastro onClick={props.onClick}>
           <Icon> <BiUserPlus/> </Icon>
           <TxtLink> Cadastro </TxtLink> 
        </StyleBotaoCadastro>
    )
}

export default BotaoCadastro;

