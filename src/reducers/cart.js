import { ADD_TOCART_PENDING, ADD_TOCART_SUCCESS } from '../actions/cameras';

export default(state=[], action) => {
  switch(action.type){
    case ADD_TOCART_PENDING:
      return state;
    case ADD_TOCART_SUCCESS:

      const addedInCart = action.payload.data.filter((item, i) => {
        return (
          item.in_cart
        )
      })

    return action.payload.data;

    default:
      return state;

  }
}
