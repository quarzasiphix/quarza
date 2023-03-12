import { useState, useEffect } from "react";

export interface ApiResponse<T> {
    data: T | null;
    pending: boolean;
    error: Error | null;
  }

  function useFetch<T>(
    url: string,
    options: { method?: string; body?: any } = {}
  ): ApiResponse<T> {
    const [data, setData] = useState<T | null>(null);
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const { method = "GET", body } = options;

    useEffect(() => {
      setPending(true);
      fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : undefined
      })
        .then((response) => response.json())
        .then((data: T) => {
          setData(data);
          setPending(false);
        })
        .catch((error: Error) => {
          setError(error);
          setPending(false);
        });
    }, [url, method, body]);

    return { data, pending, error}
}

export default useFetch

