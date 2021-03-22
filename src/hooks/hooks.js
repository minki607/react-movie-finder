import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (endpoint) => {
    setIsLoading(true);
    try {
      const res = await fetch(url + endpoint);
      const json = await res.json();
      setResponse(json);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [response, error, isLoading, fetchData];
};
