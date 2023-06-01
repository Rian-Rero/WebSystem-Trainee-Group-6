import React, { useEffect, useState } from "react";
import moment from "moment";
import api from "../../services/api";
import RingLoader from "react-spinners/RingLoader";
import { Space } from "antd";
import {
  Botao,
  Div2,
  TabelaContainer,
  StyledTable,
  TabelaWrapper,
  Div3,
  Body,
} from "./style";
import useAuthStore from "../../stores/auth";
import { Link, animateScroll as scroll } from "react-scroll";

function Tabelaaa() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosOrganizados, setUsuariosOrganizados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const idUsuario = useAuthStore((state) => state.usuario?._id);
  const [temSessaoAtiva, setTemSessaoAtiva] = useState(false);

  useEffect(() => {
    getSessoes();

    const interval = setInterval(() => {
      getSessoes();
    }, 60000); // 1 minuto em milissegundos

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getSessoes = async () => {
    try {
      setCarregando(true);
      const res = await api.get("/sessoes");
      setUsuarios(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    verificarSessaoAtiva();
  }, [usuarios]);

  const verificarSessaoAtiva = () => {
    const sessaoAtiva = usuarios.find(
      (usuario) => usuario.id_usuario._id === idUsuario
    );
    setTemSessaoAtiva(!!sessaoAtiva);
    organizandoUsuarios();
  };

  const handleExcluirSessao = async () => {
    try {
      await api.delete(`/sessoes/${idUsuario}`);
      getSessoes();
      scroll.scrollTo(tabelaWrapperOffset());
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };

  const handleCriarSessao = async () => {
    try {
      await api.post("/sessoes", { id_usuario: idUsuario });
      getSessoes();
      scroll.scrollTo(tabelaWrapperOffset());
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };

  const tabelaWrapperOffset = () => {
    const tabelaWrapperElement = document.getElementById("tabela-wrapper");
    return tabelaWrapperElement.offsetTop;
  };

  if (carregando) {
    return (
      <Div2>
        <RingLoader
          color={"#36d7b7"}
          loading={carregando}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Div2>
    );
  }

  const columns = [
    {
      title: "Nome",
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
  ];

  function organizandoUsuarios() {
    const usuariosOrganizados = usuarios.map((usuario, index) => {
      const chegada = moment(usuario.createdAt);
      const agora = moment();
      const diffMinutes = agora.diff(chegada, "minutes");
      const horas = Math.floor(diffMinutes / 60);
      const minutos = diffMinutes % 60;

      return {
        nome: usuario.id_usuario.nome,
        cargo: usuario.id_usuario.cargo,
        chegada: chegada.format("DD/MM  H:mm"),
        tempo: `${horas} horas e ${minutos}  minutos`,
        key: usuario._id,
      };
    });

    setUsuariosOrganizados(usuariosOrganizados);
  }

  return (
    <Body>
      <TabelaWrapper id="tabela-wrapper">
        <Div3>
          <h1>Ações:</h1>
          {temSessaoAtiva ? (
            <Botao onClick={() => handleExcluirSessao()}>Sair</Botao>
          ) : (
            <Botao onClick={() => handleCriarSessao()}>Login</Botao>
          )}
        </Div3>
        <TabelaContainer>
          <StyledTable
            columns={columns}
            dataSource={usuariosOrganizados}
            rowClassName={(record, index) =>
              index === 0 ? "custom-row primeira-linha" : "custom-row"
            }
            pagination={false}
            scroll={{ x: true }}
          />
        </TabelaContainer>
      </TabelaWrapper>
    </Body>
  );
}

export default Tabelaaa;
