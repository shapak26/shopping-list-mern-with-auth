import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import itemReducer from './reducers/itemReducer'


const middleware = [thunk]


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(itemReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
));


export default store