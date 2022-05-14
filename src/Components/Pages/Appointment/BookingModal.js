import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const [user] = useAuthState(auth);
    const {_id, name, slots } = treatment;
    const foramatedDate = format(date, 'PP')
    const handleBook = event => {
        event.preventDefault();
        const data = {
            treatmentId: _id,
            treatmentName: name,
            name: user.displayName,
            email: user.email,
            phone: event.target.phone.value,
            date: foramatedDate,
            slot: event.target.slot.value
        }
        console.log(data)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn bg-gradient-to-r from-secondary to-primary border-0 btn-sm btn-circle absolute right-2 top-2">✕</label>
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