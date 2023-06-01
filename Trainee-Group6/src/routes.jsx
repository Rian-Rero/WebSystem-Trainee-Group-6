import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Perfil from "./pages/Perfil/Perfil";
import Julio from "./pages/Julio/Julio";
import Ouvidoria from "./pages/Ouvidoria/Ouvidoria";
import { AppLayout } from "./Layouts";
import useAuthStore from "./stores/auth";
import EditPerfil from "./pages/EditPerfil/EditPerfil";

function RotasPrivadas() {
  const token = useAuthStore((state) => state.token);

  if (token) return <Outlet />;

  return <Navigate to="/login" replace />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route element={<RotasPrivadas />}>
          <Route path="perfil" element={<Perfil />} />
          <Route path="julio" element={<Julio />} />
          <Route index element={<Home />} />
          <Route path="editperfil" element={<EditPerfil />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />

        <Route path="ouvidoria" element={<Ouvidoria />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
