import {MenuLateral, Expandir, Lista, ItemMenu, } from "./style";
import BotaoHome from "../BotaoLogin/BotaoHome";
import BotaoPerfil from "../BotaoLogin/BotaoPerfil";
import BotaoLogin from "../BotaoLogin/BotaoLogin";
import BotaoCadastro from "../BotaoLogin/BotaoCadastro";
import {AiOutlineMenu} from "react-icons/ai";

function Sider() 
{
     
    return (
        
        <MenuLateral>

              <Expandir>
                  <AiOutlineMenu>
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
                                            

                      <ItemMenu>  
                        <BotaoLogin onClick = {() => navigate("/login")}>
                        </BotaoLogin> <br />
                      </ItemMenu> 

                      <ItemMenu>
                      <BotaoCadastro onClick = {() => navigate("/cadastro")}>   
                     </BotaoCadastro> 
                     </ItemMenu>                     
                     
              </Lista>
        </MenuLateral> 
    )
}

export default Sider;
