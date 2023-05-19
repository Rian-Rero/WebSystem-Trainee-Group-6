import BotaoHome from "../../Components/BotaoLogin/BotaoHome";
import BotaoLogin from "../../Components/BotaoLogin/BotaoLogin";
import BotaoCadastro from "../../Components/BotaoLogin/BotaoCadastro";
import BotaoPerfil from "../../Components/BotaoLogin/BotaoPerfil";
import BotaoLogoEscrita from "../../Components/BotaoLogin/BotaoLogoEscrita";
import { useNavigate } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import { DivHome, DivLateral, Body, PageTitle, DivLogo, DivLateral2, Imagem, MenuLateral, Lista,
   ItemMenu, Expandir, DivRetangulo, Tabela, TabelaHeader, TabelaLinhaH, TabelaLinhaD, TabelaCelula, Carrosel} from "./style";



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
              <Carrosel  src="" alt="CARROSSEL"></Carrosel>
            </DivRetangulo>

            <Tabela>
              <TabelaLinhaH>
                <TabelaHeader>Nome</TabelaHeader>

                <TabelaHeader>Chegada</TabelaHeader>

                <TabelaHeader>Tempo</TabelaHeader>

                <TabelaHeader>Cargo</TabelaHeader>

              </TabelaLinhaH>

              <TabelaLinhaD>
                <TabelaCelula>João Copelli</TabelaCelula>

                <TabelaCelula>12:45</TabelaCelula>

                <TabelaCelula>TIMER</TabelaCelula>

                <TabelaCelula>Treinee</TabelaCelula>
              </TabelaLinhaD>

              <TabelaLinhaD>
                <TabelaCelula>João Leão</TabelaCelula>

                <TabelaCelula>13:47</TabelaCelula>

                <TabelaCelula>TIMER</TabelaCelula>

                <TabelaCelula>Treinee</TabelaCelula>
              </TabelaLinhaD>

              <TabelaLinhaD>
                <TabelaCelula>Rian Vieira</TabelaCelula>

                <TabelaCelula>9:12</TabelaCelula>

                <TabelaCelula>TIMER</TabelaCelula>

                <TabelaCelula>Treinee</TabelaCelula>
              </TabelaLinhaD>

              <TabelaLinhaD>
                <TabelaCelula>Kauan Silva</TabelaCelula>

                <TabelaCelula>10:21</TabelaCelula>

                <TabelaCelula>TIMER</TabelaCelula>

                <TabelaCelula>Treinee</TabelaCelula>
              </TabelaLinhaD>

              <TabelaLinhaD>
                <TabelaCelula>Arthur Jorge</TabelaCelula>

                <TabelaCelula>11:34</TabelaCelula>

                <TabelaCelula>TIMER</TabelaCelula>

                <TabelaCelula>Assessor</TabelaCelula>
              </TabelaLinhaD>
            </Tabela>


        </DivHome>
      </Body>
    )
}


export default Home;