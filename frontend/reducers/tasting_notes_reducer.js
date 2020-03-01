import { RECEIVE_TASTING_NOTE } from '../actions/tasting_note_actions';

const tastingNoteReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_TASTING_NOTE:
            newState[action.tastingNote.id] = action.tastingNote.note;
            return newState;
        default:
            return oldState;
    }
};

export default tastingNoteReducer;