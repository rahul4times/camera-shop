import { GET_CAMERAS_PENDING, GET_CAMERAS_SUCCESS } from '../actions/cameras';

export default (state=[], action) => {
  switch(action.type){
    case GET_CAMERAS_PENDING:
      return state;
    case GET_CAMERAS_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
}
