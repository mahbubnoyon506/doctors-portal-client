import React from 'react';
import appointment from '../Utilities/assets/images/appointment.png';
import doctor from '../Utilities/assets/images/doctor-small.png';
import PrimaryButton from '../Utilities/PrimaryButton/PrimaryButton';

const Appointment = () => {
    return (
        <section>
            <div className='flex flex-col lg:flex-row items-center my-20' style={{ background: `url(${appointment})`, position: 'center', backgroundAttachment: 'fixed' }}>
               <div  className='flex-1 hidden lg:block mt-[-100px]'><img src={doctor} alt="" /></div>
               <div className='flex-1 px-4'>
                   <h4 className='text-xl text-primary pb-2'>Appointment</h4>
                   <h1 className='text-4xl text-white pb-4'>Make an appointment Today</h1>
                   <p className='text-white pb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                   <PrimaryButton>Get Started</PrimaryButton>
               </div>
            </div>
        </section>
    );
};

export default Appointment;