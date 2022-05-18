import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Utilities/Loading';
import BookingModal from './BookingModal';
import Schedule from './Schedule';

const AvailableAppointment = ({ date }) => {
    // const [schedules, setSchedules] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP')
    const {data: schedules, isLoading, refetch} = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
             .then(res => res.json()))

if(isLoading){
    return <Loading></Loading>
}
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setSchedules(data))
    // }, [formatedDate])
    return (
        <div>
            <h4 className='text-center text-secondary text-xl'>Available appointment on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
                {
                    schedules.map(schedule => <Schedule key={schedule._id} schedule={schedule} setTreatment={setTreatment}></Schedule>)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment} refetch={refetch}></BookingModal>
            }

        </div>
    );
};

export default AvailableAppointment;