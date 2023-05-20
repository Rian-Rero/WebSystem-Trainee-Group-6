import BotaoHome from "../../Components/BotaoLogin/BotaoHome";
import BotaoLogin from "../../Components/BotaoLogin/BotaoLogin";
import BotaoCadastro from "../../Components/BotaoLogin/BotaoCadastro";
import BotaoPerfil from "../../Components/BotaoLogin/BotaoPerfil";
import BotaoLogoEscrita from "../../Components/BotaoLogin/BotaoLogoEscrita";
import { useNavigate } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import { DivHome, DivLateral, Body, PageTitle, DivLogo, DivLateral2, Imagem, MenuLateral, Lista,
   ItemMenu, Expandir, Tabela, TabelaHeader, TabelaHeader1, TabelaLinhaH, TabelaLinhaD, TabelaCelula1, TabelaCelula, ImgCarrosel, DivCarrossel, DivImgCarrossel, DivBotoes} from "./style";
import  img1 from "./imagens/img1.png";
import  img2 from "./imagens/img2.png";
import  img3 from "./imagens/img3.png";


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
            
            <DivCarrossel>

                <DivBotoes>
                <radio-button></radio-button>
                <radio-button></radio-button>
                <radio-button></radio-button>
                <radio-button></radio-button>

                </DivBotoes>

                <DivImgCarrossel>
                <ImgCarrosel  src={img1} alt="CARROSSEL"/>
                </DivImgCarrossel>

                <DivImgCarrossel>
                <ImgCarrosel  src={img2} alt="CARROSSEL"/>
                </DivImgCarrossel>

                <DivImgCarrossel>
                <ImgCarrosel  src={img3} alt="CARROSSEL"/>
                </DivImgCarrossel>

              



              </DivCarrossel>

            <Tabela>
              <TabelaLinhaH>
                <TabelaHeader1>Nome</TabelaHeader1>

                <TabelaHeader>Chegada</TabelaHeader>

                <TabelaHeader>Tempo</TabelaHeader>

                <TabelaHeader>Cargo</TabelaHeader>

              </TabelaLinhaH>

              <TabelaLinhaD>
                <TabelaCelula1>João Copelli</TabelaCelula1>

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