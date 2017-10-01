/**
 * Created by jyothismathew on 2017-09-30.
 */
export default function courseReducer(state=[],action){
switch(action.type){
  case 'CREATE_COURSE':
   return[...state,
     Object.assign({},action.course)];
    default:
    return state;
}
}
