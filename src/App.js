import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./hooks/AuthContext";

import Layout from "./components/Layout";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout />

        <ToastContainer autoClose={5000} />
        <GlobalStyles />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
