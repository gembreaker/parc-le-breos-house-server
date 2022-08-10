import {useState, useEffect} from 'react';
import {allRooms} from '../actions/room';
import {Jumbotron} from 'reactstrap';
import Search from '../Components/forms/Search';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        loadAllRooms();
    }, []);

    const loadAllRooms = async () => {
        let res = await allRooms();
        setRooms(res.data);
    }

    return (
        <>
            <Jumbotron className="jumbotron-rooms">
                <h1 className="font">Check Availability for our Rooms</h1>
            </Jumbotron>
            <div className="col">
                <br />
                <Search />
            </div>
            <div className="container-fluid">
            </div>
        </>
    )
}

export default Rooms;