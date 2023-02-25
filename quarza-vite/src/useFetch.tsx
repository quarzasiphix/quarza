import { useState, useEffect } from 'react'

const useFetch = (url: string) => {
    const [data , setData] = useState(null)
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      fetch(url)
        .then(res => {
          if(!res.ok) throw Error('fetch failed')
          return res.json() // parse response body as JSON
        })
        .then(data => {
          setData(data)
          setPending(false)
        })
        .catch(err => {
          setError(err.message)
          setPending(false)
        })
    }, [url])

    return {data, pending, error}
  }

export default useFetch
