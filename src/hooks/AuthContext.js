import React, { createContext, useCallback, useState, useContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  // a função anônima dentro do state, só sera executado caso o user faço refresh no app
  // esse data é o dados do usuário
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@3c:token");
    const user = localStorage.getItem("@3c:user");

    if (token && user) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  // Metodo para fazer login
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/session", { email, password });
    console.log(response);

    const { token, user } = response.data;
    localStorage.setItem("@3c:token", token);
    localStorage.setItem("@3c:user", JSON.stringify(user));
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setData({ token, user });
    toast.success(`Bem-vindo(a) ${user.name}`);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@3c:token");
    localStorage.removeItem("@3c:user");

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Metodo que verifica se o provider esta setado no APP
function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "Verifique se o provider está por volda dos componentes no arquivo APP"
    );
  }

  return context;
}

export { AuthProvider, useAuth };
