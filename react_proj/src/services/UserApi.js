import axios from "axios";
const api_url="https://localhost:3000";

//Get Method

export const getAllUsers=async()=>await axios.get(`${api_url}/users`);

//POST Method

export const saveUser=(data)=>axios.post(`${api_url}/users`,data);

//PUT Method

const updateUser=(id,data)=>axios.put(`$(api_url)/users/$(id')


