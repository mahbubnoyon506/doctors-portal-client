import React from 'react';

const Testimonial = ({ person, name, address }) => {
    return (
        <div className='shadow-xl p-4'>
            <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            <div className='flex items-center p-4'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={person} alt='' />
                    </div>
                </div>
                <div className='ml-4'>
                    <h2>{name}</h2>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;