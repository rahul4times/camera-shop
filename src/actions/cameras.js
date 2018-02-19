import axios from 'axios';

export const GET_CAMERAS_PENDING = 'GET_CAMERAS_PENDING';
export const GET_CAMERAS_SUCCESS = 'GET_CAMERAS_SUCCESS';

export const ADD_TOCART_PENDING = 'ADD_TOCART_PENDING';
export const ADD_TOCART_SUCCESS = 'ADD_TOCART_SUCCESS';

export const DELETE_ITEM_PENDING = 'DELETE_ITEM_PENDING';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';


export const getCameras = () =>{
  return async(dispatch) => {
    dispatch({ type: GET_CAMERAS_PENDING });
    let cameras = await axios.get('http://localhost:8000/cameras');
    dispatch({
      type: GET_CAMERAS_SUCCESS,
      payload: cameras
    })
  }
}

export const addToCart = (id) => {
  return async(dispatch) => {
    dispatch({ type: ADD_TOCART_PENDING });
    let inCart = await axios.patch(`http://localhost:8000/cameras/cart/${id}/add`);
    dispatch({
      type: ADD_TOCART_SUCCESS,
      payload: inCart
    });
  }
}

export const deleteFromCart = (id) => {
  return async(dispatch) => {
    dispatch({ type: DELETE_ITEM_PENDING });
    let outOfCart = await axios.patch(`http://localhost:8000/cameras/cart/${id}/remove`);
    dispatch({
      type: DELETE_ITEM_SUCCESS,
      payload: outOfCart
    });
  }
}
