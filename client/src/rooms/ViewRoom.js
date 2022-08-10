import React, {useState, useEffect} from 'react';
import {read} from '../actions/room';
import pets from '../Images/pets.png';
import breakfast from '../Images/breakfast.png';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const ViewRoom = ({ match, history }) => {
    const [room, setRoom] = useState({});
    const [image, setImage] = useState('');

    useEffect(() => {
        loadSellerRoom();
    },[]);

    const loadSellerRoom = async () => {
        let res = await read(match.params.roomId)
        setRoom( res.data );
        setImage(`${process.env.REACT_APP_API}/room/image/${res.data._id}`)
    }

    return (
        <>
            <div className="content">
            <div className="row" style={{paddingTop:"50px"}}>
              <div className="col-12 col-md-6 order-md-2" style={{textAlign:"center"}}>
                <h1>{room.room_type} - £{room.price} per night</h1>
                <p>
                {room.description}
                </p>
                <p>Includes: {room.amenities}</p>
                        <p>Size: {room.size}&#13217;</p>
                        <p>Capacity: {room.room_max_occupancy}</p>
                        {room.pets ? <div> 
                            <img src={pets} className="roomfeatureimages" style={{height: '27px', width: '30px'}} alt="pets allowed" /> 
                                Pets allowed 
                            </div> : 
                            <div><img src={pets} className="roomfeatureimages" style={{height: '27px', width: '30px'}} alt="no pets allowed" /> 
                            No pets allowed
                            </div>}
                        <p>{room.breakfast ? <div> <img src={breakfast} className="roomfeatureimages" style={{height: '27px', width: '30px'}} alt="breakfast included" /> Breakfast Included </div>:""}</p>
                        <Link to="/availability">
                        <button className="btn btn-block btn-lg btn-primary mt-3">
                            Check Availability
                        </button><br /><br /><br />
                        </Link>
              </div>
                <div className="col-12 col-md-6"  style={{textAlign:"center"}}>
                    <img src={image} style={{width:"90%"}} alt={room.room_type} />
                </div>
              </div>
            </div>
        </>
    )
}

export default ViewRoom;