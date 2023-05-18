import React from 'react'
import { Container, Content } from './style'
import {BiUserPlus} from "react-icons/bi"
import {RiHome5Line} from "react-icons/ri"
import {IoMdLogIn} from "react-icons/io"
import {CgProfile} from "react-icons/cg"
import SidebarItem from '../SidebarItem/SidebarItem'
import {AiOutlineMenu} from "react-icons/ai";
import { useNavigate } from "react-router-dom";




  
const Sidebar = ({ active }) => {
  const navigate = useNavigate(); 
  const closeSidebar = () => {
    active(false)
  }  
  return (    
    <Container sidebar={active}>
      <AiOutlineMenu onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={RiHome5Line} Text="Home" onClick = {() => navigate("/")}/> 
        <SidebarItem Icon={CgProfile} Text="Perfil" onClick = {() => navigate("/perfil")}/>
        <SidebarItem Icon={IoMdLogIn} Text="Login" onClick = {() => navigate("/login")} />
        <SidebarItem Icon={BiUserPlus} Text="Cadastro" onClick = {() => navigate("/cadastro")}/>
      </Content>
    </Container>
  )
}

export default Sidebar