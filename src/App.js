import React from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
