import {useState, useEffect} from 'react'
import queryString from 'query-string'
import Search from '../Components/forms/Search';
import { searchListings } from '../actions/room';
import {currencyFormatter} from '../actions/stripe';
import {useHistory} from 'react-router-dom';

const SearchResult = ({ r, showViewMoreButton = true }) => {
    const history = useHistory();
    // state
    const [rooms, setRooms] = useState([]);

    const {date} = queryString.parse(window.location.search);

    // when component mounds, get search params from url and use to send search query to backend
    useEffect(() => {
        console.log("DATE!!! ====>", date);

        searchListings({date}).then((res) => {
            console.log("SEARCH RESULTS ======>", res.data);
            setRooms(res.data);
        })
    }, [window.location.search]);

    return (
        <>
        <div className="col">
            <br /><br /><br />
            <Search />
        </div>
        <div className="container">
            <div className="row">
                {
                    // rooms.map(r => <SmallCard key={r._id} r={r} />)
                    rooms.map(r =>
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
                        <h3 className="card-title">{r.room_type} <span className="float-right text-primary">
                            {currencyFormatter({
                                amount: r.price * 100,
                                currency: "gbp",
                            })}
                            </span>{" "}</h3>
                            <p className="card-text">{`${r.description.substring(0, 200)}...`}</p>
                            <p className="card-text">Max Capacity: {r.room_max_occupancy}</p>

                            <div className="d-flex justify-content-between h4">
                                {showViewMoreButton && (<button 
                                    onClick={() => history.push(`/room/${r._id}/${date}`)} 
                                    className="btn btn-primary">
                                        Book Now
                                </button>)}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                    )
                }
            </div>
        </div>
        </>
    )
}

export default SearchResult;