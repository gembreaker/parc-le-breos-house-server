import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const DashboardNav = () => {
    const active = window.location.pathname;
    const {auth} = useSelector((state) => ({...state}));

    const connected = () => (
        <li className="nav-item">
                <Link className={`nav-link ${active === '/dashboard/seller' && 'active'}`} to="/dashboard/seller">Your Rooms</Link>
        </li>
    )

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className={`nav-link ${active === '/profile' && 'active'}`} to="/profile">Your Bookings</Link>
            </li>
            {auth && 
                auth.user && 
                auth.user.stripe_seller && 
                auth.user.stripe_seller.charges_enabled
                    ? connected()
                    : ""}
        </ul>
    )
}

export default DashboardNav;