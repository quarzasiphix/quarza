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

const Rewind = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('pl-PL', {timeZone: 'Europe/Warsaw'}));

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString('pl-PL', {timeZone: 'Europe/Warsaw'}));
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    const { data, pending, error } = useFetch<Workout[]>(
        "https://api.quarza.online/api/workouts"
    );

    if (pending) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!data) {
        return null;
    }


    const sortedWorkouts = data?.sort((a, b) => a.time - b.time);

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
    <div className="secs">
        <div className="workout-preview">
        <ul>
        {sortedWorkouts?.map((workout) => (
            <li key={workout.id}>
            <h2>hour: {workout.time}</h2>
            <h3>{workout.workout}</h3>
            <h5>{workout.todo}</h5>
            </li>
        ))}
        </ul>
        </div>
    </div>
    </>);
}

export default Rewind;
