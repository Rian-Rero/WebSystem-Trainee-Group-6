import {StyleBotaoDashBoard,TextoDashBoard} from "./style";
import DashBoardIcon from "../.././Icons/clock.svg";
function BotaoDashBoard(props) 
{
     
    return (
        <StyleBotaoDashBoard onClick={props.onClick}>           
          <img src= {DashBoardIcon} alt="Ícone do DashBoard" style={{width: 49,}}/> <TextoDashBoard>DashBoard</TextoDashBoard>
        </StyleBotaoDashBoard>        
    )
}

export default BotaoDashBoard;