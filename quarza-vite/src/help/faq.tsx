import { useEffect, useState } from "react";
import useFetch from "../useFetch";

interface ApiResponse {
    test: string;
  }

const Faq = () => {
    const [res, setRes] = useState<ApiResponse>({ test: "" });
  const { data, pending, error } = useFetch<ApiResponse>("https://api.quarza.online/test");

  useEffect(() => {
    if (data) {
      setRes(data);
    }
  }, [data]);

  return (
    <div className="test">
      {pending ? <p>Loading...</p> : error ? <p>Error: {error.message}</p> : data ? <h2>Response: {data.test}</h2> : null}
    </div>
  );
};

export default Faq;
