import { Div1, Labell, Tamanho, Valor, Put, Form } from "./style";
import { useState } from "react";
import api from "../../services/api";
import BotaoSalvar from "../BotaoLogin/BotaoSalvar";
import useAuthStore from "../../stores/auth";

export default function Usuario({ usuario }) {
  const idUsuario = useAuthStore((state) => state.usuario?._id);
  const setUsuario = useAuthStore((state) => state.setUsuario);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setCarregando(true);
      const res = await api.put(`/usuarios/${idUsuario}`, {
        email,
        nome,
        cargo,
        sobre,
      });
      setUsuario(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    } finally {
      setCarregando(false);
    }
  };

  const [email, setEmail] = useState(usuario.email);
  const [nome, setNome] = useState(usuario.nome);
  const [cargo, setCargo] = useState(usuario.cargo);
  const [sobre, setSobre] = useState(usuario.sobre);
  const [carregando, setCarregando] = useState(false);

  return (
    <Tamanho>
      <Form onSubmit={handleSubmit}>
        <Div1>
          <Labell htmlFor="email"> E-Mail: </Labell>
          <Put
            type="email"
            id="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Put>
        </Div1>

        <Div1>
          <Labell htmlFor="nome"> Nome: </Labell>
          <Put
            type="text"
            id="nome"
            required
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></Put>
        </Div1>
        <Div1>
          <Labell htmlFor="cargo"> Cargo: </Labell>
          <Put
            type="text"
            id="cargo"
            required
            name="cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          ></Put>
        </Div1>
        <Div1>
          <Labell htmlFor="sobre"> Sobre: </Labell>
          <Put
            type="text"
            id="sobre"
            required
            name="sobre"
            value={sobre}
            onChange={(e) => setSobre(e.target.value)}
          ></Put>
        </Div1>
        <BotaoSalvar type="submit"> </BotaoSalvar>
      </Form>
    </Tamanho>
  );
}
