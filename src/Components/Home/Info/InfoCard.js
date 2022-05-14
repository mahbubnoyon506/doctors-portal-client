import React from 'react';


const InfoCard = ({img, bgClass, cardTitle}) => {
    return (
        <div className={`card card-side shadow-xl p-5 ${bgClass}`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{cardTitle}</h2>
                <p className='text-white'>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default InfoCard;