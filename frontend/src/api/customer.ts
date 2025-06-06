export const searchCustomers = async (url: string) => {
    const res = await fetch(url)
    if(!res.ok) throw new Error('Network error')
    const data = await res.json()
    return data;
}

