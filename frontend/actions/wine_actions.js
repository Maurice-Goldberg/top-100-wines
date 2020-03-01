export const RECEIVE_WINES = "RECEIVE_WINES";
import * as WineAPIUtil from '../util/wine_api_util';

export const receiveWines = (wines) => {
    return {
        type: RECEIVE_WINES,
        wines
    };
}

export const fetchWines = () => (dispatch) => {
    return WineAPIUtil.fetchWines().then(
        wines => dispatch(receiveWines(wines))
    );
}