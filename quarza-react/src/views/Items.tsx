import { useState } from "react";
import useFetch, { ApiResponse } from "../useFetch";
import "./styles/items.css";

interface Item {
    id: number;
    name: string;
    completed: number;
    created_at: string;
}

const apiurl = "https://api.quarza.online/api/items"

const Items = () => {
    const [todos, setTodos] = useState<Item[] | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    const { data, pending: pendingFetch, error: fetchError } =
      useFetch<Item[]>(apiurl); // provide type parameter to useFetch

    if (!pendingFetch && loading) {
      setLoading(false);
      setTodos(data);
    }

    if (loading) return <div>Loading...</div>;

    if (fetchError || error)
      return (
        <div>
          {fetchError && <div>{fetchError.message}</div>}
          {error && <div>{error.message}</div>}
        </div>
      );

    const CreateItem = () => {
      const [response, setResponse] = useState<ApiResponse<Item[]>>();
      const [inputValue, setInputValue] = useState("");

      const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        setInputValue(event.target.value);
      };

      const addItem = async (name: string) => {
        const {data: response, pending, error } = await useFetch<Item[]>(
        "https://api.quarza.online/api/item/store",
        {
            method: "post",
            body: { item: { name: name } },
        }
        );

        const { data } = await useFetch<Item[]>(apiurl);
        setTodos(data);

      const handleButtonClick = () => {
        addItem(inputValue);
      };

      return (
        <div>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleButtonClick}>Add item</button>
        </div>
        )
    };
    return (
        <div className="item-list">

        <div>
            {todos?.map((item) => (
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
}
export default Items
