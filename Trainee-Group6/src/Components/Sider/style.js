import styled from "styled-components";

export const MenuLateral = styled.nav`
    position: fixed;
    top: 0;
    height: 100vh;
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
    margin-left: 10px;
   
`