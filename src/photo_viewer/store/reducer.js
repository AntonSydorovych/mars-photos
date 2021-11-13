const LOAD_PHOTOS = "LOAD_PHOTOS";
const LOAD_MORE_PHOTOS = "LOAD_MORE_PHOTOS";

const initialState = {
    allPhotos: '',
    shownPhotos: ' '
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PHOTOS:
            return {
                ...state,
                allPhotos: action.payload
            }

        case LOAD_MORE_PHOTOS:
            return {
                ...state,
                shownPhotos: [state.shownPhotos] //???
            }

        default:
            return state;
    }
}

export const loadPhotos = (payload) => {
    return {
        type: LOAD_PHOTOS,
        payload
    }
};

export const loadMorePhotos = () => {
    return {
        type: LOAD_MORE_PHOTOS
    }
};
