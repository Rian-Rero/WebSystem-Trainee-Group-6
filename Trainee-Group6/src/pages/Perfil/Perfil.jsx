import BotaoHome from "../../Components/BotaoLogin/BotaoHome";
import BotaoLogin from "../../Components/BotaoLogin/BotaoLogin";
import BotaoCadastro from "../../Components/BotaoLogin/BotaoCadastro";
import BotaoPerfil from "../../Components/BotaoLogin/BotaoPerfil";
import BotaoEditProfile from "../../Components/BotaoLogin/BotaoEditProfile";
import BotaoLogoEscrita from "../../Components/BotaoLogin/BotaoLogoEscrita";
import { useNavigate } from "react-router-dom";
import {Body, PageTitle, DivLogo, Imagem, MenuLateral, Lista, ItemMenu, Expandir, Coluna2, Nome, Cargo, Numero, Email, Texto,
Linha2, Coluna, Pagina, Tamanho, Logo } from "./style";
import PerfilIcon from "../../Icons/editProfile.svg";
import {AiOutlineMenu} from "react-icons/ai";
import {CgProfile} from "react-icons/cg"
import  "./script.js";
import Sider from "../../Components/Sider/Sider";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";


function Perfil()
{
      
  const navigate = useNavigate();  
  return (

    <Body>

      <Logo>   
        <LogoHeader onClick = {() => navigate("/")}/>
      </Logo>
        

      <Sider/>

              
          
        <Pagina>         

          <Coluna>  

            <Imagem>
              <CgProfile/>
            </Imagem>

            <BotaoEditProfile onClick = {() => navigate("/perfil")}>
            </BotaoEditProfile>

          </Coluna>
      
          <Coluna2> 
            <Tamanho>

              <Nome placeholder="Lara Nascimento">                          
              </Nome>

              <Linha2>

                <Cargo placeholder="Diretora de Produtos">                            
                </Cargo>

                <Numero placeholder="3300">
                </Numero>
                        
              </Linha2>

              <Email placeholder="lara@webtech.com.br">                            
              </Email>

              <Texto placeholder="Sobre mim:">                            
              </Texto>
            </Tamanho>

          </Coluna2>
        </Pagina> 
      

              
            
        
      </Body>
    )
}


export default Perfil;