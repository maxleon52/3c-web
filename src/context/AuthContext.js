import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // a função anonima dentro do state, só sera executado caso o user faço refresh no app
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@3c:token");
    const user = localStorage.getItem("@3c:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/session", { email, password });

    const { token, user } = response.data;
    localStorage.setItem("@3c:token", token);
    localStorage.setItem("@3c:user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
