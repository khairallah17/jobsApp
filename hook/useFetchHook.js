import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { RAPID_API_KEY } from '@env'

const rapidapikey = RAPID_API_KEY 

export default function useFetchHook(endpoint, query) {
  
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': rapidapikey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query}
    };
      

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)    
        } catch (err) {
            setError(err)
            console.log(err.message)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        fetchData()
    },[])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }

}

