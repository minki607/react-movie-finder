import { useState } from "react";

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const json = await res.json();
      setResponse(json);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  fetchData();

  return { response, error, isLoading };
};
