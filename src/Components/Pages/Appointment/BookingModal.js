import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
const axios = require('axios').default;

const BookingModal = ({ treatment, setTreatment, date, refetch}) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const foramatedDate = format(date, 'PP')
    const handleBook = event => {
        event.preventDefault();
        const bookings = {
            treatmentId: _id,
            treatment: name,
            patientName: user.displayName,
            patient: user.email,
            phone: event.target.phone.value,
            date: foramatedDate,
            slot: event.target.slot.value
        }


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast(`Booking is set for ${foramatedDate} at ${bookings.slot}`);
                }
                else {
                    toast.error(`Already have appointment for ${data.booking?.date} at ${data.booking?.slot}`)
                }
                
                setTreatment(null)
                refetch();
            })


        // axios.post('http://localhost:5000/bookings', bookings)
        //   .then(function (response) {
        //     console.log(response.data);

        //     if(response.data.success){
        //       toast(`Booking is set for ${foramatedDate} at ${bookings.slot}`);
        //     }
        //     else{
        //         toast.error(`Already have appointment for ${response.data.booking?.date} at ${response.data.booking?.date}`)
        //     }
        //     setTreatment(null)
        //   })
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlhtmlFor="booking-modal" className="btn bg-gradient-to-r from-secondary to-primary border-0 btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBook}>
                        <input className='block w-full border outline-0 rounded p-3 my-3 bg-slate-200' type="text" value={user?.displayName} readOnly id="" />
                        <input className='block w-full border outline-0 rounded p-3 my-3 bg-slate-200' type="email" value={user?.email} readOnly id="" />
                        <input className='block w-full border outline-0 rounded p-3 my-3 bg-slate-200' value={format(date, 'PP')} type="text" name="date" id="" readOnly />
                        <select className="select block w-full rounded p-3 my-3 bg-slate-200" name='slot'>
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input className='block w-full border outline-0 rounded p-3 my-3' type="text" name="phone" id="" placeholder='Phone Number' />
                        <input className='block w-full border outline-0 rounded p-3 my-3 bg-gradient-to-r from-secondary to-primary text-white cursor-pointer' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;