import axios from 'axios';

export const createEvent = async (data) => 
    await axios.post(`${process.env.REACT_APP_API}/create-event`, data);