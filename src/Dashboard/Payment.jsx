import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import useClasses from '../Hooks/useClasses';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    const [selectedClass] = useClasses();
    const total = selectedClass.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    // console.log(price)
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm selectedClass={selectedClass} price={price} ></CheckOutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;