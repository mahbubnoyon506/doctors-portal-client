import React from 'react';
import contactBg from '../../Utilities/assets/images/appointment.png'

const Contact = () => {
    return (
        <section className='py-10' style={{ background: `url(${contactBg})` }}>
            <h4 className='text-xl text-primary text-center'>Contact Us</h4>
            <h2 className='text-4xl text-white text-center'>Stay Connected with Us</h2>
            <div className='flex justify-center '>
                <form className='w-1/2'>
                    <input className='block rounded border-0 p-2 my-3 outline-0 w-full' type="text" name="" id="" placeholder='Your Name' />
                    <input className='block rounded border-0 p-2 my-3 outline-0 w-full' type="email" name="" id="" placeholder='Your Email' />
                    <input className='block rounded border-0 p-2 my-3 outline-0 w-full' type="password" name="" id="" placeholder='Your Password' />
                    <textarea className='block rounded border-0 p-2 my-3 outline-0 w-full' type="text" name="" id="" placeholder='Type Here' />
                    <input className='block rounded border-0 py-2 px-10 my-3 outline-0 mx-auto bg-primary text-white' type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default Contact;

