import {useState, useEffect} from 'react';
import {allRooms} from '../actions/room';
import SmallCard from '../Components/cards/SmallCard';
import {Jumbotron} from 'reactstrap';
import BookNow from '../Components/cards/BookNow';

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
                <h1 className="font">Discover our wide range of rooms</h1>
            </Jumbotron>
            <BookNow />
            <div className="col">
                <br />
            </div>
            <div className="container-fluid">
                <br />
                {rooms.map((r) => (
                    <SmallCard key={r._id} r={r} />
                ))}
            </div>
        </>
    )
}

export default Rooms;