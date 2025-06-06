import useSWR from "swr"
import { searchUsers } from "../api/customer"

export const useUser = () => {
    const {data, error, isLoading} = useSWR(`http://localhost:8080/api/user`, searchUsers)

    return {
        users: data,
        isLoading,
        isError: error
    }
}