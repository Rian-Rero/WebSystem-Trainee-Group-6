import { useNavigate } from "react-router-dom";
import { Body, Imagem, Coluna2, Coluna, Pagina, Size, Div2 } from "./style";
import { CgProfile } from "react-icons/cg";
import "./script.js";
import useAuthStore from "../../stores/auth";
import Edit from "../../Components/Edit/Edit";

import RingLoader from "react-spinners/RingLoader";
import { useState, useEffect } from "react";

function EditPerfil() {
  const [carregando, setCarregando] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const navigate = useNavigate();
  const usuario = useAuthStore((state) => state.usuario);
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
            <CgProfile />
          </Imagem>
          <Size></Size>
        </Coluna>

        <Coluna2>
          <Edit usuario={usuario} />
        </Coluna2>
      </Pagina>
    </Body>
  );
}

export default EditPerfil;
