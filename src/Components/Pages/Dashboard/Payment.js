import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'; 
import { Elements } from '@stripe/react-stripe-js'; 

import Loading from '../../Utilities/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0m3ZDl4aqKhSry404LiN0wWgPfpHi09C4GAdiVJ5UHHN1dDOzSURB54zDkEhDCSWQE6SEbHjddW6IQdSKJwOps00Kq9ZM9WC');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <div class="card w-1/2 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Hello Mr. <span className='text-secondary'>{appointment.patientName}</span> </h2>
                    <p>We will see you on {appointment.date} at {appointment.slot}</p>
                    <p>Please complete your payment of ${appointment.price}</p>
                </div>
            </div>
            <div class="card w-1/2 bg-base-100 shadow-xl my-10 px-8">
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;