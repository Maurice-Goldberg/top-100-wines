export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const openModal = () => {
    return {
        type: OPEN_MODAL
    };
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
}

export const startLoading = () => {
    return {
        type: START_LOADING
    }
}

export const stopLoading = () => {
    return {
        type: STOP_LOADING
    }
}