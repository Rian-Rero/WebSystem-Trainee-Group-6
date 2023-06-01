import { Body, Pagina, Size, Div2 } from "./style";
import Carrossel from "../../Components/Carrosel/Carrossel";
import Tabelaaa from "../../Components/Tabela/Tabelaaa";
import { useEffect, useState } from "react";
import api from "../../services/api";
import RingLoader from "react-spinners/RingLoader";

function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const getUsuarios = async () => {
    try {
      setCarregando(true);
      const res = await api.get("/usuarios");
      setUsuarios(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    } finally {
      setCarregando(false);
    }
  };
  useEffect(() => {
    getUsuarios();
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
