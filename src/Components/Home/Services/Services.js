import React from 'react';
import floride from '../../Utilities/assets/images/fluoride.png';
import cavity from '../../Utilities/assets/images/cavity.png';
import whitening from '../../Utilities/assets/images/whitening.png';
import Service from './Service';


const Services = () => {
    const services = [
        {
            _id: 1,
            image: floride,
            title: 'Floride Treatment',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur explicabo accusamus vel nam laudantium dolores, aliquam excepturi quod dignissimos quam facilis quisquam labore, magnam eveniet sequi deleniti dolorem corrupti?"
        },
        {
            _id: 2,
            image: cavity,
            title: 'Floride Treatment',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur explicabo accusamus vel nam laudantium dolores, aliquam excepturi quod dignissimos quam facilis quisquam labore, magnam eveniet sequi deleniti dolorem corrupti?"
        },
        {
            _id: 3,
            image: whitening,
            title: 'Floride Treatment',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur explicabo accusamus vel nam laudantium dolores, aliquam excepturi quod dignissimos quam facilis quisquam labore, magnam eveniet sequi deleniti dolorem corrupti?"
        }
    ]

    return (
        <div className='py-16'>
            <h2 className='text-primary text-xl text-center'>our Services</h2>
            <h1 className='text-accent text-4xl text-center'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-8'>
                {
                    services.map( service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;