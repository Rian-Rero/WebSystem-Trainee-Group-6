import { useNavigate } from "react-router-dom";
import { Arroz } from "./style";
import Sider from "../../Components/Sider/Sider";

function Julio()
{
    const navigate = useNavigate();
    return(
        <Arroz>
            <Sider/>
        </Arroz>
    )
}

export default Julio;