import {StyleBotaoEditProfile} from "./style";
import {FiEdit} from "react-icons/fi"
function BotaoEditProfile(props) 
{
     
    return (
        <StyleBotaoEditProfile onClick={props.onClick}>
           <FiEdit/>
           Editar Perfil
        </StyleBotaoEditProfile>
    )
}

export default BotaoEditProfile;

