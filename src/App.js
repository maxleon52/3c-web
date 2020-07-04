import React from "react";
import { ToastContainer } from "react-toastify";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./hooks/AuthContext";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn />
        <ToastContainer autoClose={3000} />
      </AuthProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
