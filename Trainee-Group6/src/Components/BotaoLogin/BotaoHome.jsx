import {StyleBotaoHome, StyleIconHome} from "./style";
import homeIcon from "../.././Icons/home.svg";



function BotaoHome(props) 
{
     
    return (
        <StyleBotaoHome onClick={props.onClick}>           
        <img src= {homeIcon} alt="Ícone da Home" style={{width: 49,}} />  Home
        </StyleBotaoHome>        
    )
}

export default BotaoHome;