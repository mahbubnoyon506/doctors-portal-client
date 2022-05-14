import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../Utilities/assets/icons/clock.svg';
import marker from '../../Utilities/assets/icons/marker.svg';
import phone from '../../Utilities/assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hour" img={clock} bgclassName="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard cardTitle="Visit our Location" img={marker} bgclassName="bg-accent"></InfoCard>
            <InfoCard cardTitle="Contact us Now" img={phone} bgclassName="bg-gradient-to-r from-secondary to-primary"></InfoCard>
        </div>
    );
};

export default Info;