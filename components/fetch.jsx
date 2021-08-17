import axios from "axios"
import useSWR from "swr"


export default function useDataFetch(endpoint) {

  const fetcher = url => axios.get(url).then(res => res.data)

  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, fetcher)
 
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}