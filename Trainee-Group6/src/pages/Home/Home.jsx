import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Body, Pagina, DivCarrossel, ImgCarrossel, Size } from "./style";
import Carrossel from "../../Components/Carrosel/Carrossel";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import { Carousel } from "antd";
import { Space, Table } from "antd";
import Tabelaaa from "../../Components/Tabela/Tabelaaa";

function Home() {
  return (
    <Body>
      <Pagina>
        <Size>
          <Carrossel />
        </Size>
        <Tabelaaa />
      </Pagina>
    </Body>
  );
}

export default Home;
