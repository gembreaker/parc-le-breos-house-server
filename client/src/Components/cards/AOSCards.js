import AOS from 'aos';
import 'aos/dist/aos.css';
import InfoModal from '../Modals/InfoModal';
import {useState} from 'react';
import {Link} from 'react-router-dom';

AOS.init();

const AOSCards = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="accomodation">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="acc-desc">
                      <h2 data-aos="zoom-in"><span>Parc le Breos House</span></h2>
                        <p data-aos="zoom-in">
                          Enjoy a wonderful night's sleep in beautifully refurbished and unique accommodation in the heart of Gower. 
                          Each of the warm and comfortable en-suite bedrooms at Parc-Le-Breos combines a truly individual mix of antique furniture, stylish design, and modern bathroom facilities. 
                          Old-world charm alongside the best of today’s technology – free wireless internet access in all the bedrooms and public areas provides our guests with the perfect blend of old and new...
                        </p>
                        {showModal && (
                                      <InfoModal 
                                          showModal={showModal} 
                                          setShowModal={setShowModal} 
                                      />
                                  )
                              }
                      <a onClick={() => setShowModal(!showModal)}  className="box1_a"  data-aos="zoom-in">read more</a>
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-8 col-xs-12">
                    <div className="accomodation_box1">
                      <div className="col-md-4" data-aos="zoom-in">
                        <Link to="/restaurant">
                          <div className="acc-gallery img-hover-zoom">
                            <div className="over12"></div>
                              <img src="https://parc-le-breos.co.uk/wp-content/uploads/2019/07/ploughmans-lunch-text-300x300.jpg" />
                              <h3 className="head_1">Dining</h3> 
                            </div>
                        </Link>
                      </div>
                      <div className="col-md-4" data-aos="zoom-in">
                        <a href="">
                          <div className="acc-gallery img-hover-zoom">
                            <div className="over12"></div>
                            <img src="https://parc-le-breos.co.uk/wp-content/uploads/2019/11/big-house-to-rent-in-Gower.jpg" />
                            <h3 className="head_1">Exclusive Use</h3>
                          </div>	
                        </a>
                      </div>
                      <div className="col-md-4" data-aos="zoom-in">
                        <a href="">
                          <div className="acc-gallery img-hover-zoom">
                            <div className="over12 img-hover-zoom"></div>
                            <img src="https://parc-le-breos.co.uk/wp-content/uploads/photo-gallery/3-cliffs-med1.jpg" />
                            <h3 className="head_1">Walks from the Door</h3>
                          </div>
                        </a>
                      </div>
                      <div className="clearfix"></div>
                      <div className="col-md-6" data-aos="zoom-in-right">
                        <Link to="/events">
                          <div className="acc-gallery img-hover-zoom">
                            <div className="over12 img-hover-zoom"></div>	
                            <img src="https://parc-le-breos.co.uk/wp-content/uploads/2017/01/weddings-parc-le-breos.jpg" />
                            <h3 className="head_1">Weddings</h3>
                          </div>	
                        </Link>
                      </div>
                      <div className="col-md-6" data-aos="zoom-in-left">
                        <a href="">
                        <div className="acc-gallery img-hover-zoom">
                          <div className="over12"></div>
                            <img src="https://parc-le-breos.co.uk/wp-content/uploads/2017/03/corporate_events.jpg" />
                            <h3 className="head_1">Meetings</h3>
                          </div>
                        </a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default AOSCards;