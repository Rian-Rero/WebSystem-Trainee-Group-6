import {
  DivLogo,
  PageTitle,
  BotaoLogoEscrita,
  DivLogo2,
  PageTitle2,
  BotaoLogoEscrita2,
  Body,
} from "./style";
import GroupLogoEscrita from "../.././Icons/Grouplogo.svg";
import Logo from "../.././Icons/logo.svg";
import Sider from "../Sider/Sider";

function LogoHeader(props) {
  return (
    <Body>
      <DivLogo>
        <Sider />
        <PageTitle>
          <BotaoLogoEscrita onClick={props.onClick}>
            <img src={GroupLogoEscrita} alt="Ícone do DashBoard" />
          </BotaoLogoEscrita>
        </PageTitle>
      </DivLogo>

      <DivLogo2>
        <Sider />
        <PageTitle2>
          <BotaoLogoEscrita2 onClick={props.onClick}>
            <img src={Logo} alt="Ícone do DashBoard" />
          </BotaoLogoEscrita2>
        </PageTitle2>
      </DivLogo2>
    </Body>
  );
}

export default LogoHeader;
