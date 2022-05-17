import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminloading] = useState(true)
    const email = user?.email
    useEffect( () => {
        fetch(`http://localhost:5000/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAdmin(data.admin)
            setAdminloading(true)
        })
    } , [user, email])
    return [admin, adminLoading]
}
export default useAdmin;