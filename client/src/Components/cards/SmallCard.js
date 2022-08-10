import {currencyFormatter} from '../../actions/stripe';
import {Link, useHistory} from 'react-router-dom';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'

const SmallCard = ({ r, handleRoomDelete = (f) => f, owner = false, showViewMoreButton = true }) => {
    const history = useHistory();
return (
    <>
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    {r.image && r.image.contentType ? (
                        <img src={`${process.env.REACT_APP_API}/room/image/${r._id}`} 
                        alt={r.room_type}
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
                        <h3 className="card-title">{r.room_type} - {" "}
                            <span className="float-right text-primary">
                            {currencyFormatter({
                                amount: r.price * 100,
                                currency: "gbp",
                            })} 
                            </span> per night{" "}</h3>
                            <p className="card-text">{`${r.description.substring(0, 300)}...`}</p>
                            <p className="card-text">Max Capacity: {r.room_max_occupancy}</p>

                            <div className="d-flex justify-content-between h4">
                                {showViewMoreButton && (<button 
                                    onClick={() => history.push(`/room/${r._id}`)} 
                                    className="btn btn-primary">
                                        More Info
                                </button>)}
                                {
                                    owner && <>
                                        <Link to={`/room/edit/${r._id}`}>
                                        <EditOutlined className="text-warning" />
                                        </Link>
                                        <DeleteOutlined onClick={() => handleRoomDelete(r._id)}
                                        className="text-danger"
                                        />
                                    </>
                                }
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default SmallCard;