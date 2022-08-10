import axios from 'axios';

export const createRoom = async (token, data) => 
    await axios.post(`${process.env.REACT_APP_API}/create-room`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const allRooms = async () => 
    await axios.get(`${process.env.REACT_APP_API}/rooms`);

export const sellerRooms = async (token) => 
    await axios.get(`${process.env.REACT_APP_API}/seller-rooms`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
})

export const deleteRoom = async (token, roomId) => 
    await axios.delete(`${process.env.REACT_APP_API}/delete-room/${roomId}`, {
    headers: {
        Authorization: `Bearer ${token}`,
    }
})

export const readRoom = async(roomId) => 
    await axios.get(`${process.env.REACT_APP_API}/room/${roomId}`);

export const read = async (roomId, roomdate) => 
    await axios.get(`${process.env.REACT_APP_API}/room/${roomId}/${roomdate}`);

export const updateRoom = async (token, data, roomId) => 
    await axios.put(`${process.env.REACT_APP_API}/update-room/${roomId}`, data, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const userRoomBookings = async (token) => 
    await axios.get(`${process.env.REACT_APP_API}/user-room-bookings`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const searchListings = async (query) => 
    await axios.post(`${process.env.REACT_APP_API}/search-listings`, query);