import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./hooks/AuthContext";
import Routes from "./routes";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyles />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
