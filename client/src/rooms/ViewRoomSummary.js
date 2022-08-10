import React, {useState, useEffect} from 'react';
import {read} from '../actions/room';
import pets from '../Images/pets.png';
import breakfast from '../Images/breakfast.png';
import {useSelector} from 'react-redux';
import {getSessionId} from '../actions/stripe';
import {loadStripe} from '@stripe/stripe-js';

const ViewRoom = ({ match, history }) => {
    const [room, setRoom] = useState({});
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const {auth} = useSelector((state) => ({...state}));
    const bookingdate = match.params.date;
    const splitdate = bookingdate.split(",");
    const diffTime = Math.abs(new Date(splitdate[1]) - new Date(splitdate[0]));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    useEffect(() => {
        loadSellerRoom();
    },[match.params.date]);

    const loadSellerRoom = async () => {
        let res = await read(match.params.roomId, match.params.date)
        setRoom( res.data );
        setImage(`${process.env.REACT_APP_API}/room/image/${res.data._id}`)
    }

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        // if not logged in - redirect
        if(!auth) history.push('/login');
        let res = await getSessionId(auth.token, match.params.roomId, match.params.date);
        const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY)
        stripe.redirectToCheckout({
            sessionId: res.data.sessionId,
        })
        .then((result) => console.log(result))
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <br/><br /><br />
                        <h1>Summary of booking</h1>
                        <h2>Room Type: {room.room_type} - £{room.price} per night</h2>
                        <h3>Total Price: £{room.price*diffDays}</h3>
                        <h3>Booking Date: {new Date(splitdate[0]).toLocaleDateString()} to {new Date(splitdate[1]).toLocaleDateString()}</h3>
                        <b>Description: </b>{room.description}<br />
                        <p><b>Includes: </b>{room.amenities}</p>
                        <p><b>Size: </b>{room.size}&#13217;</p>
                        <p><b>Capacity: </b>{room.room_max_occupancy}</p>
                        {room.pets ? <div> <img src={pets} className="roomfeatureimages" style={{height: '27px', width: '30px'}} alt="Pets Allowed" /> Pets allowed </div> :<div><img src={pets} className="roomfeatureimages" style={{height: '27px', width: '30px'}} alt="No Pets Allowed" /> No pets allowed</div>}
                        <p>{room.breakfast ? <div> <img src={breakfast} className="roomfeatureimages" style={{height: '27px', width: '30px'}} alt="Breakfast included" /> Breakfast Included </div>:""}</p>
                        <button onClick={handleClick} className="btn btn-block btn-lg btn-primary mt-3" disabled={loading}>
                            {loading ? "Loading..." : "Confirm Booking"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewRoom;