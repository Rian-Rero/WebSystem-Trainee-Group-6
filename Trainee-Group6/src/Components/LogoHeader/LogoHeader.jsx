import {DivLogo, PageTitle, BotaoLogoEscrita} from "./style";
import GroupLogoEscrita from "../.././Icons/Grouplogo.svg";


function LogoHeader(props) 
{
     
    return (
        <DivLogo>
            <PageTitle>

            <BotaoLogoEscrita onClick={props.onClick}> 
                <img src= {GroupLogoEscrita} alt="Ícone do DashBoard" />
            </BotaoLogoEscrita>
            
            </PageTitle>
        </DivLogo>
    ) 
}

export default LogoHeader;