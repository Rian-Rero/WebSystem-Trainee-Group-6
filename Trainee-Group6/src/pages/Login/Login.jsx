import { useNavigate } from "react-router-dom";
import BotaoEntrar from "../../Components/BotaoLogin/BotaoEntrar";
import RingLoader from "react-spinners/RingLoader";
import {
  Body,
  Imagem,
  Coluna2,
  Coluna,
  Senha,
  Email,
  Pagina,
  Tamanho,
  Imagem2,
  Form,
  Labell,
  Div1,
  Div2,
} from "./style";
import { CgProfile } from "react-icons/cg";
import LogoBranca from "../../Icons/LogoBranca.png";
import { useState, useEffect } from "react";
import api from "../../services/api";
import useAuthStore from "../../stores/auth";

function Login() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const setToken = useAuthStore((state) => state.setToken);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setCarregando(true);
      const res = await api.post("/login", { email, senha });
      const { token } = res.data;

      setToken(token);
      navigate("/");
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    } finally {
      setCarregando(false);
    }
  };

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
      <Pagina>
        <Coluna>
          <Imagem>
            <img src={LogoBranca} alt="Logo WebTech" />
          </Imagem>
        </Coluna>
        <Coluna2>
          <Imagem2>
            <CgProfile />
          </Imagem2>
          <Tamanho>
            <Form onSubmit={handleSubmit}>
              <Div1>
                <Labell htmlFor="email"> E-Mail: </Labell>
                <Email
                  type="email"
                  id="email"
                  placeholder="Digite seu E-Mail:"
                  required
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></Email>
              </Div1>
              <Div1>
                <Labell htmlFor="senha"> Senha: </Labell>
                <Senha
                  type="password"
                  id="senha"
                  required
                  name="senha"
                  placeholder="Digite sua Senha:"
                  onChange={(e) => setSenha(e.target.value)}
                ></Senha>
              </Div1>
              <BotaoEntrar type="submit"> </BotaoEntrar>{" "}
            </Form>
          </Tamanho>
        </Coluna2>
      </Pagina>
    </Body>
  );
}

export default Login;
