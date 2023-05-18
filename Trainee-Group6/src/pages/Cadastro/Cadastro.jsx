import BotaoHome from "../../Components/BotaoLogin/BotaoHome";
import BotaoLogin from "../../Components/BotaoLogin/BotaoLogin";
import BotaoCadastro from "../../Components/BotaoLogin/BotaoCadastro";
import BotaoPerfil from "../../Components/BotaoLogin/BotaoPerfil";
import BotaoLogoEscrita from "../../Components/BotaoLogin/BotaoLogoEscrita";
import { useNavigate } from "react-router-dom";
import { DivHome, DivLateral, Body, PageTitle, DivLogo, DivLateral2, Imagem, MenuLateral, Lista, ItemMenu, Expandir } from "./style";
import {AiOutlineMenu} from "react-icons/ai";
import Sider from "../../Components/Sider/Sider";


function Cadastro()
{
    
    const navigate = useNavigate();  
    return (

      <Body>

         
        <DivLogo>
          <PageTitle>

            <BotaoLogoEscrita onClick = {() => navigate("/")}> 
            </BotaoLogoEscrita>
            
          </PageTitle>          
        </DivLogo>
        
        <Sider/>         
        
      </Body>
    )
}


export default Cadastro;