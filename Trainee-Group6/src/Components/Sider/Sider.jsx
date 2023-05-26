import React, { useState } from "react";
import { Expandir } from "./style";
import BotaoHome from "../BotaoLogin/BotaoHome";
import BotaoPerfil from "../BotaoLogin/BotaoPerfil";
import BotaoLogin from "../BotaoLogin/BotaoLogin";
import BotaoCadastro from "../BotaoLogin/BotaoCadastro";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "../Sidebar/sidebar";

const Sider = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);

  return (
    <Expandir>
      <AiOutlineMenu onClick={showSideBar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Expandir>
  );
};

export default Sider;
