import{createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
export default function configureStore(initialState) {
  console.log("hiii"+initialState);
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );

}
