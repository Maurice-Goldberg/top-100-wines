import {RECEIVE_WINES} from '../actions/wine_actions';

const winesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_WINES:
            Object.values(action.wines).forEach((wineObj) => {
                newState[wineObj.wineId] = wineObj;
            });
            return newState;
        default:
            return oldState;
    }
};

export default winesReducer;