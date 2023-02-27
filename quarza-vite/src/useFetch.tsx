import { useState, useEffect } from "react";

interface ApiResponse<T> {
    data: T | null;
    pending: boolean;
    error: Error | null;
  }

  function useFetch<T>(url: string): ApiResponse<T> {
    const [data, setData] = useState<T | null>(null);
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      setPending(true);
      fetch(url)
        .then((response) => response.json())
        .then((data: T) => {
          setData(data);
          setPending(false);
        })
        .catch((error: Error) => {
          setError(error);
          setPending(false);
        });
    }, [url]);

    return { data, pending, error };
  }

export default useFetch
