import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { CgProfile } from 'react-icons/cg';

const TopNav = () => {
  const dispatch = useDispatch();
  const {auth} = useSelector((state) => ({ ...state }));
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })
    window.localStorage.removeItem('auth');
    history.push("/login");
  }

  return (
    <div>
      <div id="logo" className="logo-plb">
        <Link to="/">
          <img 
            src="https://parc-le-breos.co.uk/wp-content/uploads/2019/04/gold-logo-smaller.png" 
            alt="Parc Le Breos" 
            className="PLB-Logo" 
          />
        </Link>
        <span className="site-title" />
      </div>
      
        <div id="mobile-logo">
          <span id="mobile-book-now">
            <Link to="/availability">
              Book Now
            </Link>
          </span>
          <span id="mobile-phone">
            Tel: +44 (0)1792 371636
          </span>
        </div>

      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
        <NavItem>
          <Link to="/" className="nav-link">
              Home
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/rooms" className="nav-link">
              Rooms
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/restaurant" className="nav-link">
              Restaurant
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/events" className="nav-link">
              Weddings
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/availability" className="nav-link">
              Book Now
          </Link>
        </NavItem>
        </Nav>
      {auth !== null && (
          <Link to="/profile" className="nav-link">
              <CgProfile /> Profile
          </Link>
      )}
      {auth !== null && 
        <NavLink onClick={logout}>
            Logout
        </NavLink>
    }

      {auth === null && (
      <>
          <Link to="/login" className="nav-link">
              Login
          </Link>
          <Link to="/register" className="nav-link">
              Register
          </Link>
      </>
      )}
      </Collapse>
      </Navbar>
    </div>
);
}

export default TopNav;