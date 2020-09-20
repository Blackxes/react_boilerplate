/**
 * @File combines all reducers in this app
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmx.de
 */

import { combineReducers } from 'redux';

const reducers = combineReducers({
    _app_version: () => ({
        version: '1.0.0'
    })
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;
