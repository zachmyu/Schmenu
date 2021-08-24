import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import usersReducer from './user'
import restaurantsReducer from './restaurant'
import menu_itemsReducer from './menu_item'
import ratingsReducer from './rating'
import savesReducer from './save'


const rootReducer = combineReducers({
  session,
  usersReducer,
  restaurantsReducer,
  menu_itemsReducer,
  ratingsReducer,
  savesReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
