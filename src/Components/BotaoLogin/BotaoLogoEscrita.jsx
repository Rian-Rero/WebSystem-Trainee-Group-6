import {StyleBotaoLogoEscrita,} from "./style";
import GroupLogoEscrita from "../.././Icons/Grouplogo.svg";



function BotaoLogoEscrita(props) 
{
     
    return (
        <StyleBotaoLogoEscrita onClick={props.onClick}>           
          <img src= {GroupLogoEscrita} alt="Ícone do DashBoard" />
        </StyleBotaoLogoEscrita>        
    )
}

export default BotaoLogoEscrita;