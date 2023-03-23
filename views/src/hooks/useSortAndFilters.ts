import { useState, useEffect } from 'react'
import axios from 'axios'
import endPoints from '@/constants/Endpoints'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import Constants from '@/constants/Constants'

const useSortAndFilters = () => {
    const [state, setState] = useState({ sortOptions: [], filterCategories: [], isLoaded: false })
    const router = useRouter()

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.post(endPoints.datasetSortAndFilterOptionsEndpoint)
                setState({ ...state, sortOptions: response.data.sortOptions, filterCategories: response.data.filterCategories, isLoaded: true })
            }

            catch (error: any) {
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('accessToken')
                    router.push('/')
                }

                setState({ ...state, isLoaded: true })
                toast.error(Constants.ToastError)
            }
        })()
    }, [])

    return state
}

export default useSortAndFilters