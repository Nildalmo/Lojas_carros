import { api } from "./api";

export const login = async (values: any) => {
  const { data } = await api.post("/login", values);

  return data
};
