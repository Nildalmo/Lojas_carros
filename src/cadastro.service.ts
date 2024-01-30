import { api } from "./api";

export const register = async (values:any ) => {
  const { data } = await api.post("/register", values);

  return data
};
