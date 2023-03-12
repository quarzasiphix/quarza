import { useState, useEffect } from "react";

export interface ApiResponse<T> {
  data: T | null;
  pending: boolean;
  error: ApiError | null;
  refetch: () => void;
}

interface ApiError extends Error {
  status: number;
  data?: any;
}

interface FetchOptions {
  method?: string;
  body?: any;
}

function useFetch<T>(
  url: string,
  options: FetchOptions = {}
): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<ApiError | null>(null);
  const [pending, setPending] = useState<boolean>(false);

  const { method = "GET", body } = options;

  const fetchData = async () => {
    try {
      setPending(true);
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : undefined
      });
      const data = await response.json();
      setData(data);
      setPending(false);
    } catch (error: any) {
      const apiError: ApiError = {
        ...error,
        status: error?.response?.status || 500,
        data: error?.response?.data || null
      };
      setError(apiError);
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method, body]);

  const refetch = () => {
    fetchData();
  };

  return { data, pending, error, refetch };
}

export default useFetch;
