import { useState, useEffect } from "react";
import useFetch, { ApiResponse } from "../useFetch"


interface Workout {
    id: number;
    time: number;
    workout: string;
    todo: string;
    created_at: string;
    updated_at: string;
}

const WorkoutReminder = () => {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [fetched, setFetched] = useState(false);
    const [fetchKey, setFetchKey] = useState(0);

    const getData = async () => {
        const { data, pending, error } = await useFetch<Workout[]>(
          "https://api.quarza.online/api/workouts"
        );

        if (!pending && !error) {
          setWorkouts(data || []);
          setError(null);
        } else if (error) {
          setError(error);
          setWorkouts([]);
        }

        setFetched(true);
    };

    useEffect(() => {
      getData();
    }, [fetchKey]);

    const refreshData = () => {
      setWorkouts([]);
      setError(null);
      setFetchKey(prevKey => prevKey + 1);
    };

    return (
      <div>
        {error && <p>{error.message}</p>}
        {workouts.length > 0 ? (
          <ul>
            {workouts.map((workout) => (
              <li key={workout.id}>
                time: {workout.time}
                {workout.workout}
                {workout.todo}
              </li>
            ))}
          </ul>
        ) : (
          <p>{fetched ? "No workouts found" : "Loading..."}</p>
        )}
        <button onClick={refreshData}>Refresh</button>
      </div>
    );
};

export default WorkoutReminder;
