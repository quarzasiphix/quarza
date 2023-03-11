import { useState } from "react"
import useFetch from "../useFetch"
import './styles/items.css'

interface getitems {
    data: string
}

interface items {
    id: number
    name: string
    price: number
    completed: number
    created_at: Date
}

const Items = () => {
    const [err, setErr] = useState(false)
    const { data: items, error, pending } = useFetch<items[]>('https://api.quarza.online/api/items');

    if (pending)  return <div>Loading...</div>

    return (
        <div className="item-list">
        {error ? (
            <div>{error.message}</div>
        ) : (
            <div>
                {items?.map((item) => (
                    <div className="item-preview" key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.completed === 1 ? 'Completed' : 'Not completed'}</p>
                        <p>{item.created_at && new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', year: '2-digit', day: '2-digit' })} {item.created_at && new Date(item.created_at).toLocaleTimeString()}</p>
                        <button>complete</button>
                    </div>
                ))}
            </div>
        )}
        </div>
    )
}

export default Items
