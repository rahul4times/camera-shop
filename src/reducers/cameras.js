import {
  GET_CAMERAS_PENDING, GET_CAMERAS_SUCCESS,
  ADD_TOCART_PENDING, ADD_TOCART_SUCCESS,
  DELETE_ITEM_PENDING, DELETE_ITEM_SUCCESS
} from '../actions/cameras';

export default (state=[], action) => {
  switch(action.type){
    case GET_CAMERAS_PENDING:
      return state;
    case GET_CAMERAS_SUCCESS:
      return [...action.payload.data];

    case ADD_TOCART_PENDING:
      return state;
    case ADD_TOCART_SUCCESS:

      const addedInCart = state.filter(item => {
        return item.id !== action.payload.data[0].id
      })

      return [...action.payload.data, ...addedInCart];


    case DELETE_ITEM_PENDING:
      return state;
    case DELETE_ITEM_SUCCESS:

      const deletedItem = state.filter(item => {
        return item.id !== action.payload.data[0].id
      });

      return [...action.payload.data, ...deletedItem];

    default:
      return state;
  }
}
