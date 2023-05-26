import { Container, Sob, Sob1, Conta } from "./style";
import { Outlet } from "react-router-dom";
import Sider from "../../Components/Sider/Sider";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import { useNavigate } from "react-router-dom";

export default function AppLayout() {
  const navigate = useNavigate();
  return (
    <Container>
      <Conta>
        <Sob>
          <LogoHeader onClick={() => navigate("/")} />
        </Sob>
      </Conta>
      <Outlet />
    </Container>
  );
}
