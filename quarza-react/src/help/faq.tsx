import { useEffect, useState } from "react";
import useFetch from "../useFetch";

interface ApiResponse {
    test: string;
  }

const Faq = () => {
  const { data, pending, error } = useFetch<ApiResponse>("https://api.quarza.online/test");


  return (
    <div className="test">
      {pending ? <p>Loading...</p>
      : error ?  <p>Error: {error.message}</p>
      : data ? <h2>Response: {data.test}</h2> : null}
      <p> currently broken, api returns cors error, even tho laravel accepts * </p>
    </div>
  );
};

export default Faq;
