import BotaoHome from "../../Components/BotaoLogin/BotaoHome";
import BotaoLogin from "../../Components/BotaoLogin/BotaoLogin";
import BotaoCadastro from "../../Components/BotaoLogin/BotaoCadastro";
import BotaoPerfil from "../../Components/BotaoLogin/BotaoPerfil";
import BotaoEditProfile from "../../Components/BotaoLogin/BotaoEditProfile";
import BotaoLogoEscrita from "../../Components/BotaoLogin/BotaoLogoEscrita";
import { useNavigate } from "react-router-dom";
import { DivHome, DivLateral, Body, PageTitle, DivLogo, DivLateral2, Imagem, MenuLateral, Lista, ItemMenu, Expandir, DivNomes, Nome, Cargo, Numero, Email, Texto,
Linha2 } from "./style";
import PerfilIcon from "../../Icons/editProfile.svg";
import {AiOutlineMenu} from "react-icons/ai";
import  "./script.js";


function Perfil()
{
    
    const navigate = useNavigate();  
    return (

      <Body>
        <DivHome>  
            <DivLogo>
            <PageTitle>

                <BotaoLogoEscrita onClick = {() => navigate("/")}> </BotaoLogoEscrita>
                
                </PageTitle>
            </DivLogo>
            <DivLateral>    

        <MenuLateral>

              <Expandir>
                  <AiOutlineMenu style={{width: 100}}>
                  </AiOutlineMenu>
              </Expandir>

              <Lista>
               
                      <ItemMenu>
                        <BotaoHome onClick = {() => navigate("/")}>
                        </BotaoHome> <br />
                      </ItemMenu>

                      <ItemMenu>
                        <BotaoPerfil onClick = {() => navigate("/perfil")}>
                        </BotaoPerfil> <br />
                      </ItemMenu>
                      
                      <DivLateral2>

                      <ItemMenu>  
                        <BotaoLogin onClick = {() => navigate("/login")}>
                        </BotaoLogin> <br />
                      </ItemMenu> 

                      <ItemMenu>
                      <BotaoCadastro onClick = {() => navigate("/cadastro")}>   
                     </BotaoCadastro> 
                     </ItemMenu>
                     
                     </DivLateral2>
              </Lista>
        </MenuLateral>  

            </DivLateral>
         
             

                      <Imagem>
                        <img src={PerfilIcon} alt="Ícone do Perfil" />
                      </Imagem>
                      <DivNomes>
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

                      </DivNomes>
                      <BotaoEditProfile onClick = {() => navigate("/perfil")}>
                      </BotaoEditProfile>
                 
              
            
        </DivHome>
      </Body>
    )
}


export default Perfil;