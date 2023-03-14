import { useState } from "react";
import useFetch, { ApiResponse } from "../useFetch";
import "./styles/items.css";

interface Item {
    id: number;
    name: string;
    completed: number;
    created_at: string;
}

const Items = () => {
    const [todo, setTodo] = useState<Item>()
    const [error, setError] = useState<Error | null>(null);
    const [response, setResponse] = useState<ApiResponse<Item>>({
        data: null,
        pending: false,
        error: null,
    });

    const { data: items, pending: pending, error: fetchError} =
        useFetch<Item[]>("https://api.quarza.online/api/items");

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const addItem = async (name: string) => {



        //setResponse({ data: null, pending: true, error: null});
    };

    const handleButtonClick = () => {
        addItem(inputValue);
    };

    if (pending) return <div>Loading...</div>;

    if (fetchError || error)

    return (
        <div>
            {fetchError && <div>{fetchError.message}</div>}
            {error && <div>{error.message}</div>}
        </div>
    );

    return (
        <div className="item-list">
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Add item</button>
            {response.error && <div>{response.error.message}</div>}
            {response.data && (
            <div className="item-preview" key={response.data.id}>
                <h2>{response.data.name}</h2>
                <p>
                {response.data.completed === 1 ? "Completed" : "Not completed"}
                </p>
                <p>
                {response.data.created_at &&
                    new Date(response.data.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    year: "2-digit",
                    day: "2-digit",
                    })}{" "}
                {response.data.created_at &&
                    new Date(response.data.created_at).toLocaleTimeString()}
                </p>
                <button>complete</button>
            </div>
            )}
        </div>
        <div>
            {items?.map((item) => (
            <div className="item-preview" key={item.id}>
                <h2>{item.name}</h2>
                <p>
                {item.completed === 1 ? "Completed" : "Not completed"}
                </p>
                    <p>
                        {item.created_at &&
                            new Date(item.created_at).toLocaleDateString("en-US", {
                                month: "short",
                                year: "2-digit",
                                day: "2-digit",
                            })}{" "}
                        {item.created_at &&
                            new Date(item.created_at).toLocaleTimeString()}
                    </p>
                    <button>complete</button>
            </div>))}
        </div>
        </div>
    );
};

export default Items;
