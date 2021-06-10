import {useState, useEffect} from 'react'

const useCorona = (url) => {
    const [error, setError] = useState()
    const [isPending,setIsPending] = useState(false)
    const [covid, setCovid] = useState()

    useEffect(() => {
        async function fetchData () {
            setIsPending (true)
            const res= await fetch (url).then(data=>data.json()).catch(err=>setError(err))
            setCovid(res)
            setIsPending (false)
        }
        fetchData()
    }, [url])
    return{
        isPending, error, covid
    }
}

export default useCorona