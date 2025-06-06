import useSWR from "swr"
import { searchCustomers } from "../api/customer"

export const useCustomer = () => {
    const {data, error, isLoading} = useSWR(`http://localhost:8080/api/customer/customerInfo`, searchCustomers)

    return {
        users: data,
        isLoading,
        isError: error
    }
}
