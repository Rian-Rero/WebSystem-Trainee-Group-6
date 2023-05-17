import styled from "styled-components";
import PoppinsB from "../../font/Poppins-Black.ttf";


export const Coluna = styled.div`
    display: flex;
    flex-direction: column;      
    width: 50%;
   
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
`
export const Pagina = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
`

export const Imagem = styled.image`
       

`
export const Body = styled.div`
    background-color: #2F2E6F;
    
    height: 100vh;
    @media screen and (max-width: 1330px)
    {
       
    }
    @media screen and (max-width: 1064)
    {
       
    }
    @media screen and (max-width: 860) 
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
    width: 245px;
   
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
export const Coluna2 = styled.div`
    display: flex;      
    flex-direction: column;
    width: 50%;    
    height: 100%;   
    justify-content: center;
`
export const Nome = styled.input`
    text-align: center;      
    box-sizing: border-box;
    width: 100%;
    height: 58px;
    background: #9998C5;
    border: solid 2px #09082F;
   
      
  
` 
export const Cargo = styled.input`
    border: solid 2px #09082F;       
    text-align: center;      
    box-sizing: border-box;
    width: 67%;
    height: 58px;
    background: #9998C5;
    border: solid #09082F;
   
`
export const Numero = styled.input`
    text-align: center;      
    box-sizing: border-box;
    width: 33%;
    height: 58px;
    background: #9998C5;
    border: 2px solid #09082F;
    
`
export const  Email = styled.input`
    text-align: center;      
    box-sizing: border-box;
    width: 100%;
    height: 58px;
    background: #9998C5;
    border: 2px solid #09082F;
`
export const Texto = styled.input`
    text-align: center;      
    box-sizing: border-box;
    width: 100%;
    height: 361px;
    background: #9998C5;
    border: 2px solid #09082F;
`
export const Linha2 = styled.div`
    display: flex;
    flex-direction: row;
`
export const Tamanho = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 2px;
`