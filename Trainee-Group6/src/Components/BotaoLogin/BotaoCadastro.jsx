import {StyleBotaoCadastro} from "./style";
import cadastroIcon from "../.././Icons/cadastro.svg";

function BotaoCadastro(props) 
{
     
    return (
        <StyleBotaoCadastro onClick={props.onClick}>
           <img src= {cadastroIcon} alt="Ícone da Cadastro" style={{width: 49,}} />Cadastro
        </StyleBotaoCadastro>
    )
}

export default BotaoCadastro;

