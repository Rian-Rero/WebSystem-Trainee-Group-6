import { createGlobalStyle} from 'styled-components'
import PoppinsB from "../font/Poppins-Black.ttf";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
   
}
body{
    margin: 0;
    background-color: #2F2E6F;
    @font-face {
        font-family:"Poppins";
        src: url (${PoppinsB}) format('truetype');
    }
   
}
`
