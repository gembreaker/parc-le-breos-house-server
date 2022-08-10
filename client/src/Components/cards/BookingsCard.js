import {useState} from 'react';
import {currencyFormatter} from '../../actions/stripe';
import {useHistory} from 'react-router-dom';
import OrderModal from '../Modals/OrderModal';

const BookingCard = ({ room, session, orderedBy, from, to }) => {
    const [showModal, setShowModal] = useState(false);
    
    const history = useHistory();
return (
    <>
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    {room.image && room.image.contentType ? (
                        <img src={`${process.env.REACT_APP_API}/room/image/${room._id}`} 
                        alt={room.room_type}
                        className="card-image img img-fluid"
                        />
                    ):
                    (
                        <img src="https://via.placeholder.com/900x500.png?text=Gower+Hotel+Room" 
                        alt="Default Room Image"
                        className="card-image img img-fluid"
                        />
                    )
                    }
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{room.room_type} <span className="float-right text-primary">
                            {currencyFormatter({
                                amount: room.price * 100,
                                currency: "gbp",
                            })}
                            </span> per night{" "}</h3>
                            <p className="card-text">{`${room.description.substring(0, 200)}...`}</p>
                            <p className="card-text">Max Capacity: {room.room_max_occupancy}</p>

                            <p>From: {new Date(from).toLocaleDateString()}</p>
                            <p>To: {new Date(to).toLocaleDateString()}</p>

                            {showModal && (
                                    <OrderModal 
                                        session={session} 
                                        orderedBy={orderedBy} 
                                        showModal={showModal} 
                                        setShowModal={setShowModal} 
                                    />
                                )
                            }

                            <div className="d-flex justify-content-between h4">
                                <button 
                                    onClick={() => setShowModal(!showModal)} 
                                    className="btn btn-primary">
                                        Show Payment Info
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default BookingCard;