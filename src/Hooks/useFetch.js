import { useState, useEffect } from 'react'
import paginate from '../utils'
const url = 'https://api.github.com/users/bradtraversy/followers?per_page=200'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    if(!response){
      throw new Error("Response not valid")
    }
    const data = await response.json()
    
    setData(paginate(data))
    console.log();
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}
