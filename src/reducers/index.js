import Cameras from './cameras';
import InCart from './cart';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  cameras: Cameras,
  inCart: InCart
});

export default rootReducers;
