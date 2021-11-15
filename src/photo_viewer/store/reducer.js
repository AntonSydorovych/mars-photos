const LOAD_PHOTOS = "LOAD_PHOTOS";

const initialState = {
    allPhotos: [],
    shownPhotos: [],
    shownPhotosQuantity: 0,
    wasPhotosSearched: false
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_PHOTOS:
            return {
                ...state,
                allPhotos: action.payload,
                wasPhotosSearched: true
            };
        default:
            return state;
    }
};

export const loadPhotos = (payload) => {
    return {
        type: LOAD_PHOTOS,
        payload
    }
};
