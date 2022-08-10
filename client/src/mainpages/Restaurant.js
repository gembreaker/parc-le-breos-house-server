import { Jumbotron } from 'reactstrap';
import {Link} from 'react-scroll';
import BookNow from '../Components/cards/BookNow';
import LunchModal from '../Components/Modals/LunchModal';
import DinnerModal from '../Components/Modals/DinnerModal';
import AfternoonTeaModal from '../Components/Modals/AfternoonTeaModal';
import {useState} from 'react';

const Home = () => {
  const [showLModal, setShowLModal] = useState(false);
  const [showDModal, setShowDModal] = useState(false);
  const [showATModal, setShowATModal] = useState(false);
    return (
    <>
      <Jumbotron className="jumbotron-restaurant">
        <h1 className="font">Parc-Le-Breos Restaurant in Gower</h1>
      </Jumbotron>
      <BookNow />

        <p className="container content" style={{textAlign:'center'}} id="content">
          <h1>Parc-Le-Breos Restaurant in Gower</h1>
            We welcome you to our relaxed, informal and friendly restaurant in the heart of the Gower peninsular. Savour delicious meals prepared with the freshest high quality local produce. Many of the herbs, salad leaves, fruit and vegetables are grown in our Kitchen Garden. We happily cater for all dietary requirements, there are always vegetarian options on the menu and many of the dishes can be prepared as vegan or gluten free.
            <br />
            If you are looking forward to getting together with friends in the run up to Christmas you can head across to the festive pages of our website where you will find our Christmas menus.
            <br />
            The restaurant is open each evening throughout the week except for Tuesdays. Tables can be booked from 6pm - 8:30pm. We also serve lunches and sumptuous afternoon teas from Wednesday through to Saturday, while on Sunday we serve our ever-popular traditional Sunday lunch. Reserving a table is essential so please call us on <a href="tel:01792 371636">01792 371636</a>.
          </p>
          <div className="container" style={{backgroundColor: "#f4f2ea", padding: '10px'}}>
            <div className="row" data-aos="fade-right">
              <div className="col-12 col-md-6 order-md-2" style={{textAlign:"center"}}>
                <h1>Lunch</h1>
                <p>
                  Lunches Wednesday – Saturday.<br />
                  Sunday enjoy our special Sunday roast.
                </p>
                {showLModal && (
                        <LunchModal 
                            showLModal={showLModal} 
                            setShowLModal={setShowLModal} 
                        />
                    )
                }
                <Link to="/rooms" className="btn btn-primary" onClick={() => setShowLModal(!showLModal)}>More</Link>
              </div>
              <div className="col-12 col-md-6"  style={{textAlign:"center"}}>
                <img src="https://parc-le-breos.co.uk/wp-content/uploads/2019/11/new-lunch-436x195.jpg" alt="Lunch" />
              </div>
            </div><br /><br /><br /><br />
            <div className="row" data-aos="fade-left">
              <div className="col-12 col-md-6" style={{textAlign:"center"}}>
                <h1>Evening Dining</h1>
                <p>
                  2 courses from around £20 to be enjoyed in the comfort of our dining room or conservatory.
                </p>
                {showDModal && (
                        <DinnerModal 
                            showDModal={showDModal} 
                            setShowDModal={setShowDModal} 
                        />
                    )
                }
                <Link to="/rooms" className="btn btn-primary" onClick={() => setShowDModal(!showDModal)}>More</Link>
              </div>
              <div className="col-12 col-md-6 order-md-2" style={{textAlign:"center"}}>
                <img src="https://parc-le-breos.co.uk/wp-content/uploads/2019/11/dinner-436x195.jpg" alt="Dinner" />
              </div>
            </div><br /><br /><br /><br />
            <div className="row" data-aos="fade-right">
              <div className="col-12 col-md-6 order-md-2" style={{textAlign:"center"}}>
                <h1>Afternoon Tea</h1>
                <p>
                  £17.50 per person. Enjoy a range of savouries, sandwiches, & delightful cakes and scones.
                </p>
                {showATModal && (
                        <AfternoonTeaModal 
                            showATModal={showATModal} 
                            setShowATModal={setShowATModal} 
                        />
                    )
                }
                <Link to="/rooms" className="btn btn-primary" onClick={() => setShowATModal(!showATModal)}>More</Link>
              </div>
              <div className="col-12 col-md-6" style={{textAlign:"center"}}>
                <img src="https://parc-le-breos.co.uk/wp-content/uploads/2016/04/afternoon-tea-436x195.jpg" alt="Afternoon Tea" />
              </div>
            </div>
          </div>
    </>
  )
}

export default Home;