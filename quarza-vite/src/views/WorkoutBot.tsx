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

      return (
        <ul>
          {data.map((workout) => (
            <li key={workout.id}>
              <h4>{workout.workout}</h4>
              <p>time: {workout.time}</p>
              <p>{workout.todo}</p>
            </li>
          ))}
        </ul>
      );
}

export default WorkoutReminder
