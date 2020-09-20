/**
 * @file main entry
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';
import { Provider } from 'react-redux';
import store from './logic/store/index';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}
