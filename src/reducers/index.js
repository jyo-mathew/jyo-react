import {combineReducers} from 'redux';
import courses from './courseReducer';
import activity from './activityReducer'
const rootReducer = combineReducers({
  courses,activity

});
export default rootReducer;
