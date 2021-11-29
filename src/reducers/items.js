import * as api from "../api/index.js";

const CREATE = "CREATE";
const FETCH_ALL = "FETCH_ALL";
const DELETE = "DELETE";

const initialState = [];


const itemsReducer = (items = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return [...items, action.payload];
    case FETCH_ALL:
      return action.payload;
    case DELETE:
      return items.filter((item) => item._id !== action.payload);
      default: 
        return items;
  }
};


const fetchItems = () => async (dispatch) => {
  try {
    const { data } = await api.fetchItems();
    dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
      console.log(error.message);
    }
  
};

const createItem = ( item) => async (dispatch) => {
    try {
      const {data} = await api.createItem( item);

      dispatch ({type: CREATE, payload: data });
    } catch (error) {
      console.log (error.message);
    }

};


const deleteItem = (id) => async (dispatch) => {
  try {
    await api.deleteItem(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};




export {itemsReducer, fetchItems, createItem, deleteItem}


