import { useState, useEffect } from 'react'
import './styles/home.css'

const HomePage = () => {
    const [response, setResponse] = useState<string>()
    const [data, setData] = useState(null);
    const [pending, setPending] = useState<boolean>(false)
    const [error, setError] = useState<Error>()

    const login = () => {
      setPending(true)
      console.log("pressed login")
      fetch("https://api.quarza.online/login")
        .then(res => {
          if (!res.ok) throw Error('fetch failed')
          console.log(res)
          return res.json()
        })
        .then(data => {
          setData(data)
          setPending(false)
          console.log("response: ", data)
          setResponse(JSON.stringify(data.login)) // Convert data to JSON string
        })
        .catch(err => {
          console.log(err.message)
          setError(error)
          setPending(false)
        })
    }

    return (
        <>
        <div className="home">
        <h1> yaaa its home </h1>
        </div>
        <div className='fafosec'>
            <div className='fafo'>

                <button onClick={login}> login </button>
            </div>
        </div>
        </>
    )
}


export default HomePage
