import {Link} from 'react-router-dom';

function HomePageCard() {
return(
  <div className="carousel-inner py-4">
    <div className="carousel-item active">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card" data-aos="zoom-in">
              <img
                src="https://parc-le-breos.co.uk/wp-content/uploads/2019/04/parc-le-breos-bridal-suite.jpg"
                className="card-img-top"
                alt="Parc le Breos Bridal Suite"
              />
              <div className="card-body">
                <h5 className="card-title">Enchanting Rooms</h5>
                <p className="card-text">
                  Relax in style & comfort after a day exploring the beaches and scenery of the Gower Peninsula.
                </p>
                <Link to="/rooms" className="btn btn-primary">More</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-lg-block">
            <div className="card" data-aos="zoom-in">
              <img
                src="https://parc-le-breos.co.uk/wp-content/uploads/2019/11/new-lunch-436x195.jpg"
                className="card-img-top"
                alt="Lunch"
              />
              <div className="card-body">
                <h5 className="card-title">Relaxed Restaurant</h5>
                <p className="card-text">
                  Come and enjoy our relaxed restaurant in the heart of the Gower Peninsula.
                </p>
                <Link to="/restaurant" className="btn btn-primary">More</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-lg-block">
            <div className="card" data-aos="zoom-in">
              <img
                src="https://parc-le-breos.co.uk/wp-content/uploads/2019/06/Special-occasions-home-page-link.jpg"
                className="card-img-top"
                alt="Special Occasions Home Page Link"
              />
              <div className="card-body">
                <h5 className="card-title">Special Occasions</h5>
                <p className="card-text">
                  From birthdays to weddings, you can hire our venue for your celebration.
                </p>
                <Link to="/events" className="btn btn-primary">More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
);
}

export default HomePageCard;