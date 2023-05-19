import styled from "styled-components";
import PoppinsB from "../../font/Poppins-Bold.ttf";

export const DivHome = styled.div`
    position: relative;
    background-color: #2F2E6F;
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
    background-color: #09082F;
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


export const DivRetangulo = styled.div`
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 65px;
    margin-left: 95px;
    margin-top: 50px;

    display: flexbox;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 350px;
    background: #9998C5;
    color: #2F2E6F;

    border: solid 1px #FFFFFF;

`
export const Carrosel = styled.img`
    border-radius: 15px;
    border: solid 1px #FFFFFF;
    width: 400px;
    height: 300px;

`

export const Tabela = styled.table`
    width: 90%;
    height: 900px;
    margin-top: 100px;
    margin-left: 95px;
    background-color: #9998C5;
    
`
export const TabelaHeader = styled.th`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #2F2E6F;
    line-height: 80px;
    margin-left: 100px;
    margin-right: 100px;

    
    
    
       
    
   

`
export const TabelaLinhaH = styled.tr` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid  #2F2E6F;

    
    


`
export const TabelaLinhaD = styled.tr` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid  #2F2E6F;

`
export const TabelaCelula = styled.td` 
    font-style: normal;
    font-weight: 250;
    font-size: 20px;
    color: #2F2E6F;
    line-height: 130px;
    margin-left: 100px;
    margin-right: 100px;
    

`


