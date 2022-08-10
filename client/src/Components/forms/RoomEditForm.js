import {Select} from 'antd';

const {Option} = Select;

const RoomEditForm = ({
    values, setValues, handleChange, handleImageChange, handleSubmit
}) => {
    const {room_type, room_max_occupancy, description, amenities, size, pets, breakfast, price} = values
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="btn btn-outline-secondary btn-block m-2 text-left">
                    Image
                    <input
                        type="file" 
                        name="image" 
                        onChange={handleImageChange} 
                        accept="image/*" 
                        hidden 
                    />
                </label>

                <input 
                    type="text" 
                    name="room_type" 
                    onChange={handleChange} 
                    placeholder="Room Type" 
                    className="form-control m-2" 
                    value={room_type} 
                />

                <Select 
                    onChange={(value) => setValues({ ...values, room_max_occupancy: value })} 
                    className="w-100 m-2" 
                    size="large" 
                    placeholder="Maximum Occupacy"
                    value={room_max_occupancy}>
                    <Option key={1}>{1}</Option>
                    <Option key={2}>{2}</Option>
                    <Option key={3}>{3}</Option>
                    <Option key={4}>{4}</Option>
                </Select>

                <textarea
                    name="description"
                    onChange={handleChange}
                    placeholder="Description"
                    className="form-control m-2"
                    value={description}
                />
                
                <input 
                    type="text" 
                    name="amenities" 
                    onChange={handleChange} 
                    placeholder="Amenities" 
                    className="form-control m-2" 
                    value={amenities} 
                />

                <input 
                    type="text" 
                    name="size" 
                    onChange={handleChange} 
                    placeholder="Size" 
                    className="form-control m-2" 
                    value={size} 
                />

                <Select 
                    onChange={(value) => setValues({ ...values, pets: value })} 
                    className="w-100 m-2" 
                    size="large" 
                    placeholder="Pets allowed?"
                    value={pets}>
                    <Option key={true}>{"true"}</Option>
                    <Option key={false}>{"false"}</Option>
                </Select>

                <Select 
                    onChange={(value) => setValues({ ...values, breakfast: value })} 
                    className="w-100 m-2" 
                    size="large" 
                    placeholder="Breakfast included?"
                    value={breakfast}>
                    <Option key={true}>{"true"}</Option>
                    <Option key={false}>{"false"}</Option>
                </Select>

                <input 
                    type="text" 
                    name="price" 
                    onChange={handleChange} 
                    placeholder="Price" 
                    className="form-control m-2" 
                    value={price}
                />

                <button className="btn btn-outline-primary m-2">
                    Save
                </button>
            </div>
        </form>
    );
    };

export default RoomEditForm;