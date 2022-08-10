import moment from "moment";
import {Select} from 'antd';
import {DatePicker} from 'antd';
import { Checkbox } from 'antd';

const {Option} = Select;

const EventsForm = ({
    values, setValues, handleChange, handleSubmit
}) => {
    const {firstName, lastName, phoneNumber, preferredDate, noOfGuests, services, notes} = values
    
    const options = [
        { label: 'Wedding Cereomony', value: 'Wedding Cereomony' },
        { label: 'Reception', value: 'Reception' },
        { label: 'Rehearsal Dinner', value: 'Rehearsal Dinner' },
        { label: 'Farewell Brunch', value: 'Farewell Brunch' },
      ];
    
    return (
    
    <form onSubmit={handleSubmit} className="mt-3">
            
        <div className="form-group mb-3">
            <input 
                type="text"
                className="form-control"
                onChange={handleChange} 
                placeholder="Enter first name"
                value={firstName}
            />
        </div>

        <div className="form-group mb-3">
            <input 
                type="text"
                className="form-control"
                onChange={handleChange} 
                placeholder="Enter last name"
                value={lastName}
            />
        </div>

        <div className="form-group mb-3">
            <input 
                type="text"
                className="form-control"
                onChange={handleChange} 
                placeholder="Enter phone number"
                value={phoneNumber}
            />
        </div>

        <DatePicker
            placeholder="Event date"
            className="form-control m-2"
            onChange={(date, dateString) =>
                setValues({ ...values, preferredDate: dateString })
            }
            disableDate={(current) => 
                current && current.valueOf() < moment().subtract(1, "days")
            }
        >
        </DatePicker>

        <Select 
            onChange={(value) => setValues({ ...values, noOfGuests: value })} 
            className="w-100 m-2" 
            size="large" 
            placeholder="No of Guests">
            <Option key={1}>{1}</Option>
            <Option key={2}>{2}</Option>
            <Option key={3}>{3}</Option>
            <Option key={4}>{4}</Option>
        </Select>

        <label className="form-label">Services:</label>
        <Checkbox.Group
            options={options}
            onChange={(value) => setValues({ ...values, services: value })} 
            className="w-100 m-2" 
            size="large" 
            placeholder="Services">
        </Checkbox.Group>

        <div className="form-group mb-3">
            <input 
                type="text"
                className="form-control"
                onChange={handleChange} 
                placeholder="Add some notes..."
                value={notes} 
            />
        </div>
        
        <button disabled={!firstName || !lastName || !phoneNumber || !preferredDate || !noOfGuests || !services} className="btn btn-primary" type="submit">
            Submit
        </button>
    </form>
)
}

export default EventsForm;