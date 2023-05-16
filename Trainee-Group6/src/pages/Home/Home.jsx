import BotaoHome from "../../Components/BotaoLogin/BotaoHome";
import BotaoLogin from "../../Components/BotaoLogin/BotaoLogin";
import BotaoCadastro from "../../Components/BotaoLogin/BotaoCadastro";
import BotaoPerfil from "../../Components/BotaoLogin/BotaoPerfil";
import BotaoLogoEscrita from "../../Components/BotaoLogin/BotaoLogoEscrita";
import { useNavigate } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import { DivHome, DivLateral, Body, PageTitle, DivLogo, DivLateral2, Imagem, MenuLateral, Lista, ItemMenu, Expandir, DivRetangulo } from "./style";


function Home()
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

            <DivRetangulo> 
              Membros | Horário de Início: | Tempo: | Cargo:
            </DivRetangulo>
        </DivHome>
      </Body>
    )
}


export default Home;