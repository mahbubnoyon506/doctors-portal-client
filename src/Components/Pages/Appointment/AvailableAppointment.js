import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Schedule from './Schedule';

const AvailableAppointment = ({ date }) => {
    const [schedules, setSchedules] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/schelules')
            .then(res => res.json())
            .then(data => setSchedules(data))
    }, [])
    return (
        <div>
            <h4 className='text-center text-secondary text-xl'>Available appointment on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
                {
                    schedules.map(schedule => <Schedule key={schedule._id} schedule={schedule} setTreatment={setTreatment}></Schedule>)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>
            }

        </div>
    );
};

export default AvailableAppointment;