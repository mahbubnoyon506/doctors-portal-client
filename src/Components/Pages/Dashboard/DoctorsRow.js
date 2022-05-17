import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch }) => {
    const { name, speciality, email, img } = doctor;
const handleRemove = email => {
    fetch(`http://localhost:5000/doctors/${email}`, {
        method: 'DELETE',
        headers: {
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }        
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount){
            alert('Are you sure to delete a doctor?')
            toast.success(`Doctor ${name} deleted`)
            refetch()
        }
        console.log(data)
    })
}
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt="doctor" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td><button onClick={() =>handleRemove(email)} class="btn btn-xs btn-outline">Remove</button></td>
        </tr>
    );
};

export default DoctorsRow;