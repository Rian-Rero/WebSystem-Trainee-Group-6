import BotaoHome from "../../Components/BotaoLogin/BotaoHome";
import BotaoLogin from "../../Components/BotaoLogin/BotaoLogin";
import BotaoCadastro from "../../Components/BotaoLogin/BotaoCadastro";
import BotaoPerfil from "../../Components/BotaoLogin/BotaoPerfil";
import BotaoLogoEscrita from "../../Components/BotaoLogin/BotaoLogoEscrita";
import { useNavigate } from "react-router-dom";
import { DivHome, DivLateral, Body, PageTitle, DivLogo, DivLateral2, DivRetangulo } from "./style";


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
                     
                <BotaoHome onClick = {() => navigate("/")}>
                </BotaoHome> <br />
                
                 <BotaoPerfil onClick = {() => navigate("/perfil")}>
                 </BotaoPerfil> <br />
                 
                <DivLateral2>
                <BotaoLogin onClick = {() => navigate("/login")}>
                 </BotaoLogin> <br />

                 <BotaoCadastro onClick = {() => navigate("/cadastro")}>                   
                 </BotaoCadastro> </DivLateral2>
            </DivLateral>
            <DivRetangulo> 
              Membros | Horário de Início: | Tempo: | Cargo:
            </DivRetangulo>
        </DivHome>
      </Body>
    )
}


export default Home;