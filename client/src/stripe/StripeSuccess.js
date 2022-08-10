import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {stripeSuccessRequest} from '../actions/stripe'

const StripeSuccess = ({match, history}) => {
    const {auth: {token}} = useSelector((state) => ({...state}));

    const bookingdate = match.params.date;
    console.log(bookingdate);

    useEffect(() => {
        stripeSuccessRequest(token, match.params.roomId, match.params.date).then((res) => {
            if (res.data.success){
                history.push('/profile');
            } else {
                history.push('/stripe/cancel');
            }
        });
    }, [match.params.roomId]);

    return (
        <div className="container">
            <div className="col">
                <h2 className="text-center p-5">Payment successful. {match.params.roomId}</h2>
            </div>
        </div>
    )
}

export default StripeSuccess;