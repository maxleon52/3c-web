import React, { useCallback, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./hooks/AuthContext";

import Layout from "./components/Layout";
import Routes from "./routes";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [user, setUser] = useState("");

  // useEffect(() => {
  //   async function verifyExistUser() {
  //     await setExistUser(localStorage.getItem("@3c:user"));
  //   }
  //   verifyExistUser();
  // }, [existUser]);

  const existUser = useCallback(() => {
    const localUser = localStorage.getItem("@3c:user");

    setUser(localUser);
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        {user !== "" ? <Layout /> : <Routes />}
        {/* <Layout /> */}

        <ToastContainer autoClose={5000} />
        <GlobalStyles />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
