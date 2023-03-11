import { useState } from 'react';
import './styles/home.css';
import useFetch from '../useFetch';

const HomePage = () => {
  const [res, setRes] = useState<string | null>(null);
  const [pending, setPending] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);

  const handleLogin = () => {
    setPending(true);
    const { data, error, pending } = useFetch('https://api.quarza.online/test');
    setPending(false);
    if (error) setErr(error.message);
    else setRes(data as string);
  };

  return (
    <>
      <div className="home">
        <h1> yaaa its home </h1>
      </div>
      <div className="fafosec">
        <div className="fafo">
          {res && <h1>{res}</h1>}
          {err && <p>Error: {err}</p>}
          {pending && <p>Loading...</p>}
          <button onClick={handleLogin}> test </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
