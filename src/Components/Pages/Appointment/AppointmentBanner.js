
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../Utilities/assets/images/chair.png'

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img className='max-w-lg pl-5' src={chair} alt='' />
                    <div >
                        <DayPicker
                              mode="single"
                              date={date}
                              onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;