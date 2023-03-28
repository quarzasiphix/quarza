import { useState } from 'react';
import './styles/home.css';
import useFetch from '../useFetch';
import HelpLayout from '../layout/HelpLayout';
import { NavLink, Outlet } from 'react-router-dom'

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
            <NavLink to="./help">
                view faq
            </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomePage;
