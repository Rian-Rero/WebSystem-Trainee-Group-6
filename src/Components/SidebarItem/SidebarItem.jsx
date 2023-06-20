import React from "react";
import { Container, Button } from "./style";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ Icon, Text, onClick }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Button type="button" onClick={onClick}>
        <Icon />
        {Text}
      </Button>
    </Container>
  );
};

export default SidebarItem;
