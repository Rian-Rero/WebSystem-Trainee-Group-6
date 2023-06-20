import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Routes />
  </React.StrictMode>
);
