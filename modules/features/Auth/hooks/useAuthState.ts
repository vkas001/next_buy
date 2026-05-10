import { useState } from "react";

// This will be replaced by real Appwrite auth session check by backend
export function useAuthState() {
  // Change this to true/false to test both states
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return { isLoggedIn, login, logout };
}
