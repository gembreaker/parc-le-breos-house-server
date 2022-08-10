import {useState} from 'react';
import {toast} from 'react-toastify';
import {Select} from 'antd';
import {createRoom} from '../actions/room';
import { useSelector } from 'react-redux';
import RoomCreateForm from '../Components/forms/RoomCreateForm'

const {Option} = Select;

const NewRoom = () => {
    // redux
    const {auth} = useSelector((state) => ({ ...state }));
    const {token} = auth;

    // state
    const [values, setValues] = useState({
        room_type: '',
        room_max_occupancy: '',
        description: '',
        amenities: '',
        size: '',
        pets: false,
        breakfast: false,
        price: '',
        image: '',
    });
    
    const [preview, setPreview] = useState('https://via.placeholder.com/100x100.png?text=PREVIEW');

    // destructuring variables from state
    const {room_type, room_max_occupancy, description, amenities, size, pets, breakfast, price, image} = values;

    const handleSubmit = async (e) => {
        e.preventDefault();

        let roomData = new FormData()
        roomData.append('room_type', room_type)
        roomData.append('room_max_occupancy', room_max_occupancy)
        roomData.append('description', description)
        roomData.append('amenities', amenities)
        roomData.append('size', size)
        roomData.append('pets', pets)
        roomData.append('breakfast', breakfast)
        roomData.append('price', price)
        image && roomData.append('image', image)

        try{
            let res = await createRoom(token, roomData);
            toast.success('New room is posted');
            setTimeout(() => {
            window.location.reload();
        }, 1000);
        }catch (err){
            console.log(err);
            toast.error(err.response.data);
        }
    };

    const handleImageChange = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setValues({ ...values, image: e.target.files[0] });
    }

    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
    <>
    <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Add Room</h2>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-10">
                <br />
                <RoomCreateForm
                    values={values}
                    setValues={setValues}
                    handleChange={handleChange}
                    handleImageChange={handleImageChange}
                    handleSubmit={handleSubmit}
                 />
            </div>
            <div className="col-md-2">
            <img src={preview} alt="preview_image" className="img img-fluid m-2" />
            <pre>{JSON.stringify(values, null, 4)}</pre></div>
        </div>
    </div>
    </>
    );
};

export default NewRoom;