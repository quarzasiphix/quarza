import { useState, useEffect } from 'react';
import useFetch from '../useFetch';
import './styles/Users.css';

interface User {
  id: number;
  name: string;
}

const useUsers = (url: string) => {
    console.log("fetching users")
    const { data, pending, error } = useFetch(url);
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        if (data) {
            setUsers(data);
        }
    }, [data]);
    return { users, pending, error };
};

const Users = () => {
    const { users, pending, error } = useUsers('https://api.quarza.online/users');

    if (pending || error) {
        return (
        <div className="info">
            <p>{pending ? 'Loading...' : error}</p>
        </div>
        );
    }

    return (
        <div className="users">
        {users.map((user) => (
            <div key={user.id}>
            <h2>{user.name}</h2>
            </div>
        ))}
        </div>
    );
};

export default Users;
