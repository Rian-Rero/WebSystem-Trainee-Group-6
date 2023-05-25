import { createGlobalStyle } from "styled-components";
import PoppinsB from "../font/Poppins-Black.ttf";

export default createGlobalStyle`
*{
   
    box-sizing: border-box;
    
    
   
}
body{
    margin: 0;
    background-color: #0A0A30;
    @font-face {
        font-family:"Poppins";
        src: url (${PoppinsB}) format('truetype');
        
    }
    
}
`;
