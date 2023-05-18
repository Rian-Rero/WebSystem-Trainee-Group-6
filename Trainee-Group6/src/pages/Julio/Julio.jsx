import { useNavigate } from "react-router-dom";
import { Arroz } from "./style";
import Sider from "../../Components/Sider/Sider";
import Sidebar from "../../Components/Sidebar/sidebar";
import SidebarItem from "../../Components/SidebarItem/SidebarItem";



function Julio()
{
    const navigate = useNavigate(); 
    return(
        <Arroz>
            
              <Sider></Sider>
               
        </Arroz>
    )
}

export default Julio;