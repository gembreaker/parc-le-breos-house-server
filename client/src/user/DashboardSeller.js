import DashboardNav from '../Components/DashboardNav'
import ConnectNav from '../Components/ConnectNav';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import {HomeOutlined} from '@ant-design/icons'
import {createConnectAccount} from '../actions/stripe';
import {toast} from 'react-toastify';
import {sellerRooms, deleteRoom} from '../actions/room';
import SmallCard from '../Components/cards/SmallCard';

const DashboardSeller = () => {
    const {auth} = useSelector((state) => ({...state}));
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadSellerRooms();
    }, [])

    const loadSellerRooms = async () => {
        let {data} = await sellerRooms(auth.token);
        setRooms(data);
    }

    const handleClick = async () => {
        setLoading(true)
        try{
            let res = await createConnectAccount(auth.token)
            window.location.href = res.data;
        } catch (err) {
            console.log(err)
            toast.error('Stripe connect failed. Try again.');
            setLoading(false);
        }
    }

    const handleRoomDelete = async (roomId) => {
        if(!window.confirm('Are you sure?')) return;
        deleteRoom(auth.token, roomId).then(res => {
            toast.success(`Room Deleted`);
            loadSellerRooms()
        })
    }

    const connected = () => (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <h2>
                        Your Rooms
                    </h2>
                </div>
                <div className="col-md-2">
                    <Link to="/room/new" className="btn btn-primary">
                        + Add New
                    </Link>
                </div>
            </div>

            <div className="row">
                {rooms.map(r => (
                    <SmallCard key={r._id} r={r} showViewMoreButton={false} owner={true} handleRoomDelete={handleRoomDelete} />
                ))}
            </div>
        </div>
    )

    const notConnected = () => (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <div className="p-5 pointer">
                        <HomeOutlined className="h1" />
                        <h4>
                            Setup payouts to post hotel rooms
                        </h4>
                        <p className="lead">Gower Hotel partners with Stripe to transfer earnings to your bank account</p>
                        <button disabled={loading} onClick={handleClick} className="btn btn-primary mb-3">
                            {loading ? 'Processing...' : 'Setup Payouts'}
                        </button>
                        <p className="text-muted"><small>You will be redirected to Stripe to complete the onboarding process.</small></p>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div className="container-fluid bg-secondary p-5"> 
                <ConnectNav />
            </div>

            <div className="container-fluid p-4">
                <DashboardNav />
            </div>

            {auth && 
                auth.user && 
                auth.user.stripe_seller && 
                auth.user.stripe_seller.charges_enabled
                    ? connected()
                    : notConnected()}
        </>
    );
};

export default DashboardSeller;