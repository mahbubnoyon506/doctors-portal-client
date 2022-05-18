import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transectionId, setTransectionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const {_id, price, patient, patientName } = appointment;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('')
        // if (error) {
        //     console.log(error);
        // } else {
        //     setCardError('');
        // }

        //confirm card payment
        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: patientName,
                    email: patient,
                },
            },
        })

        if (intentError) {
            setCardError(intentError);
        }
        else {
            setCardError('');
            setTransectionId(paymentIntent.id)
            console.log(paymentIntent)
            setSuccess('Congrats! Your payment is completed.');
            //store payment on database
            const payment = {
                appointment: _id,
                paymentId: paymentIntent.id
            }
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)              
            })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm bg-secondary px-12 border-0 hover:bg-primary my-4 text-white' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500 mb-2'>{cardError}</p>
            }
            {
                success && <div className='mb-2'>
                    <p className='text-green-500 '>{success}</p>
                    <p>Your transection id <span className='text-yellow-400'>{transectionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;