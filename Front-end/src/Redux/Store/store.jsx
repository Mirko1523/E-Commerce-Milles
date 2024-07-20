import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import carsReducer from '../Reducer/reducer';

const store = createStore(
  carsReducer, 
  applyMiddleware(thunk)
);

export default store;
