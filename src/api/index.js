import axios from "axios";

const url = "http://localhost:5000/items"

const createItem = (newItem) => axios.post(url, newItem);
const fetchItems = () => axios.get(url);
const deleteItem = (id) => axios.delete(`${url}/${id}`);


export {createItem, fetchItems, deleteItem}
