import BotaoHome from "../../Components/BotaoLogin/BotaoHome";
import BotaoLogin from "../../Components/BotaoLogin/BotaoLogin";
import BotaoCadastro from "../../Components/BotaoLogin/BotaoCadastro";
import BotaoPerfil from "../../Components/BotaoLogin/BotaoPerfil";
import BotaoLogoEscrita from "../../Components/BotaoLogin/BotaoLogoEscrita";
import { useNavigate } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import { DivHome, DivLateral, Body, PageTitle, DivLogo, DivLateral2, Imagem, MenuLateral, Lista,
   ItemMenu, Expandir, Tabela, DivCarrossel,ImgCarrossel} from "./style";
import  img1 from "./imagens/img1.png";
import  img2 from "./imagens/img2.png";
import  img3 from "./imagens/img3.png";
import { Carousel } from 'antd';

import { Space, Table } from 'antd';
const columns = [
  {
    title: 'Membro',
    dataIndex: 'nome',
    key: 'nome',
    
  },
  
  {
    tittle: 'cargo',
    dataIndex: 'cargo',
    key: 'cargo',
    
  },
  
  {
    tittle: 'Chegada',
    dataIndex: 'chegada',
    key: 'chegada',
  },

  {
    title: 'Tempo',
    dataIndex: 'tempo',
    key: 'tempo',
  },

  {
    
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Sair </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    nome: 'João Copelli',
    cargo: 'Dev Líder',
    chegada: '12:45',
    tempo: '@timestamp',
  },

  {
    key: '2',
    nome: 'João Copelli',
    cargo: 'Treinee',
    chegada: '12:45',
    tempo: '@timestamp',
  },

  {
    key: '3',
    nome: 'João Copelli',
    cargo: 'Consultor de tecnologia',
    chegada: '12:45',
    tempo: '@timestamp'
  },

  {
    key: '4',
    nome: 'João Copelli',
    cargo: 'Treinee',
    chegada: '12:45',
    tempo: '@timestamp'
  },

];

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
              <Carousel autoplay>
                <div>
                  <ImgCarrossel src={img1}/>
                </div>

                <div>
                  <ImgCarrossel src={img2}/>
                </div>
                <div>
                  <ImgCarrossel src={img2}/>
                </div>
                <div>
                  <ImgCarrossel src={img3}/>
                </div>
              </Carousel>
               
            
            </DivCarrossel>

            <Tabela>
            
              <Table style={{}}  columns={columns} dataSource={data}/>
            </Tabela>


        </DivHome>
      </Body>
    )
}


export default Home;