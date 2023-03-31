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

interface WorkoutItem {
    time: number;
    workout: string;
    todo: string;
}


const WorkoutReminder = () => {
    const [DATA, setDATA] = useState<ApiResponse<Workout[]> | null>(null);
    const [ERROR, setERROR] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    function AddWorkout() {
        const [time, setTime] = useState<number>(6);
        const [workout, setWorkout] = useState<string>("");
        const [todo, setTodo] = useState<string>("");
        const [responseMessage, setResponseMessage] = useState<string | null>(null);
        const [errorMessage, setErrorMessage] = useState<string | null>(null);


        const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const time = parseInt(event.target.value);
            setTime(time);
        };

        const handleWorkoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setWorkout(event.target.value);
        };

        const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setTodo(event.target.value);
        };

        const addItem = () => {
            const Items: WorkoutItem = { time, workout, todo };
            console.log(JSON.stringify({ workout: Items }))
            fetch("https://api.quarza.online/api/workout/store", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({ workout: Items }),
            })
            .then(response => {
                console.log(response);
                setResponseMessage(`Item added successfully.`);
                setErrorMessage(null);
            })
            .catch(error => {
                console.error(error);
                setResponseMessage(null);
                setErrorMessage(`Error adding item: ${error}`);
            });
        }

        const handleButtonClick = () => {
            addItem();
        };

        return (
          <div className="add">
            <label htmlFor="time-input">Time:</label>
            <input
                id="time-input"
                type="number"
                value={time}
                onChange={handleTimeChange}
                min={6}
                max={20}
            />
            <br />
            <label htmlFor="workout-input">Workout:</label>
            <input
                id="workout-input"
                type="text"
                value={workout}
                onChange={handleWorkoutChange}
                />
            <br />
            <label htmlFor="todo-input">Todo:</label>
            <input
                id="todo-input"
                type="text"
                value={todo}
                onChange={handleTodoChange}
                />
            <br />
            <button onClick={handleButtonClick}>Add item</button>
            {responseMessage && <p>{responseMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        );
    };

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

    const RemoveItem = () => {
        const [time, setTime] = useState<number>(6);
        const [responseMessage, setResponseMessage] = useState<string | null>(null);
        const [errorMessage, setErrorMessage] = useState<string | null>(null);

        const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const time = parseInt(event.target.value);
            setTime(time);
        };
        const Remove = () => {
            console.log("removing item ", time)
            const url = `https://api.quarza.online/api/workout/${time}`;

            fetch(url, {
                method: "DELETE",
            })
            .then(response => {
                console.log(response);
                setResponseMessage(`Item removed successfully.`);
                setErrorMessage(null);
            })
            .catch(error => {
                console.error(error);
                setResponseMessage(null);
                setErrorMessage(`Error removing item: ${error}`);
            });

        }

        return (
            <div className="remove">
                <p> Time: </p>
                <input type="text" onChange={handleTimeChange} />
                <button onClick={Remove}> remove </button>
                {responseMessage && <p>{responseMessage}</p>}
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        );
    }

    const sortedWorkouts = data?.sort((a, b) => a.time - b.time);

    return (<>
    <div className="secs">
        <AddWorkout/>
        <RemoveItem/>
    </div>
    <div className="sec">
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

export default WorkoutReminder
