import React from 'react';
import homeBanner from '../../Utilities/assets/images/chair.png'
import bannerBg from '../../Utilities/assets/images/bg.png'
import PrimaryButton from '../../Utilities/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{background: `url(${bannerBg})`}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=''><img src={homeBanner} className="max-w-lg rounded-lg shadow-2xl" alt='' /></div>
                <div className=''>
                    <h1 className="text-accent text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;