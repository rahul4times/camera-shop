import { ADD_TOCART_PENDING, ADD_TOCART_SUCCESS } from '../actions/cameras';

export default(state=[], action) => {
  switch(action.type){
    case ADD_TOCART_PENDING:
      return state;
    case ADD_TOCART_SUCCESS:

      const addedInCart = state.filter(item => {
        return item.id !== action.payload.data[0].id
      })
      
    return [...action.payload.data, ...addedInCart];

    default:
      return state;

  }
}
