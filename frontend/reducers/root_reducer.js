import { combineReducers } from 'redux';
import winesReducer from './wines_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
    wines: winesReducer,
    ui: uiReducer
});

export default rootReducer;