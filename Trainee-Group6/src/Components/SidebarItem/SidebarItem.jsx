import React from 'react'
import { Container, Button } from './style'
import { useNavigate } from "react-router-dom";





const SidebarItem = ({Icon, Text, onClick }) => {
  const navigate = useNavigate(); 
  return (
    <Container>
      <Button onClick={onClick}>
      <Icon/>      
      {Text}
      </Button>
    </Container>
  )
}

export default SidebarItem