import { createStore, compose } from 'redux';
import reducer from './components/reducers/MoodReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers()
);
