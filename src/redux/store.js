import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
// reducers
import saveListReducer from './reducers/saveList';
import moviesProcessingReducer from './reducers/moviesProcessing';

const rootReducer = combineReducers({
    saveList: saveListReducer,
    moviesProcessing: moviesProcessingReducer 
});
const middlewares = [ReduxThunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;