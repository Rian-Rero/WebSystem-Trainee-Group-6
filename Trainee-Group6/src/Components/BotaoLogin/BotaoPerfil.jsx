import {StyleBotaoPerfil} from "./style";
import perfilIcon from "../.././Icons/profile.svg";

function BotaoPerfil(props) 
{
     
    return (
        <StyleBotaoPerfil onClick={props.onClick}>
            <img src= {perfilIcon} alt="Ícone da Perfil" style={{width: 49,}} />  Perfil
        </StyleBotaoPerfil>
    )
}

export default BotaoPerfil;

