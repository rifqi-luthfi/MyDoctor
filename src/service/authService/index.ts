import axios from 'axios';
import { RegisterPayload } from '../../utils';

const BASE_URL = 'http://10.0.2.2:3000';
const axiosInstance = axios.create({baseURL: BASE_URL});

// Function to handle registration
export const registerUser = async (data: RegisterPayload) => {
  return await axiosInstance.post('register', data);
};
