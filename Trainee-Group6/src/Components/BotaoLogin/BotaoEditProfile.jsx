import {StyleBotaoEditProfile} from "./style";
import editIcon from "../.././Icons/edit.svg";

function BotaoEditProfile(props) 
{
     
    return (
        <StyleBotaoEditProfile onClick={props.onClick}>
           <img src= {editIcon} alt="Ícone de Edit"/>
           Editar Perfil
        </StyleBotaoEditProfile>
    )
}

export default BotaoEditProfile;

