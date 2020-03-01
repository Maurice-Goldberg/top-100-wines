import { combineReducers } from 'redux';
import winesReducer from './wines_reducer';
import tastingNotesReducer from './tasting_notes_reducer';

const rootReducer = combineReducers({
    wines: winesReducer,
    tastingNotes: tastingNotesReducer
});

export default rootReducer;