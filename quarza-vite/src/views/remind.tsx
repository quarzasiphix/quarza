import { useEffect, useState } from "react";
import useFetch, { ApiResponse } from "../useFetch"
import './styles/workout.css'

interface Workout {
    id: number;
    time: number;
    workout: string;
    todo: string;
    created_at: string;
    updated_at: string;
}

interface ApiError extends Error {
    status: number;
    data?: any;
  }

  const Rewind = () => {
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString('pl-PL', {timeZone: 'Europe/Warsaw'}));
    const [data, setData] = useState<ApiResponse<Workout[]> | null>(null);
    const [error, setError] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const url = "https://api.quarza.online/api/workouts"

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('pl-PL', {timeZone: 'Europe/Warsaw'}));
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    const sortedWorkouts = data?.data?.sort((a, b) => a.time - b.time);



    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!data) {
        return null;
    }

    return (<>
        <div className="secs">
            <div className="info">
                <h3> hourly exercise reminder </h3>
                <div className="time">
                <h3> GMT+2 </h3>
                <p>{time}</p>
                </div>
            </div>
        </div>
        {sortedWorkouts && (
            <div className="secs">
                <div className="workout-preview">
                <ul>
                {sortedWorkouts.map((workout) => (
                    <li key={workout.id}>
                    <h2>hour: {workout.time}</h2>
                    <h3>{workout.workout}</h3>
                    <h5>{workout.todo}</h5>
                    </li>
                ))}
                </ul>
                </div>
            </div>
        )}
    </>);
}

export default Rewind
