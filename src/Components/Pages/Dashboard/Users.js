import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Utilities/Loading';
import TableRow from './TableRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>All user {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Admin Status</th>
                            <th>Remove Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users.map((user, index) => <TableRow key={user._id} user={user} index={index} refetch={refetch}></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;