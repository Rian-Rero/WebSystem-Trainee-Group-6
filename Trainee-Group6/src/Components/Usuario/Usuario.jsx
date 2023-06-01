import { Campo, Linha2, Tamanho, Texto, Valor } from "./style";

export default function Usuario({ usuario }) {
  return (
    <Tamanho>
      Nome:
      <Campo placeholder="Lara Nascimento">
        {" "}
        <Valor>{usuario.nome}</Valor>{" "}
      </Campo>
      Cargo:
      <Linha2>
        <Campo placeholder="Diretora de Produtos">
          <Valor>{usuario.cargo}</Valor>{" "}
        </Campo>
      </Linha2>
      Email:
      <Campo placeholder="lara@webtech.com.br">
        <Valor>{usuario.email}</Valor>{" "}
      </Campo>
      Sobre
      <Texto placeholder="Sobre">
        <Valor>{usuario.sobre}</Valor>
      </Texto>
    </Tamanho>
  );
}
