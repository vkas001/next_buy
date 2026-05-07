import { useState } from "react";

// Hook for home screen state - backend will add API calls here later
export function useHomeScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const refetchAll = async () => {
    // TODO: backend will implement API calls here
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return {
    isLoading,
    refetchAll,
  };
}
