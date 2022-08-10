import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaFacebook, FaTwitter, FaInstagram, FaFlickr, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <MDBFooter className="page-footer font-small pt-4 mt-4 plb-footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Contact Us
            </h5>
            <p>
              Parc Le Breos House <br />
              Parkmill<br />
              Gower<br />
              Swansea<br />
              SA3 2HA<br /><br />

              info@parclebreos.co.uk<br />
              +44 (0)1792 371636<br />
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="4">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://parc-le-breos.co.uk/gower-accommodation/">Accommodation</a>
              </li>
              <li>
                <a href="https://parc-le-breos.co.uk/somewhere-special-in-the-gower-peninsula/">About Parc-Le-Breos</a>
              </li>
              <li>
                <a href="https://parc-le-breos.co.uk/the-gower-peninsula/">Local Information</a>
              </li>
              <li>
                <a href="https://parc-le-breos.co.uk/walks-in-the-gower-peninsula/">Gower Walks</a>
              </li>
              <li>
                <a href="https://parc-le-breos.co.uk/bed-and-breakfast-in-gower/">Booking</a>
              </li>
              <li>
                <a href="https://parc-le-breos.co.uk/photo-gallery/">Gallery</a>
              </li>
              <li>
                <a href="https://parc-le-breos.co.uk/gift-vouchers/">Gift Vouchers</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="4">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              More Info
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://parc-le-breos.co.uk/bed-and-breakfast-in-gower/">Tariff & Offers</a>
              </li>
              <li>
                <a href="https://parc-le-breos.co.uk/accommodation-in-gower/conferences-and-group-accommodation/">Group Bookings</a>
              </li>
              <li>
                <a href="https://parc-le-breos.co.uk/bed-and-breakfast-in-gower/terms-conditions/">Terms & Conditions</a>
              </li>
              <li>
                <a href="https://parc-le-breos.co.uk/bed-and-breakfast-in-gower/terms-conditions/">Cancellation Policy</a>
              </li>
              <li>
                <a href="https://parc-le-breos.co.uk/bed-and-breakfast-in-gower/terms-conditions/">Privacy Policy</a>
              </li>
            </ul>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1" href="https://www.facebook.com/parclebreoscountryhouse" target="_blank" rel="noreferrer">
              <FaFacebook className="icons" color="#3b5998" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1" href="https://twitter.com/parclebreos?s=20" target="_blank" rel="noreferrer">
              <FaTwitter className="icons" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1" href="https://www.instagram.com/parclebreos/?hl=en" target="_blank" rel="noreferrer">
              <FaInstagram className="icons instagram" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1" href="https://www.flickr.com/photos/parclebreos-guesthouse-gower/" target="_blank" rel="noreferrer">
              <FaFlickr className="icons" color="#ff0084" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1" href="https://www.youtube.com/channel/UCEnQbYiyswbgjaSi-1iujRw/videos" target="_blank" rel="noreferrer">
              <FaYoutube className="icons" color="#FF0000" />
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Parc le Breos
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;