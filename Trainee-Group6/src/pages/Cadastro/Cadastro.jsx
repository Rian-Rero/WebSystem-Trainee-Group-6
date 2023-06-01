import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Body,
  Imagem,
  Coluna2,
  Put,
  Form,
  Texto,
  Coluna,
  DivGeral,
  Dados,
  Caixa,
  Labell,
} from "./style";
import { CgProfile } from "react-icons/cg";
import LogoBranca from "../../Icons/LogoBranca.png";
import api from "../../services/api";
import useAuthStore from "../../stores/auth";
import BotaoCadastrar from "../../Components/BotaoLogin/BotaoCadastrar";

function Cadastro() {
  const navigate = useNavigate();
  const setUsuario = useAuthStore((state) => state.setUsuario);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("A senha e a confirmação de senha não correspondem.");
      return;
    }

    try {
      setCarregando(true);
      const res = await api.post("/usuarios", {
        email,
        nome,
        cargo,
        sobre,
        senha,
      });

      navigate("/login");
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    } finally {
      setCarregando(false);
    }
  };

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [cargo, setCargo] = useState("");
  const [sobre, setSobre] = useState("");
  const [carregando, setCarregando] = useState(false);

  return (
    <Body>
      <DivGeral>
        <Coluna>
          <Imagem>
            <img src={LogoBranca} alt="" />
          </Imagem>

          <Caixa>
            <Texto>
              Vamos realizar o seu primeiro acesso, preencha seus dados e siga
              as instruções:
            </Texto>
          </Caixa>
        </Coluna>

        <Coluna2>
          <Imagem>
            <CgProfile />
          </Imagem>

          <Form onSubmit={handleSubmit}>
            <Dados>
              <Labell htmlFor="nome"> Nome: </Labell>
              <Put
                type="text"
                id="nome"
                placeholder="Digite Seu nome Completo:"
                required
                name="nome"
                onChange={(e) => setNome(e.target.value)}
              />

              <Labell htmlFor="email"> E-mail: </Labell>
              <Put
                type="email"
                id="email"
                placeholder="Digite Seu Email:"
                required
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Labell htmlFor="senha"> Senha: </Labell>
              <Put
                type="password"
                id="senha"
                placeholder="Digite sua Senha:"
                required
                name="senha"
                onChange={(e) => setSenha(e.target.value)}
              />

              <Labell htmlFor="confirmarSenha"> Confirmar Senha: </Labell>
              <Put
                type="password"
                id="confirmarSenha"
                placeholder="Confirme sua Senha:"
                required
                name="confirmarSenha"
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />

              <Labell htmlFor="Cargo"> Cargo: </Labell>
              <Put
                type="text"
                id="cargo"
                placeholder="Digite Seu nome Cargo:"
                required
                name="cargo"
                onChange={(e) => setCargo(e.target.value)}
              />

              <Labell htmlFor="sobre"> Status: </Labell>
              <Put
                type="text"
                id="status"
                placeholder="Digite Seu Status:"
                required
                name="sobre"
                onChange={(e) => setSobre(e.target.value)}
              />

              <BotaoCadastrar type="submit" />
            </Dados>
          </Form>
        </Coluna2>
      </DivGeral>
    </Body>
  );
}

export default Cadastro;
