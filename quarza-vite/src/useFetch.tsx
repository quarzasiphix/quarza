import { useState, useEffect } from 'react'

const useFetch = (url: string) => {
    const [data , setData] = useState(null)
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
          .then(res => {
            if(!res.ok) throw Error('fetch failed')
            console.log(res)
            return res.json()
          })
          .then(data => {
            setData(data)
            setPending(false)
          })
          .catch(err => {
            console.log(err.message)
            setPending(false)
            setError(err.message)
          })
      }, [url]) // refresh state when url changed

      return {data, pending, error}
}

export default useFetch
