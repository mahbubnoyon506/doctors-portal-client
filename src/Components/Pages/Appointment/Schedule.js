import React from 'react';

const Schedule = ({ schedule, setTreatment }) => {
    const {name, slots} = schedule;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{
                       slots.length ? 
                       <span>{slots[0]}</span> : 
                       <span className='text-red-700'>No slot available today</span>
                        }</p>
                    <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available.</p>
                    <div className="card-actions justify-center">
                        <label onClick={() => setTreatment(schedule)} htmlFor="booking-modal" className="btn bg-gradient-to-r from-secondary to-primary btn-sm text-white border-0 modal-button">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;