/**
 * @File store creation and configuration
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmx.de
 */

import { applyMiddleware, compose, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers =
    (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// setup state
const store = createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
