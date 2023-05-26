import { createGlobalStyle } from "styled-components";
import PoppinsB from "../font/Poppins-Black.ttf";

export default createGlobalStyle`
*{
   
    box-sizing: border-box;
    
    
   
}
body{
    margin: 0;
    background-color: #0a0a30;
    @font-face {
        font-family:"Poppins";
        src: url (${PoppinsB}) format('truetype');
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        
    }
    
    html,
    body,
    #root{
        height: 100%;
    }
    html{
        scroll-behavior: smooth;
    @media (prefers-reduced-motion: reduce) {
        scroll-behavior: auto;
        
    } }

}
`;
