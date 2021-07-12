import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
// reducers
import saveListReducer from './reducers/saveList';
import moviesProcessingReducer from './reducers/moviesProcessing';
import searchBarReducer from './reducers/searchBar';
import newsProcessingReducer from './reducers/newsProcessing';
import themeReducer from './reducers/theme';

const rootReducer = combineReducers({
    saveList: saveListReducer,
    moviesProcessing: moviesProcessingReducer,
    searchBar: searchBarReducer,
    newsProcessing: newsProcessingReducer,
    theme: themeReducer
});
const middlewares = [ReduxThunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;