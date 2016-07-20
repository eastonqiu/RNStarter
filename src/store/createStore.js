import { createStore as _createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import thunkMiddleware from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware)
)(_createStore);

export default function createStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
