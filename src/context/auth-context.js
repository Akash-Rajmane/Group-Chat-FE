import { createContext } from "react";

export const AuthContext = createContext({
  token: null,
  tokenExpiration: null,
  userId: null,
  login: () => {},
  logout: () => {},
});