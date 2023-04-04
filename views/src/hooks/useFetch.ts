import axios, { Method } from 'axios'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import Constants from '@/constants/Constants'

function useFetch(queryKey: string, queryUrl: string, method: Method, requestBody?: object) {
    const router = useRouter()

    const fetchDataFunction = async () => {
        const { data } = await axios({ method, url: queryUrl, data: requestBody })
        return data
    }

    const { data, isLoading } = useQuery(
        [queryKey, requestBody],
        () => fetchDataFunction(),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 3,
            retryDelay: 2500,
            onError(err: any) {
                if (err.response && err.response.status === 401) {
                    localStorage.removeItem('accessToken')
                    router.push('/')
                }

                toast.error(`${Constants.ToastError} fetching ${queryKey}`)
            },
        },
    )

    return { data, isLoading }
}

export default useFetch