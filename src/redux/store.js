import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// reducers
import saveListReducer from './reducers/saveList';
import moviesProcessingReducer from './reducers/moviesProcessing';
import searchBarReducer from './reducers/searchBar';
import newsProcessingReducer from './reducers/newsProcessing';
import themeReducer from './reducers/theme';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['saveList', 'moviesProcessing',  'theme']
}

const rootReducer = combineReducers({
    saveList: saveListReducer,
    moviesProcessing: moviesProcessingReducer,
    searchBar: searchBarReducer,
    newsProcessing: newsProcessingReducer,
    theme: themeReducer
});
const middlewares = [ReduxThunk, logger];

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)

export default store;