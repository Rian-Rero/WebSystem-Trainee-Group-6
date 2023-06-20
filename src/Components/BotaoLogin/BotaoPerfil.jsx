import {StyleBotaoPerfil, Icon, TxtLink} from "./style";
import {CgProfile} from "react-icons/cg"

function BotaoPerfil(props) 
{
     
    return (
        <StyleBotaoPerfil onClick={props.onClick}>
           <Icon> <CgProfile/> </Icon>
           <TxtLink> Perfil </TxtLink> 
        </StyleBotaoPerfil>
    )
}

export default BotaoPerfil;

