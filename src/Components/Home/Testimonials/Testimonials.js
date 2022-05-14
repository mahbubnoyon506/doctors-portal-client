import React from 'react';
import quota from '../../Utilities/assets/icons/quote.svg'

import person1 from '../../Utilities/assets/images/people1.png'
import person2 from '../../Utilities/assets/images/people2.png'
import person3 from '../../Utilities/assets/images/people3.png'
import Testimonial from './Testimonial';

const Testimonials = () => {
    return (
        <section className='p-12'>
            <div className='flex justify-between items-center py-5'>
                <div>
                    <h4 className='text-primary text-xl'>Testimonial</h4>
                    <h1 className='text-accent text-4xl'>What Our Patients Says</h1>
                </div>
                <div><img style={{width: '25%'}} src={quota} alt="" /></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
               <Testimonial person={person1} name="Winston Herry" address="California"></Testimonial>
               <Testimonial person={person2} name="Winston Herry" address="California"></Testimonial>
               <Testimonial person={person3} name="Winston Herry" address="California"></Testimonial>
            </div>
        </section>
    );
};

export default Testimonials;