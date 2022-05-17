import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Utilities/Loading';


const Myappointment = () => {
    const [user, loading] = useAuthState(auth);
    const [appoinments, setAppointments] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if(res.status === 401 || res.status === 403){
                       signOut(auth)
                       localStorage.removeItem('accessToken')
                       navigate("/") 
                    }
                    return res.json()
                })
                .then(data => setAppointments(data))
        }
    }, [user, navigate])

    if(loading){
        return <Loading></Loading>
    }
         
    
    return (
        <div className="ml-44 lg:ml-0 mt-4">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Schedule</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            appoinments.map((appointment, index) => <tr key={appointment._id}>
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myappointment;