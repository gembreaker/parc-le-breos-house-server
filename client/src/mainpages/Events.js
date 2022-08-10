import {Jumbotron} from 'reactstrap';
import Slideshow from '../Components/cards/Slideshow-wedding';
import BookNow from '../Components/cards/BookNow';

const Events = () => {
   return(
    <div>
        <Jumbotron className="jumbotron-events">
          <h1 className="font">Parc-Le-Breos for your perfect wedding day.</h1>
        </Jumbotron>
        <BookNow />
        <p className="container content" style={{textAlign:'center'}} id="content">
          <h1>Weddings In Gower</h1>
          <p>
            Parc-Le-Breos is a unique and secluded wedding venue in the heart of the Gower Peninsula. Family run, warm and welcoming, with extensive grounds, the venue can be booked exclusively for 2 days or more which allows you to truly relax and enjoy your wedding celebration with friends and family. We offer exclusive use weddings in the main house for up to 50 day guests a further 50 evening guests (100 total). For larger numbers, we recommend a marquee in our stunning grounds.
            <br />
            We truly understand the importance of creating memories that will last a lifetime, so every wedding at Parc Le Breos is completely unique: From your own bespoke menu through to our attentive service, throughout the luxury rooms and exquisite grounds; we have the everything you need to create your perfect day.
            <br />
            Whether you’re looking for a small romantic wedding venue, or an outdoor wedding for a large number of your family and friends, Parc-Le-Breos is a wonderful setting. Our location in the heart of the Gower Peninsula opens up endless photographic possibilities - not just within the house and grounds themselves but out in the surrounding countryside and nearby Three Cliffs Bay.
          </p>
          </p>
          
          
          <div className="container" style={{padding: '10px'}}>
            <div className="row">
              <div className="col-12 col-md-6 order-md-2" style={{textAlign:"center"}}>
                <h1>Ceremonies</h1>
                <p>
                    A number of rooms in the house are licensed for civil ceremonies, the largest of which can seat around 80 people but can accommodate more (up to 120) with a mixture of seated and standing. You are also welcome to enjoy an outdoor wedding blessing in the beautiful gardens which surround the house and sign the paperwork indoors in one of the licensed rooms.
                    <br /><br />
                    For more information, please call us on <a href="tel:01792 371636">01792 371636</a> or email our friendly team: <a href="mailto:weddings@parclebreos.co.uk">weddings@parclebreos.co.uk</a>
                </p>
              </div>
              <div className="col-12 col-md-6"  style={{textAlign:"center"}}>
                <img src="https://parc-le-breos.co.uk/wp-content/uploads/2017/01/weddings-parc-le-breos.jpg" alt="Wedding Ceremonies" />
              </div>
              </div>
              </div>
        <br /><br /><br/>
        
        <div style={{paddingLeft: '300px', paddingRight: '300px'}}>
          <Slideshow/>
        </div>
      </div>
    );
}

export default Events;