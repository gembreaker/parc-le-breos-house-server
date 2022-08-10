import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopNav from './Components/TopNav';
import Footer from './Components/Footer';
import PrivateRoute from './Components/PrivateRoute';
// Pages
import Home from './mainpages/Home';
import Rooms from './mainpages/Rooms';
import Restaurant from './mainpages/Restaurant';
import Events from './mainpages/Events';
import Error from './mainpages/Error';
import Availability from './mainpages/Availability';
// Components
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './user/Dashboard';
import DashboardSeller from './user/DashboardSeller';
import NewRoom from './rooms/NewRoom';
import StripeCallback from './stripe/StripeCallback';
import EditRoom from './rooms/EditRoom';
import ViewRoom from './rooms/ViewRoom';
import ViewRoomSummary from './rooms/ViewRoomSummary';
import StripeSuccess from './stripe/StripeSuccess';
import StripeCancel from './stripe/StripeCancel';
import SearchResult from './rooms/SearchResult';

function App() {
  return (
    <BrowserRouter>
    <TopNav />
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/restaurant' component={Restaurant} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/availability' component={Availability} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/profile' component={Dashboard} />
        <PrivateRoute exact path='/dashboard/seller' component={DashboardSeller} />
        <PrivateRoute exact path='/room/new' component={NewRoom} />
        <PrivateRoute exact path='/stripe/callback' component={StripeCallback} />
        <PrivateRoute exact path='/stripe/success/:roomId/:date' component={StripeSuccess} />
        <PrivateRoute exact path='/stripe/cancel' component={StripeCancel} />
        <PrivateRoute exact path='/room/edit/:roomId' component={EditRoom} />
        <Route exact path='/room/:roomId' component={ViewRoom} />
        <Route exact path='/room/:roomId/:date' component={ViewRoomSummary} />
        <Route exact path='/search-result' component={SearchResult} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;