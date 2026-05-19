import { useState } from "react";

// Hook for home screen state 
export function useHomeScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const refetchAll = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return {
    isLoading,
    refetchAll,
  };
}
