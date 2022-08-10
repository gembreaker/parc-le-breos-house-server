import DashboardNav from '../Components/DashboardNav'
import ConnectNav from '../Components/ConnectNav';
import {Link} from 'react-router-dom';
import {userRoomBookings} from '../actions/room';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import BookingCard from '../Components/cards/BookingsCard';

const Dashboard = () => {
    const {
        auth: {token},
    } = useSelector((state) => ({...state}));
    const [booking, setBooking] = useState([]);
 
    useEffect(() => {
        loadUserBookings();
    }, []);

    const loadUserBookings = async () => {
        const res = await userRoomBookings(token)
        console.log(res);
        setBooking(res.data);
    }

    return (
        <>
            <div className="container-fluid bg-secondary p-5 login"> 
                <ConnectNav />
            </div>

            <div className="container-fluid p-4">
                <DashboardNav />
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <h2>
                            Your Bookings
                        </h2>
                    </div>
                    <div className="col-md-2">
                        <Link to="/rooms" className="btn btn-primary">Browse Rooms</Link>
                    </div>
                </div>
            </div>

            <div className="row">
                {booking.map(b => (
                    <BookingCard key={b._id} room={b.room} session={b.session} orderedBy={b.orderedBy} from={b.from} to={b.to} />
                ))}
            </div>
        </>
    );
};

export default Dashboard;