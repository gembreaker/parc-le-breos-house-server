import React, {useState} from 'react';
import {DatePicker, Select} from 'antd'
import {SearchOutlined} from '@ant-design/icons';
import moment from "moment";
import {useHistory} from 'react-router-dom';

// descrtucture values from ant components
const {RangePicker} = DatePicker;
const {Option} = Select;

const Search = () => {
    // state
    const [date, setDate] = useState('');

    // route
    const history = useHistory();

    const handleSubmit = () => {
        history.push(`/search-result?date=${date}`);
    }

    return (
        <div className="d-flex pb-4">
            <RangePicker onChange={(value, dateString) => setDate(dateString)}
            disabledDate={(current) => 
            current && current.valueOf() < moment().subtract(1, "days")
            } 
            className="w-100"
            />

            <SearchOutlined onClick={handleSubmit} className="btn btn-primary p-3 btn-square" />
        </div>
    )
}

export default Search;