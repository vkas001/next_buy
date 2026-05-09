// TODO: backend will implement Appwrite auth calls here
export const useAuth = () => {
  const login = async (email: string, password: string) => {};
  const register = async (name: string, email: string, password: string) => {};
  const logout = async () => {};
  return { login, register, logout };
};
