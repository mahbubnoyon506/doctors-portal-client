import React from 'react';
import { toast } from 'react-toastify';

const TableRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("You don't have access to make someone admin")
                }
               return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast('Updated this user as Admin')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role === 'admin' ? <button class="btn btn-xs btn-ghost">Admin</button> : <button onClick={handleMakeAdmin} class="btn btn-xs btn-outline">Make Admin</button>}</td>
            <td><button class="btn btn-xs btn-outline">Remove</button></td>
        </tr>)
    // );
};

export default TableRow;