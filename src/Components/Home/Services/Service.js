import React from 'react';


const Service = ({ service }) => {
    const { title, image, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl text-center text-accent">{title}</h2>
                <p className='text-center'>{description}</p>
            </div>
        </div>
    );
}

export default Service;