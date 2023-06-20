import { Body, Div2, Tabela } from "./style";
import { useEffect, useState } from "react";
import { Space, Table } from "antd";
import api from "../../services/api";
import RingLoader from "react-spinners/RingLoader";
import Tabelaaa from "../../Components/Tabela/Tabelaaa";

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

function Julio() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const [sessoes, setSessoes] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const getSessoes = async () => {
    try {
      setCarregando(true);
      const res = await api.get("/sessoes");
      setSessoes(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    } finally {
      setCarregando(false);
    }
  };
  useEffect(() => {
    getSessoes();
  }, []);
  if (carregando)
    return (
      <Div2>
        {loading ? (
          <RingLoader
            color={"#36d7b7"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <h1>Carregando... </h1>
        )}
      </Div2>
    );

  return (
    <Body>
      {" "}
      <Tabelaaa />
    </Body>
  );
}

export default Julio;
