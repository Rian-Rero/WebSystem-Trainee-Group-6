import 
{
    RouterProvider,
    createBrowserRouter, 
    Route,
    createRoutesFromElements
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Perfil from "./pages/Perfil/Perfil";
import Julio from "./pages/Julio/Julio";

const router = createBrowserRouter
(
    createRoutesFromElements
    (

        <Route>
         <Route path="/" element={<Home/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="cadastro" element={<Cadastro/>}/>
         <Route path="perfil" element={<Perfil/>}/>
         <Route path="julio" element={<Julio/>}/>    
        </Route>
    )
)

export default function Routes () 
{
    return <RouterProvider router={router}/>
}