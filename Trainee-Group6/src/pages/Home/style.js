import styled from "styled-components";
import PoppinsB from "../../font/Poppins-Bold.ttf";



export const DivHome = styled.div`
    position: relative;
    background-color: #09082F;
    border: none;       

`
export const DivLateral = styled.div`
       

`
export const DivLateral2 = styled.div`
   
`
export const Imagem = styled.image`
    position: absolute;
    top: 235px;
    left: 398px;

`
export const Body = styled.div`
background-color: #2F2E6F;
width: 100%;
height: 100vh;

@media screen and (max-width: 1330px)
{
   
}
@media screen and (max-width: 1064)
{
   
}
@media screen and (max-width: 600) 
{
    
}
`;
export const DivLogo = styled.div`
    background-color: #2F2E6F;
    height: 129px;
    width: 100%;
`

export const PageTitle = styled.image`
    position: absolute; 
    top: 2px;
    right: 1170px;
    left: 270px;
    
    
`
export const MenuLateral = styled.nav`
    position: fixed;
    top: 0;
    height: 1024px;
    background-color: #4F4E8C;
    width: 80px;
    border: none;
    padding: 40px 0 40px 0%;
    overflow: hidden;
    transition: 0.3s;
    &:hover {
    width: 240px;
   
}


`

export const Lista = styled.ul`
   height: 100%;
   list-style-type: none;
`


export const ItemMenu = styled.li`
    padding: 20px 4%;
    display: flex;
    margin-bottom: 20px;
`
export const Expandir = styled.div`
    width: 100%;
    padding-left: 10px;
    color: #FFFFFF;
    font-size: 32px;
    cursor: pointer;
    margin-left: -18px;
   
`


export const DivCarrossel = styled.div`
    margin-left: 16%;
    margin-top: 2%;
    width: 70%;
    background: #09082F; 
    color: #2F2E6F;

`

export const ImgCarrossel = styled.img`
    border-radius: 10px;
    width: 68%;
    height: 52vh;
    margin: 0 auto;  

`

export const Tabela = styled.table`
    width: 90%;    
    margin-top: 100px;
    margin-left: 95px;
    
    
`
