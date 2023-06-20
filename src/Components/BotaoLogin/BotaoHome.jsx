import {Icon, StyleBotaoHome, StyleIconHome, TxtLink} from "./style";
import {RiHome5Line} from "react-icons/ri"



function BotaoHome(props) 
{
     
    return (
        <StyleBotaoHome onClick={props.onClick}>           
           <Icon> <RiHome5Line/> </Icon>
           <TxtLink> Home </TxtLink> 
        </StyleBotaoHome>        
    ) 
}

export default BotaoHome;