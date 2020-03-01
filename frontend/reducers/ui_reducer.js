import { OPEN_MODAL, CLOSE_MODAL, START_LOADING, STOP_LOADING } from '../actions/ui_actions';

const uiReducer = (oldState = {loading: false, modal: false}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case OPEN_MODAL:
            newState["modal"] = true;
            return newState;
        case CLOSE_MODAL:
            newState["modal"] = false;
            return newState;
        case START_LOADING:
            newState["loading"] = true;
            return newState;
        case STOP_LOADING:
            newState["loading"] = false;
            return newState;
        default:
            return oldState;
    }
};

export default uiReducer;