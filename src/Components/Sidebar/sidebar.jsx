import React from "react";
import { Container, Content } from "./style";
import { BiUserPlus } from "react-icons/bi";
import { RiHome5Line } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import SidebarItem from "../SidebarItem/SidebarItem";
import { AiOutlineMenu, AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { GoMegaphone } from "react-icons/go";
import useAuthStore from "../../stores/auth";

const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  const closeSidebar = () => {
    active(false);
  };
  const usuario = useAuthStore((state) => state.usuario);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  return (
    <Container sidebar={active}>
      <AiOutlineMenu onClick={closeSidebar} />
      <Content>
        {!usuario && (
          <>
            <SidebarItem
              Icon={IoMdLogIn}
              Text="Login"
              onClick={() => navigate("/login")}
            />
            <SidebarItem
              Icon={BiUserPlus}
              Text="Cadastro"
              onClick={() => navigate("/cadastro")}
            />
          </>
        )}
        {!!usuario && (
          <>
            <SidebarItem
              Icon={RiHome5Line}
              Text="Home"
              onClick={() => navigate("/")}
            />
            <SidebarItem
              Icon={CgProfile}
              Text="Perfil"
              onClick={() => navigate("/perfil")}
            />
          </>
        )}
        <SidebarItem
          Icon={GoMegaphone}
          Text="Ouvidoria"
          onClick={() => navigate("/ouvidoria")}
        />
        {!!usuario && (
          <>
            <h2>Seja bem-vindo(a) {usuario.nome}</h2>
            <SidebarItem
              Icon={AiOutlineLogout}
              Text="Sair"
              onClick={clearAuth}
            />
          </>
        )}
      </Content>
    </Container>
  );
};

export default Sidebar;
