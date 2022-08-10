import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import {Select} from 'antd';
import {read, updateRoom} from '../actions/room';
import { useSelector } from 'react-redux';
import RoomEditForm from '../Components/forms/RoomEditForm';

const {Option} = Select;

const EditRoom = ({match}) => {
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
    });

    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('https://via.placeholder.com/100x100.png?text=PREVIEW');
    
    // destructuring variables from state
    const {room_type, room_max_occupancy, description, amenities, size, pets, breakfast, price} = values;


    useEffect(() => {
        loadSellerRoom()
    }, []);

    const loadSellerRoom = async () => {
        let res = await read(match.params.roomId)
        setValues({ ...values, ...res.data });
        setPreview(`${process.env.REACT_APP_API}/room/image/${res.data._id}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let roomData = new FormData();
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
            let res = await updateRoom(token, roomData, match.params.roomId);
            toast.success(`${res.data.room_type} is updated`)
        } catch(err){
            console.log(err)
            toast.error(err.response.data.err);
        }
    }

    const handleImageChange = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    }

    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value})
    }

        return (
        <>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h2>Edit Room</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                    <br/>
                    <RoomEditForm
                        values={values}
                        setValues={setValues}
                        handleChange={handleChange}
                        handleImageChange={handleImageChange}
                        handleSubmit={handleSubmit}
                     />
                </div>
                <div className="col-md-2">
                <img src={preview} alt="preview_image" className="img img-fluid m-2" />
                <pre>{JSON.stringify(values, null, 4)}</pre>
                </div>
                </div>
            </div>
        </>
    )
}

export default EditRoom