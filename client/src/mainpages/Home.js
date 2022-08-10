import { Jumbotron, Button } from 'reactstrap';
import HomePageCard from '../Components/cards/HomePageCard';
import AOSCards from '../Components/cards/AOSCards';
import {Link} from 'react-scroll';
import { AiOutlineArrowDown } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Map from '../Components/cards/Map.js';
import BookNow from '../Components/cards/BookNow';

AOS.init();

const Home = () => {
    return (
    <>
      <Jumbotron className="home-header">
          <h1 className="font">
            Parc le Breos
          </h1>
          <h1 className="font-subtitle" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">Stay in a unique and secluded Gower Bed and Breakfast</h1>
          <Link to="container" className="font-subtitle" spy={true} smooth={true} >
          <div className="arrow" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800"><AiOutlineArrowDown className="arrowdown" /></div>
          </Link>
      </Jumbotron>
      <BookNow />
      <AOSCards />
      <br /><br />
      <HomePageCard /><br />
      <Map />
    </>
  )
}

export default Home;