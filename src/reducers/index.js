import Cameras from './cameras';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  cameras: Cameras
});

export default rootReducers;
