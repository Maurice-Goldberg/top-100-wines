export const RECEIVE_TASTING_NOTE = "RECEIVE_TASTING_NOTE";
import * as TastingNoteAPIUtil from '../util/tasting_note_api_util';

export const receiveTastingNote = (tastingNote) => {
    return {
        type: RECEIVE_TASTING_NOTE,
        tastingNote
    };
}

export const fetchTastingNote = (wineId) => (dispatch) => {
    return TastingNoteAPIUtil.fetchTastingNote(wineId).then(
        tastingNote => dispatch(receiveTastingNote(tastingNote))
    );
}