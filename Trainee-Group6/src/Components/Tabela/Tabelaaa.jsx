import { Body, Tabela, DivCarrossel, ImgCarrossel } from "./style";

import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import { Carousel } from "antd";
import { Space, Table } from "antd";
import Carrossel from "../Carrosel/Carrossel";
const columns = [
  {
    title: "Membro",
    dataIndex: "nome",
    key: "nome",
  },

  {
    title: "Cargo",
    dataIndex: "cargo",
    key: "cargo",
  },

  {
    title: "Chegada",
    dataIndex: "chegada",
    key: "chegada",
  },

  {
    title: "Tempo",
    dataIndex: "tempo",
    key: "tempo",
  },

  {
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Sair </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    nome: "João Copelli",
    cargo: "Dev Líder",
    chegada: "12:45",
    tempo: "@timestamp",
  },

  {
    key: "2",
    nome: "João Copelli",
    cargo: "Treinee",
    chegada: "12:45",
    tempo: "@timestamp",
  },

  {
    key: "3",
    nome: "João Copelli",
    cargo: "Consultor de tecnologia",
    chegada: "12:45",
    tempo: "@timestamp",
  },

  {
    key: "4",
    nome: "João Copelli",
    cargo: "Treinee",
    chegada: "12:45",
    tempo: "@timestamp",
  },
];

function Tabelaaa() {
  return (
    <Body>
      {" "}
      <Tabela>
        <Table style={{}} columns={columns} dataSource={data} />
      </Tabela>
    </Body>
  );
}

export default Tabelaaa;
