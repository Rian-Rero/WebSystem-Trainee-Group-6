import { createGlobalStyle} from 'styled-components'
import PoppinsB from "../font/Poppins-Black.ttf";

export default createGlobalStyle`
*{
   
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
