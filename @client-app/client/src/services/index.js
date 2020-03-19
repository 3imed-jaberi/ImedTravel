import axios from 'axios';


const API_URL = 'http://localhost/api';


const addBooking = (data) => axios.post(`${API_URL}/booking.php`, data);

const sendEmail = (data) => axios.post(`${API_URL}/email.php`, data);

const getAllTrips = () => axios.get(`${API_URL}/trips.php`);

const handleChatbot = (msg) => axios.post('http://localhost:5000/client',{ msg });

const deleteBooking = (By) =>     axios.delete(`${API_URL}/booking.php?cin1=${By}`);



export { 
  addBooking,
  deleteBooking,
  sendEmail,
  getAllTrips,
  handleChatbot
};